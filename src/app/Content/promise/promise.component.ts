import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit{

  promiseRes:string='';
  buyLaptop!: Promise<any>; // Declare the promise property
  res1:string='Data';
  res2:string='Data';
  res3:string='Data';

  dell={
    brand:'Dell',
    hardDisk:'2 TB',
    color:'Black'
  };
  buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());

  ngOnInit(): void {
    
    // this.buyLaptop = new Promise((resolve,reject)=>{
    //   // resolve('SUCCESS..');     //any one is possible, not both
    //   // reject('REJECTED..');
    //   if(this.dellAvailable()){
    //     setTimeout(() => {
    //       resolve('Dell is purchased.');
    //     }, 3000);
    //   }
    //   else if(this.hpAvailable()){
    //     setTimeout(() => {
    //       resolve('Hp is purchased');
    //     }, 3000);        
    //   }
    //   else{
    //     setTimeout(() => {
    //       reject('Laptop is not availale at the store.');
    //     }, 3000);        
    //   }
    // });

    this.buyLaptop = new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(this.dell)
      }, 3000);
    })
  }
  
  // dellAvailable(){
  //   return false;
  // }

  // hpAvailable(){
  //   return true;
  // }

  // buyLaptopMethod(){    
  //   this.buyLaptop.then((res:any)=>{
  //     console.log('then:',res);    
  //     this.promiseRes = res;  
  //   });
  //   this.buyLaptop.catch((res)=>{
  //     console.log('catch:', res);
  //     this.promiseRes =res;
  //   });
  // }


  //using promise
  getData1(){
    this.res1 = 'Fetching data..';
    this.buyLaptop.then((res)=>{
      console.log('data1',res);
      this.res1 = JSON.stringify(res);
    });
  }

  //using async/await
  async getData2(){
    this.res2 = 'Fetching data..';
    let data = await this.buyLaptop;
    console.log('data2',data);
    this.res2 = JSON.stringify(data);
  }

  //using fetch api - promise
  // getData3(){
  //   this.res3 = 'Fetching data..';
  //   this.buyLaptop2.then((res)=>{
  //     console.log('data3',res);
  //     this.res3=JSON.stringify(res);
  //   });
  // }

  //using fetch - async/await
  async getData3(){
    this.res3 = 'Fetching data..';
    let data3 = await this.buyLaptop2;
    console.log(data3);
    this.res3=JSON.stringify(data3);    
  }
}

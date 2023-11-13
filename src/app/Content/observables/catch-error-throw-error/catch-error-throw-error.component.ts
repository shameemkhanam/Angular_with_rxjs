import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-catch-error-throw-error',
  templateUrl: './catch-error-throw-error.component.html',
  styleUrls: ['./catch-error-throw-error.component.scss']
})
export class CatchErrorThrowErrorComponent implements OnInit{
  // url = 'https://fakestoreapi.com/products/category/electronics';
  url = 'https://fakestoreapi.com';
  fetching:boolean= false;
  products:any;
  error:any;

  constructor(private http:HttpClient,private du:DesignUtilityService){}

  ngOnInit(): void {
    
  }

  getProducts(){
    this.fetching=true;
    this.du.getElectronicsProducts().subscribe((res)=>{      
      console.log(res);  
      this.products = res;
      this.fetching=false;    
    },
    (err)=>{
      this.error = err;
      this.fetching=false;
    });
  }


}

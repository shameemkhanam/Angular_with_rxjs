import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {
  url='https://fakestoreapi.com/products';
  // allProducts:any;
  allProducts!:Observable<any>;
  jewellery!:Observable<any>;
  electronics!:Observable<any>;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    // this.http.get(this.url).subscribe(res =>{
    //   // console.log(res);
    //   this.allProducts = res;
    // }); //or we can also display all products with another method

    this.allProducts = this.http.get(this.url).pipe(
      shareReplay()
    );
    
    this.jewellery = this.allProducts.pipe(
      map(res => res.filter((jData: any) => {
        return jData['category'] == 'jewelery'
      }))
    )

    this.electronics = this.allProducts.pipe(
      map(res => res.filter((Data: any) => {
        return Data['category'] == 'electronics'
      }))
    )

    
  }

}

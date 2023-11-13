import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getSearches(searchTerm: string | undefined){
    return this.http.get(this.url+'?q='+searchTerm);
  }
}

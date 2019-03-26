import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl:string = "https://www.booknomads.com/api/v0/isbn";
  constructor(private httpClient : HttpClient) { }
  getbooks(isbn){
    return this.httpClient.get(`${this.baseUrl}/${isbn}`);
}
}

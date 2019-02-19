import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private url = "https://api.jsonbin.io/b/5c659d25a83a29317734070a/6";

  constructor(private http:HttpClient) { }

  getItems(){
    return this.http.get(this.url);
  }
}

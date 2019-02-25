import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private url = "https://api.jsonbin.io/b/5c659d25a83a29317734070a/8";
  public songsList: any;

  constructor(private http:HttpClient) { }

  getItems(){
    return this.http.get(this.url);
  }

  setSongs(songs:any){
    this.songsList = songs;
  }

  getSongs(){
    return this.songsList;
  }
}

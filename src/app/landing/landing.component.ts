import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingService } from './landing.service';
import { Album } from './album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  private albums:any;
  private songList=[]; 
  public songs: any;
  constructor(private landingService:LandingService,private Router:Router) {
     
  }

  ngOnInit() {
    this.landingService.getItems().subscribe(
      data=> {
        this.albums = data;
        console.log("*****this.albums******",this.albums);
        // this.albums.forEach(songsOuterArray => {
        //   songsOuterArray.songs.forEach(songsInnerArray => {
        //     this.songList.push(songsInnerArray);
        //   }); 
        // });  
      }
    )
  }

  router(event){
    this.songs = event;
    console.log("%%EVENT%%",this.songs);
    this.Router.navigate(['\songs']);
    this.getSongs();
  }

  getSongs(){
    let i = 0;
    console.log("$$$$$$$",this.songs.songs.ur13);
    return this.songs.songs;
  }

}

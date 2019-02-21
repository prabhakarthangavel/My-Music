import { Component, OnInit } from '@angular/core';
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
  constructor(private landingService:LandingService,private Router:Router) {
     
  }

  ngOnInit() {
    this.landingService.getItems().subscribe(
      data=> {
        this.albums = data;
        console.log("*****this.albums******",this.albums);
        this.albums.forEach(songsOuterArray => {
          songsOuterArray.songs.forEach(songsInnerArray => {
            this.songList.push(songsInnerArray);
          }); 
        });
        // for(let i in this.songList )
        // console.log("******this.songList*********",this.songList[i].s1);    
      }
    )
  }

  router(event){
    console.log("%%EVENT%%",event);
    this.Router.navigate(['\songs']);
  }


}

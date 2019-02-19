import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingService } from './landing.service';
import { Album } from './album';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  private albums:any;
  private songList=[]; 
  constructor(private landingService:LandingService) {
     
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
        console.log("******this.songList*********",this.songList);    
      }
    )
  }


}

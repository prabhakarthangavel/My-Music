import { Component, OnInit, Input } from '@angular/core';
import { LandingService } from '../landing/landing.service';

@Component({
  selector: 'app-songs-view',
  templateUrl: './songs-view.component.html',
  styleUrls: ['./songs-view.component.css']
})
export class SongsViewComponent implements OnInit {
  public songsList = [];
  public songsArray = [];

  constructor(public landingService: LandingService) { }

  ngOnInit() {
    this.songsList = this.landingService.getSongs();
    // converting songsList to songsArray
    let x:any;
    for (x in this.songsList) {
        this.songsList.hasOwnProperty(x) && this.songsArray.push(this.songsList[x])
    }
    console.log("****this.res*******",this.songsArray);
  }

  

}

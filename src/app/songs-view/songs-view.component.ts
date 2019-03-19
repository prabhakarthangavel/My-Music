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
  public urlsList = [];
  public urlsArray = [];

  constructor(public landingService: LandingService) { }

  ngOnInit() {
    this.songsList = this.landingService.getSongs();
    this.urlsList =  this.landingService.getUrls();
    // converting songsList to songsArray
    let x:any;
    for (x in this.songsList) {
        this.songsList.hasOwnProperty(x) && this.songsArray.push(this.songsList[x])
    }
    for(x in this.urlsList){
      this.urlsList.hasOwnProperty(x) && this.urlsArray.push(this.urlsList[x])
    }
    console.log("****this.res*******",this.songsArray,this.urlsArray);
  }

  playAudio(event){
    console.log("$$$$songs$$$$",this.urlsArray[event]);
    var audio = new Audio();
    audio.src = "http://www.masstamilan.org/downloader/BmUkJPtC2Rg3dPgMtQHsGQ/1551288243/d128_cdn/17232";
    audio.load();
    audio.play();
  }
  

}

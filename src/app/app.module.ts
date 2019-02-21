import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';


import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingComponent } from './landing/landing.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { LandingService } from './landing/landing.service';
import { HttpClientModule } from '@angular/common/http';
import { SongsViewComponent } from './songs-view/songs-view.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent,
    AdminFormComponent,
    SongsViewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'mymusic'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component:LandingComponent},
      { path: 'songs', component:SongsViewComponent},
    ])
  ],
  providers: [LandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { MovieRowComponent } from './home/movie-row/movie-row.component';
import { FeaturedMovieComponent } from './home/featured-movie/featured-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieRowComponent,
    FeaturedMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

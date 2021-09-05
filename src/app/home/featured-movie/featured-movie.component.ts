import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.css']
})
export class FeaturedMovieComponent implements OnInit {
  @Input() item: any;
  firstDate = new Date();
  genres: any = [];

  constructor() { }

  ngOnInit(): void {
    this.firstDate = new Date(this.item.first_air_date);
    console.log(this.item);

    for(let i in this.item.genres){
      console.log(this.item.genres[i].name);
      this.genres.push(this.item.genres[i].name);
    }

  }


}

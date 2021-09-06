import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: AppService) { }
  lista: any;
  featuredData: any;
  blackHeader: any;
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    let  scrollListener = () => {
      if (window.scrollY > 10) {
        this.blackHeader = true;
      } else {
        this.blackHeader = false;
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }
  ngAfterContentInit(){
    this.service.getHomeList()
    .then(data => {
      this.lista = data;
      
      let originals = this.lista.filter((itemsFilter: { slug: string; }) =>{ return itemsFilter.slug === 'originals'});
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      this.service.getMovieInfo(chosen.id, 'tv').then(dataInfo => this.featuredData = dataInfo);

    });
    
  }

}

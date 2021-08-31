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
  ngOnInit(): void {
  }
  ngAfterContentInit(){
    this.service.getHomeList()
    .then(data => {
      this.lista = data;
      console.log(this.lista);
    });

    

  }

}

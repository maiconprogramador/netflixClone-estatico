import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.css']
})
export class MovieRowComponent implements OnInit {
  @Input() title: any;
  @Input() items: any;
  
  constructor() { }

  ngOnInit(): void {
  }
 

  
}

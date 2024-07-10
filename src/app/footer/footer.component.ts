import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
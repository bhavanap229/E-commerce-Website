import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://th.bing.com/th/id/OIP.ajHR9Viocw1TiSg3cr6VmwHaD4?w=323&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7`);
 popularProducts:undefined|product[];
 trendProducts:undefined|product[];
  constructor(private product:ProductService) {}

  ngOnInit(){
   this.product.popularProducts().subscribe((data)=>{
      this.popularProducts=data;
    })

    this.product.trendyProducts().subscribe((data)=>{
      this.trendProducts=data;
    })
  }
}
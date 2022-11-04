import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    { img: "../../assets/img/Banner 1.jpg" },
    { img: "../../assets/img/Banner 2.jpg" },
    { img: "../../assets/img/Banner 3.jpg" },
    { img: "../../assets/img/Banner 4.jpg" },
    { img: "../../assets/img/Banner 5.jpg" }
  ];
  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4 };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

}


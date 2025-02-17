import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seaching',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './seaching.component.html',
  styleUrls: ['./seaching.component.css'] // Fixed typo: styleUrl to styleUrls
})
export class SeachingComponent {
  products: any[] = [
    {
      id: 1,
      name: 'Audi',
      image: 'img/Audi-SQ8.jpg',
      price: 1200,
    },
    {
      id: 2,
      name: 'Aventador',
      image: 'img/chiem-nguong-lamborghini-aventador-s-roadster.jpg',
      price: 700,
    },
    {
      id: 3,
      name: 'TT 25',
      image: 'img/Audi-tt-25-anos.jpg',
      price: 1700,
    },
    {
      id: 4,
      name: 'Audi',
      image: 'img/Audi-SQ8.jpg',
      price: 300,
    },
    {
      id: 5,
      name: 'SQ8',
      image: 'img/Audi-SQ8.jpg',
      price: 7000,
    },
    {
      id: 6,
      name: 'Audi',
      image: 'img/Audi-SQ8.jpg',
      price: 900,
    },
    {
      id: 7,
      name: 'Audi RS5',
      image: 'img/Audi-RS5-Grey-2.jpg',
      price: 100,
    },
    {
      id: 8,
      name: 'Lambor',
      image: 'img/Lamborghini-Autenica.jpg',
      price: 600,
    },
  ];

  searching: string = '';

  filterName() {
    if (!this.searching) {
      return this.products;
    }
    return this.products.filter((item) =>
      item.name.toUpperCase().includes(this.searching.toUpperCase())
    );
  }
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrandbodyComponent } from '../brandbody/brandbody.component';
import { HeaderComponent } from '../header/header.component';
import { SeachingComponent } from '../seaching/seaching.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, FormsModule, BrandbodyComponent, HeaderComponent, SeachingComponent, FooterComponent],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  cars = [
    {
      name : 'Toyota',
      image: 'img/Lamborghini-Autenica.jpg',
      price: '25B' 

    },
    {
      name : 'Benley',
      image: 'img/bentley-bentayga.jpg',
      price: '25B' 

    },
    {
      name : 'Lamborghini',
      image: 'img/Lamborghini Aventador SVJ.jpg',
      price: '25B' 

    },
    {
      name : 'Benley',
      image: 'img/chiem-nguong-lamborghini-aventador-s-roadster.jpg',
      price: '25B' 

    },
    {
      name : 'Benley',
      image: 'img/bentley-bentayga.jpg',
      price: '25B' 

    },
    {
      name : 'Benley',
      image: 'img/bentley-bentayga.jpg',
      price: '25B' 

    },
    
  ]

  
}
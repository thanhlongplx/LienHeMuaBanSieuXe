import { Component } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { BrandbodyComponent } from '../brandbody/brandbody.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SeachingComponent } from '../seaching/seaching.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BodyComponent, SeachingComponent,BrandbodyComponent, FooterComponent,HeaderComponent, RouterModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

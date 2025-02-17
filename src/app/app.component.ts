import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { BrandbodyComponent } from './brandbody/brandbody.component';
import { FooterComponent } from './footer/footer.component';
import { SeachingComponent } from './seaching/seaching.component';
import { HomeComponent } from './home/home.component';
import { IntructionsComponent } from './intructions/intructions.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    BodyComponent,
    BrandbodyComponent,
    FooterComponent,
    SeachingComponent,
    RouterModule,
    IntructionsComponent,
    FormsModule
    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LienHeMuaBanSieuXe';
}

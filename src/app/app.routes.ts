import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BrandbodyComponent } from './brandbody/brandbody.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IntructionsComponent } from './intructions/intructions.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'body', component: BodyComponent },
  { path: 'brandbody', component: BrandbodyComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'instructions', component: IntructionsComponent },
];

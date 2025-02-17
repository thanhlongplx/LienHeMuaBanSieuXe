import { Component } from '@angular/core';

@Component({
  selector: 'app-intructions',
  standalone: true,
  imports: [],
  templateUrl: './intructions.component.html',
  styleUrl: './intructions.component.css'
})
export class IntructionsComponent {
  title = 'Intructions';
  contactInf: any[]=[
    {
      "name": "Lamborghini",
      "phone": "123456789",
    }
  ]

}

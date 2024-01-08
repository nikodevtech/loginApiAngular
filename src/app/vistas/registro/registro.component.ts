import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  email: string | undefined;
  password: string | undefined;
  confirmarPassword: string | undefined;

  constructor() {}

  register() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmarPassword);
  }

}

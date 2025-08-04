import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
// import { AppRoutingModule } from './app.routes'
import { ToDoComponent } from './Components/to-do/to-do.component';

import { NavbarComponent } from './Components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    ButtonModule,
    ToDoComponent,
    NavbarComponent,
    HttpClientModule
    // AppRoutingModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
}

import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { curencyPipe } from '../../pipes/pipes.pipe'
import { BackgrounddirectiveDirective } from '../../directives/backgrounddirective.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, curencyPipe, BackgrounddirectiveDirective ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  ngOnInit(): void {
   
    
  }
}



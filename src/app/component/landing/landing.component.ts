import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  isDropdownOpen: boolean = false;

  //toggle the dropdown visibility
  toggleDropdown(): void{
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}

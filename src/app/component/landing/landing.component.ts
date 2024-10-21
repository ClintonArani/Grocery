import { Component} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faChevronDown, faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FontAwesomeModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  faBars = faBars
  faChevronDown = faChevronDown
  isDropdownOpen: boolean = true;
  faPhone = faPhone;

  // Toggle the dropdown visibility
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen; // Toggle the value between true and false
  }
  items = [
    {name: "Fresh Fruit", image: "../assets/fresh_fruit.png"},
    {name: "Dried Fruit", image: "../assets/dried_fruit.png"},
    {name: "Vegetables", image: "../assets/vegetables.png"},
    {name: "Drink Fruit", image: "../assets/drink_fruit.png"},
    {name: "Apple Fruit", image: "../assets/apples.png"},
  ]
 
}


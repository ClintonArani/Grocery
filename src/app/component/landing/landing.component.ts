import { Component} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCalendar, faChevronDown, faComment, faEnvelope, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FontAwesomeModule, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  faBars = faBars
  faChevronDown = faChevronDown
  isDropdownOpen: boolean = true;
  faPhone = faPhone;
  faCalendar = faCalendar;
  faEnvelope = faEnvelope;
  faHeart = faHeart;
  faComment = faComment;

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

  products = [
    {name: 'Sukuma wiki (Kales)',image: '../assets/lp-1.jpg', amount:'30'},
    {name: 'bird eye chill',image: '../assets/chill.png', amount:'25'},
    {name: 'Bell Pepper',image: '../assets/lp-2.jpg', amount:'35'},
    {name: 'mushroom',image: '../assets/mushroom.png', amount:'45'},
    {name: 'beatroot',image: '../assets/beatroot.png', amount:'20'},
    {name: 'carrots',image: '../assets/carrots.png', amount:'40'},
    {name: 'ovacado',image: '../assets/ovacado.png', amount:'44'},
    {name: 'leafy greens',image: '../assets/leafy greens.png', amount:'50'},
    {name: 'garden vegetables',image: '../assets/garden vegetables.png', amount:'55'},
    {name: 'fruits and vegetables',image: '../assets/fruits and vegetables.png', amount:'75'},
    {name: 'easiest fruits.png',image: '../assets/easiest fruits.png', amount:'70'},
    {name: 'healthiest fruits',image: '../assets/healthiest fruits.png', amount:'80'}

  ]
 
}


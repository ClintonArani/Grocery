import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUser, faPhone, faHeart, faChevronDown, faShoppingBag, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faPinterest = faPinterest;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faPhone = faPhone;
  faHeart = faHeart;
  faChevronDown = faChevronDown;
  faShoppingBag = faShoppingBag;
  faShoppingBasket = faShoppingBasket;
  orderAmount: number = 99;
  itemAmount: number = 150;
}

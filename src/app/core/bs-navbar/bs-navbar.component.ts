import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  isCollapsed = false;
  appUser: AppUser;
  cart$: Observable<ShoppingCart>

  constructor(private router: Router, private auth: AuthService, private cartService: ShoppingCartService) {
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    this.cart$ = await this.cartService.getCart();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit, OnDestroy {
  orders;
  subscription: Subscription;

  constructor(
    private authService: AuthService, 
    private orderService: OrderService) {
  }

  async ngOnInit() {
    this.subscription = this.authService.user$
      .switchMap(
        user => this.orderService.getOrdersByUser(user.uid)
      )
      .subscribe(
        orders => this.orders = orders
      );
  }

  ngOnDestroy() {

  }

}

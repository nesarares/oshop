import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent {
  @Input('orders') orders;
}

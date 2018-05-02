import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  order;
  orderId: string;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService) {
    this.orderId = this.route.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    if (this.orderId) this.orderService
      .getOrderById(this.orderId)
      .take(1)
      .subscribe(order => this.order = order);
  }

}

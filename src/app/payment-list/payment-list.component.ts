import {Component, Input, OnInit} from '@angular/core';
import { Debtor } from '../debtor';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {

  @Input()
  public debtor?: Debtor
  public dateString = new Date().toISOString();
  public weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public pay(): void {
    if (this.debtor) {
      this.debtor.lastPaid = new Date(this.dateString);
    }
  }

}

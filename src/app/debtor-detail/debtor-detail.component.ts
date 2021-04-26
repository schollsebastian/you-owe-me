import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DebtorService } from '../debtor.service';
import Debtor from '../debtor';

@Component({
  selector: 'app-debtor-detail',
  templateUrl: './debtor-detail.component.html',
  styleUrls: ['./debtor-detail.component.scss']
})
export class DebtorDetailComponent implements OnInit {

  public debtor?: Debtor;

  constructor(
    private route: ActivatedRoute,
    private debtorService: DebtorService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.debtorService.getDebtor(id)
      .subscribe(debtor => this.debtor = debtor);
  }

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  public componentClassPrefix: string = 'paymentsComponent'
  public accountBalance: number = 500

  constructor() {
  }

  ngOnInit(): void {
  }

  public onSubmit = ($event: any) => {
    const resultData = { 
      ...$event.value, 
      accountBalance: this.accountBalance, 
      newAccountBalance: this.accountBalance - $event?.value?.paymentAmount ?? 0 }
    console.log(resultData)
    alert("Please check the browser console for output")
  }



}

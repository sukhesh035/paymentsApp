import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  public paymentsForm;

  public memberName = new FormControl('', [
    Validators.required,
  ]);
  constructor(private formBuilder: FormBuilder) {
    this.paymentsForm = formBuilder.group({
      memberName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      paymentAmount: ['', [Validators.required]],
    });
  }


  public componentClassPrefix: string = 'paymentsComponent'

  ngOnInit(): void {
  }

  public onSubmit = ()=> {
    console.log(this.paymentsForm.value)
  }

  get registerFormControl() {
    return this.paymentsForm.controls;
  }

}

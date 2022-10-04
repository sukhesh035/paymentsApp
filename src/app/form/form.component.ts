import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public paymentsForm;
  public accountBalance: number = 500;
  public componentClassPrefix: string = 'formComponent';

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();;

  constructor(private formBuilder: FormBuilder) {
    this.paymentsForm = formBuilder.group({
      memberName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      accountNumber: ['', [Validators.required]],
      paymentAmount: ['', [Validators.required, Validators.max(500)]],
    });
  }

  ngOnInit(): void {
  }

  get registerFormControl() {
    return this.paymentsForm.controls;
  }

  public submitForm = () => {

    if (this.paymentsForm.valid) {
      this.onSubmit.emit(this.paymentsForm);
    } else {
      alert("Please enter the inputs and look for the error messages")
    }

  }

}

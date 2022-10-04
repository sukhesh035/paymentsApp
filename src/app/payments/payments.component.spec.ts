import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaymentsComponent } from './payments.component';

describe('PaymentsComponent', () => {
  let component: PaymentsComponent;
  let fixture: ComponentFixture<PaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
    ],
      declarations: [ PaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});

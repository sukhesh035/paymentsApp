import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaymentsComponent } from './payments/payments.component';
const routes: Routes = [{ path: 'payments', component: PaymentsComponent }, { path: 'aboutUs', component: AboutUsComponent }, { path: '**', component: PaymentsComponent },];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverListComponent } from './driver-list/driver-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/drivers', pathMatch: 'full' },
  { path: 'drivers', component: DriverListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

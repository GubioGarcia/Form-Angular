import * as core from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { FormViewComponent } from './pages/form-view/form-view.component';
import { FormListComponent } from './pages/form-list/form-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: 'list', component: FormListComponent },
  { path: 'form', component: FormComponent },
  { path: 'view/:id', component: FormViewComponent }
];

@core.NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

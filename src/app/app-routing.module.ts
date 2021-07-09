import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ButtonsComponent } from './components/buttons/buttons.component';


const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: '**', pathMatch: 'full', redirectTo:'buttons' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';


const routes: Routes = [
  { path:'app-sign-in', component:SignInComponent},
  { path:'',   redirectTo:'app-sign-in', pathMatch: 'full'},
  { path:'**', redirectTo:'app-sign-in', pathMatch: 'full'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

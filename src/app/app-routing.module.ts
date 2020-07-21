import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MainChatRoomComponent } from './components/main-chat-room/main-chat-room.component';


const routes: Routes = [
  { path:'app-sign-in', component:SignInComponent},
  { path:'app-main-chat-room', component:MainChatRoomComponent},

  
  { path:'',   redirectTo:'app-sign-in', pathMatch: 'full'},
  { path:'**', redirectTo:'app-sign-in', pathMatch: 'full'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleMatrialModule } from './module-matriel/module-matriel.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainChatRoomComponent } from './components/main-chat-room/main-chat-room.component';
import { LogInComponent } from './components/log-in/log-in.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    MainChatRoomComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModuleMatrialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

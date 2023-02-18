import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvServiceProvider } from './service/env.service.provider';
import { SessionModule } from './session/session.module';
// import { SigninComponent } from './session/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    // SigninComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SessionModule,
    // ReactiveFormsModule
  ],
  providers: [EnvServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

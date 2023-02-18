import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './session/signin/signin.component';
import { AppComponent } from './app.component';

const routes: Routes = [
{ path: "session", loadChildren: () => import('./session/session.module').then(m => m.SessionModule) }, //Lazy Loading
{ path: "", redirectTo: "session/login", pathMatch: 'full' },


]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }

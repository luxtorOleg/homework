import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule} from '@angular/router';

import {AboutUsComponent} from './about-us/about-us.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'main', component: MainComponent },
  {path: 'about', component: AboutUsComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

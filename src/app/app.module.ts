import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MymoviesComponent } from './mymovies/mymovies.component';
import { MymoviesService } from './mymovies.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'mymovies',
    pathMatch: 'full'
  },
  {
    path: 'mymovies',
    component: MymoviesComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    MymoviesComponent
  ],
  providers: [MymoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

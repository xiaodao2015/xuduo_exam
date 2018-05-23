import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppTestHeroesComponent } from './app-test-component/app-test-heroes/app-test-heroes.component';
import { AppTestDetailComponent } from './app-test-component/app-test-detail/app-test-detail.component';
import { HeroService } from './app-test-component/hero.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AppTestHeroesComponent,
    AppTestDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

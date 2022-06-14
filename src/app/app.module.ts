import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';
//Componentes
import { ErrorComponent } from './shared/error/error.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UuidValidatorDirective } from './uuid-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LoginComponent,
    UuidValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

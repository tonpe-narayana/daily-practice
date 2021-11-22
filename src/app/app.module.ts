import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { UsersComponent } from './users/users.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {FormsModule} from '@angular/forms';
import { UsdinrPipe } from './pipes/usdinr.pipe'
import {ReactiveFormsModule } from '@angular/forms';
import { BrownElementDirective } from './brown-element.directive';
import { NopageComponent } from './nopage/nopage.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ChildComponent,
    ParentComponent,
    UsdinrPipe,
    BrownElementDirective,
    NopageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

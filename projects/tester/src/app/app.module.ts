import { SliderLabelModule } from 'slider-label';
import { NgmTreeGridModule } from 'ngm-tree-grid';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgmTreeGridModule,
    FormsModule,
    BrowserAnimationsModule,
    SliderLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgmTreeGridModule } from './../../../ngm-tree-grid/src/lib/ngm-tree-grid.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgmTreeGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

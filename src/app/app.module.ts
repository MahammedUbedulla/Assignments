import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridsListComponent } from './views/grids-list/grids-list.component';
import { GridListFormComponent } from './views/grid-list-form/grid-list-form.component';
import { AddressFormComponent } from './views/address-form/address-form.component';
import { NumberOnlyDirective } from './directives/number-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    GridsListComponent,
    GridListFormComponent,
    AddressFormComponent,
    NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

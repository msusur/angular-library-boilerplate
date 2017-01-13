import { BrowserModule } from '@angular/platform-browser';
import {
  ModuleWithProviders,
  NgModule
}
  from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DisplayComponent } from './components';
import { RoundDownPipe } from './pipes';

@NgModule({
  declarations: [
    DisplayComponent,
    RoundDownPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports:[
    RoundDownPipe,
    DisplayComponent
  ]
})
export class AngularLibExpModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularLibExpModule
    };
  }
}

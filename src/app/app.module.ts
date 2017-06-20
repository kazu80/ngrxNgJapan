import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './counter';
import {rootReducer} from './rootReducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TodoActions} from './todoActions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers   : [TodoActions],
  bootstrap   : [AppComponent]
})
export class AppModule { }

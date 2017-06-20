import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './counter';
import {rootReducer} from './rootReducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreLogMonitorModule, useLogMonitor} from '@ngrx/store-log-monitor';
import {TodoActions} from './todoActions';

export function instrumentOptions() {
  return {
    monitor: useLogMonitor({visible: true, position: 'right'})
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentStore(instrumentOptions),
    StoreLogMonitorModule
  ],
  providers   : [TodoActions],
  bootstrap   : [AppComponent]
})
export class AppModule { }

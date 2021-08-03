import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaymapComponent } from './displaymap/displaymap.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent,
    DisplaymapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4m5_MRVP69lJc4hnw2uMHTVA1KrDdXMk'
    }),
    AgmDirectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

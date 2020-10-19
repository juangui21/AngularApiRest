import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetaService } from './services/planeta.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    HttpClientModule],
  providers: [PlanetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

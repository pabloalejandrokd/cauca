import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighchartsChartComponent } from './highcharts-chart.component';
import { Nvd3 } from '../../node_modules/angular-nvd3';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    Nvd3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

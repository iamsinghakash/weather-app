import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search.component';
import { DataGridModule } from '../data-grid/data-grid.module';
import { GetWeatherDetails } from '../services/get-weather.service';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DataGridModule
  ],
  providers: [GetWeatherDetails],
  exports:[SearchComponent]
})
export class SearchModule { }

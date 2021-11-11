import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { SnowShopCommonComponent } from './snow-shop-common.component';



@NgModule({
  declarations: [
    SnowShopCommonComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  exports: [
    SnowShopCommonComponent
  ]
})
export class SnowShopCommonModule { }

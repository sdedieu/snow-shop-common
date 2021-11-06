import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SnowShopCommonComponent } from './snow-shop-common.component';



@NgModule({
  declarations: [
    SnowShopCommonComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    SnowShopCommonComponent
  ]
})
export class SnowShopCommonModule { }

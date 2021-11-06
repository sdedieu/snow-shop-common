import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowShopCommonComponent } from './snow-shop-common.component';

describe('SnowShopCommonComponent', () => {
  let component: SnowShopCommonComponent;
  let fixture: ComponentFixture<SnowShopCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowShopCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowShopCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowShopLibComponent } from './snow-shop-lib.component';

describe('SnowShopLibComponent', () => {
  let component: SnowShopLibComponent;
  let fixture: ComponentFixture<SnowShopLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowShopLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowShopLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

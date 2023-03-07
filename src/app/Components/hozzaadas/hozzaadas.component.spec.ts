import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HozzaadasComponent } from './hozzaadas.component';

describe('HozzaadasComponent', () => {
  let component: HozzaadasComponent;
  let fixture: ComponentFixture<HozzaadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HozzaadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HozzaadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

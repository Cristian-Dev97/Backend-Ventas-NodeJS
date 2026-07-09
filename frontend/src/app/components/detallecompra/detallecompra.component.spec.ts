import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecompraComponent } from './detallecompra.component';

describe('DetallecompraComponent', () => {
  let component: DetallecompraComponent;
  let fixture: ComponentFixture<DetallecompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallecompraComponent]
    });
    fixture = TestBed.createComponent(DetallecompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoventaComponent } from './encabezadoventa.component';

describe('EncabezadoventaComponent', () => {
  let component: EncabezadoventaComponent;
  let fixture: ComponentFixture<EncabezadoventaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncabezadoventaComponent]
    });
    fixture = TestBed.createComponent(EncabezadoventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

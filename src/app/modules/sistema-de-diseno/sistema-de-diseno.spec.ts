import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaDeDisenoComponent } from './sistema-de-diseno';

describe('SistemaDeDisenoComponent', () => {
  let component: SistemaDeDisenoComponent;
  let fixture: ComponentFixture<SistemaDeDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SistemaDeDisenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaDeDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

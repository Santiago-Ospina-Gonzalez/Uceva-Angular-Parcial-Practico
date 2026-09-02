import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSistemaDeDisenoComponent } from './table-sistema-de-diseno';

describe('TableSistemaDeDisenoComponent', () => {
  let component: TableSistemaDeDisenoComponent;
  let fixture: ComponentFixture<TableSistemaDeDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableSistemaDeDisenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSistemaDeDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

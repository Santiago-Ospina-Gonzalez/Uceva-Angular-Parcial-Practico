import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSistemaDeDisenoComponent } from './list-sistema-de-diseno';

describe('ListSistemaDeDisenoComponent', () => {
  let component: ListSistemaDeDisenoComponent;
  let fixture: ComponentFixture<ListSistemaDeDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSistemaDeDisenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSistemaDeDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

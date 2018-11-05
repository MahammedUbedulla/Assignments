import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsListComponent } from './grids-list.component';

describe('GridsListComponent', () => {
  let component: GridsListComponent;
  let fixture: ComponentFixture<GridsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

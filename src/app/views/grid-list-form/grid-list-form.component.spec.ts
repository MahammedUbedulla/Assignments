import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListFormComponent } from './grid-list-form.component';

describe('GridListFormComponent', () => {
  let component: GridListFormComponent;
  let fixture: ComponentFixture<GridListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

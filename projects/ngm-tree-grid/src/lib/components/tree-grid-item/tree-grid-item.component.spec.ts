import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGridItemComponent } from './tree-grid-item.component';

describe('TreeGridItemComponent', () => {
  let component: TreeGridItemComponent;
  let fixture: ComponentFixture<TreeGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmasTreeInputFormComponent } from './xmas-tree-input-form.component';

describe('XmasTreeInputFormComponent', () => {
  let component: XmasTreeInputFormComponent;
  let fixture: ComponentFixture<XmasTreeInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmasTreeInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmasTreeInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

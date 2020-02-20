import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmasTreeOutputComponent } from './xmas-tree-output.component';

describe('XmasTreeOutputComponent', () => {
  let component: XmasTreeOutputComponent;
  let fixture: ComponentFixture<XmasTreeOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmasTreeOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmasTreeOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

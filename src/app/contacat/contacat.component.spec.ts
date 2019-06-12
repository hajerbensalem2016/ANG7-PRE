import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacatComponent } from './contacat.component';

describe('ContacatComponent', () => {
  let component: ContacatComponent;
  let fixture: ComponentFixture<ContacatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

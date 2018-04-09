import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTestDetailComponent } from './app-test-detail.component';

describe('AppTestDetailComponent', () => {
  let component: AppTestDetailComponent;
  let fixture: ComponentFixture<AppTestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

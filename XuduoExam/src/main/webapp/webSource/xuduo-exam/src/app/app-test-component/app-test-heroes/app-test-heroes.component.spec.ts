import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTestHeroesComponent } from './app-test-heroes.component';

describe('AppTestHeroesComponent', () => {
  let component: AppTestHeroesComponent;
  let fixture: ComponentFixture<AppTestHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTestHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTestHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

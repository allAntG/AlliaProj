import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsFormGroupeComponent } from './questions-form-groupe.component';

describe('QuestionsFormGroupeComponent', () => {
  let component: QuestionsFormGroupeComponent;
  let fixture: ComponentFixture<QuestionsFormGroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsFormGroupeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsFormGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

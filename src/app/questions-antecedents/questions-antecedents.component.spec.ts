import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAntecedentsComponent } from './questions-antecedents.component';

describe('QuestionsAntecedentsComponent', () => {
  let component: QuestionsAntecedentsComponent;
  let fixture: ComponentFixture<QuestionsAntecedentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsAntecedentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsAntecedentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

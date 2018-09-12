import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsConducteurComponent } from './questions-conducteur.component';

describe('QuestionsConducteurComponent', () => {
  let component: QuestionsConducteurComponent;
  let fixture: ComponentFixture<QuestionsConducteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsConducteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireSousthemeComponent } from './questionnaire-soustheme.component';

describe('QuestionnaireSousthemeComponent', () => {
  let component: QuestionnaireSousthemeComponent;
  let fixture: ComponentFixture<QuestionnaireSousthemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireSousthemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireSousthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsFormEtapeComponent } from './questions-form-etape.component';

describe('QuestionsFormEtapeComponent', () => {
  let component: QuestionsFormEtapeComponent;
  let fixture: ComponentFixture<QuestionsFormEtapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsFormEtapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsFormEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

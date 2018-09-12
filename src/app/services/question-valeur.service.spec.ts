import { TestBed, inject } from '@angular/core/testing';

import { QuestionValeurService } from './question-valeur.service';

describe('QuestionValeurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionValeurService]
    });
  });

  it('should be created', inject([QuestionValeurService], (service: QuestionValeurService) => {
    expect(service).toBeTruthy();
  }));
});

import { QuestionBase } from './question-base';
import { QuestionListe } from '../data-model';

export class CheckBoxQuestion extends QuestionBase<string> {
  controlType = 'checkbox';
  options: QuestionListe[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

import { QuestionBase } from './question-base';
import { QuestionListe } from '../data-model';

export class RadioQuestion extends QuestionBase<string> {
  controlType = 'radiobt';
  options: QuestionListe[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

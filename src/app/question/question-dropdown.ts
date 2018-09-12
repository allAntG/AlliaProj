import { QuestionBase } from './question-base';
import { QuestionListe } from '../data-model';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: QuestionListe[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}

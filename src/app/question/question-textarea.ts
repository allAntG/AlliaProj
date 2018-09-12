import { QuestionBase } from './question-base';

export class TextareaQuestion extends QuestionBase<string> {
  controlType = 'textarea';
  minrows: number;
  maxrows: number;

  constructor(options: {} = {}) {
    super(options);
    this.minrows = options['minrows'] || '';
    this.maxrows = options['maxrows'] || '';

    if (options['autosize']) {
      this.controlType += 'autosize';
    }
  }
}

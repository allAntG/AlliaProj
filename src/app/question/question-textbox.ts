import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  minsize: number;
  maxsize: number;
  min: number;
  max: number;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';

    this.minsize = options['minsize'] || '';
    this.maxsize = options['maxsize'] || '';
    this.min = options['min'] || '';
    this.max = options['max'] || '';
  }
}

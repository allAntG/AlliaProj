import { QuestionBase } from './question-base';

export class TableauQuestion extends QuestionBase<string> {
    controlType = 'tabq';
    tabQuestion: QuestionBase<string>[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.tabQuestion = options['tabQuestion'] || [];
    }
}

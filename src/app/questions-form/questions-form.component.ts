import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../question/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.css']
})
export class QuestionsFormComponent implements OnInit {
  @Input() questionBase: QuestionBase<string>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get isValid() { return this.form.get(this.questionBase.key).valid; }
}

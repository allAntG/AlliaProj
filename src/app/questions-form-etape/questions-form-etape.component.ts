import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../question/question-base';
import { FormGroup } from '@angular/forms';
import { SousThemeEtape, Question, GroupeQuestionnaire } from '../data-model';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-questions-form-etape',
  templateUrl: './questions-form-etape.component.html',
  styleUrls: ['./questions-form-etape.component.css']
})
export class QuestionsFormEtapeComponent implements OnInit {
  @Input() etape: SousThemeEtape;
  @Input() form: FormGroup;

  questions: Question[] = [];
  questionsBase: QuestionBase<string>[] = [];
  groupes: GroupeQuestionnaire[] = [];

  constructor(
    private _questionService: QuestionService
  ) { }

  ngOnInit() {
    this.getGroupes();
    this.getQuestions();
  }

  getGroupes(): void {
    this._questionService.getGroupesEtape(this.etape.numSousThemeEtape)
      .subscribe(groupes => {
        this.groupes = groupes;
      });
  }

  getQuestions(): void {
    this._questionService.getQuestionsEtape(this.etape.numSousThemeEtape)
      .subscribe(questions => {
        this.questions = questions;
        this.questionsBase = this._questionService.questionsToQuestionsBase(questions);
        // this.form = this._qcs.toFormGroup(this.questionsBase);
      });
  }
}

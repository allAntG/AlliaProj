import { Component, OnInit, Input } from '@angular/core';
import { SousTheme, GroupeQuestionnaire } from '../data-model';
import { FormGroup } from '@angular/forms';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-questionnaire-soustheme',
  templateUrl: './questionnaire-soustheme.component.html',
  styleUrls: ['./questionnaire-soustheme.component.scss']
})
export class QuestionnaireSousthemeComponent implements OnInit {
  @Input() numeroTheme: number;
  @Input() numSousTheme: number;
  @Input() formGroupTheme: FormGroup;

  groupesSousTheme: GroupeQuestionnaire[] = [];

  constructor(private _questionService: QuestionService) { }

  ngOnInit() {
    this.getGroupes();
  }

  getGroupes() {
    this._questionService.getGroupesSousTheme(this.numeroTheme, this.numSousTheme)
      .subscribe((groupes) => {
        this.groupesSousTheme = groupes;
      });
  }
}

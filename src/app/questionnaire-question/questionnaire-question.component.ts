import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { SousThemeEtape, GroupeQuestionnaire, SousTheme } from '../data-model';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../services/question-control.service';

class EtapeQuestions {
  constructor(
    public groupes: GroupeQuestionnaire[],
    public formGroup: FormGroup,
    public etape?: SousThemeEtape,
  ) { }
}

@Component({
  selector: 'app-questionnaire-question',
  templateUrl: './questionnaire-question.component.html',
  styleUrls: ['./questionnaire-question.component.scss']
})
export class QuestionnaireQuestionComponent implements OnInit {
  @Input() numeroTheme: number;
  @Input() sousTheme: SousTheme;

  isModeQuest: boolean;
  payLoad = '';

  etapesQuestions: EtapeQuestions[] = [];

  constructor(
    private _questionService: QuestionService,
    private _qcs: QuestionControlService
  ) { }

  ngOnInit() {
    this.getEtapes();
  }

  get isValidForm(): boolean {
    const longTab = this.etapesQuestions.length;
    // mode étape on va tester tous les form des étapes
    for (let i = 0; i < longTab; i++) {
      if (!this.etapesQuestions[i].formGroup.valid) {
        // si un seul est non valide on renvoit false
        return false;
      }
    }

    return true;
  }

  getQuestions(_sousThemeEtape?: SousThemeEtape): void {
    this._questionService.getQuestionsSousThemeEtape(this.numeroTheme, this.sousTheme.numSousTheme, _sousThemeEtape.numSousThemeEtape)
      .subscribe(questions => {
        const formGrp = this._qcs.toFormGroup(this._questionService.questionsToQuestionsBase(questions));

        this._questionService.getGroupesSousThemeEtape(this.numeroTheme, this.sousTheme.numSousTheme, _sousThemeEtape.numSousThemeEtape)
          .subscribe(groupes => {
            this.etapesQuestions.push(new EtapeQuestions(
              groupes,
              formGrp,
              _sousThemeEtape
            ));
          });
        // this.tForm.push(this.form);
      }); // questions.filter(quest => quest.numeroTheme == this.numeroTheme));
  }

  getEtapes(): void {
    this._questionService.getSousThemesEtapesSousTheme(this.numeroTheme, this.sousTheme.numSousTheme)
      .subscribe(etapes => {
        if (etapes && etapes.length > 0) {
          // on a des étapes
          if (this.sousTheme.affStepper) { // on est en mode stepper
            this.isModeQuest = false;
          } else {
            this.isModeQuest = true;
          }

          // pour chaque étape on récupère l'étape, le form group et les groupes
          etapes.forEach((e) => {
            this.getQuestions(e);
          });
          // etapes.forEach(e => this.getQuestions(e.numSousThemeEtape));
        } else {
          // on n'a pas d'étapes --> on va récupérer les groupes et les questions
          this.isModeQuest = true; // on n'est pas en mode affichage des étapes (on est en mode affichage direct des questions)
          this.getQuestions();
        }
      });
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.etapesQuestions[0].formGroup.value);
  }

  onSubmitStep(_frmGrp: FormGroup) {
    console.log(this.isValidForm);


  }
}

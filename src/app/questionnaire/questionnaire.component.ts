import { Component, OnInit } from '@angular/core';
import { ThemeQuestionnaire, SousTheme, GroupeQuestionnaire, Question } from '../data-model';
import { QuestionService } from '../services/question.service';
import { StorageService } from '../services/storage.service';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../services/question-control.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { QuestionValeurService } from '../services/question-valeur.service';

class ThemeQuestionnaireForm {
  sousThemeQuestionnaire: SousTheme[] = [];
  groupesQuestionnaire: GroupeQuestionnaire[] = [];

  constructor(
    public themeQuestionnaire: ThemeQuestionnaire,
    public formTheme: FormGroup,
    public questionsQuestionnaire: Question[] = []
  ) { }
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  step = 0;
  nbThemes: number;

  themesQuest: ThemeQuestionnaireForm[] = [];
  themeQuestSel: ThemeQuestionnaireForm;

  constructor(
    private _questionService: QuestionService,
    private _storageService: StorageService,
    private _qcs: QuestionControlService,
    private _questionValeurService: QuestionValeurService
  ) { }

  ngOnInit() {
    this.step = Number.parseInt(this._storageService.sessionStorageGetItem(this._storageService.nomItemStorageStep, '0'));
    if (isNaN(this.step)) {
      this.step = 0;
    }

    this.getThemes();
    this.getTheme();

    // this._questionService.getCpVille()
    //   .subscribe(cp => {
    //     console.log(cp.filter(c => c.Code_postal.toString() === '26000'));
    //   });
  }

  getThemes(): void {
    this.themesQuest = [];

    this._questionService.getThemes()
      .subscribe(themes => {
        this.nbThemes = themes.length;

        for (let i = 0; i < this.nbThemes; i++) {
          const numTheme = themes[i].numero;

          this._questionService.getQuestionsTheme(numTheme)
            .subscribe(questions => {
              questions.forEach(q => {
                const qc = this._questionValeurService.questionsCleValeur.find(c => c.cle === q.nom);
                if (qc) {
                  q.questionValeur = qc.valeur;
                } else if (!q.questionValeur) {
                  q.questionValeur = undefined;
                }
              });

              this.themesQuest.push(new ThemeQuestionnaireForm(
                themes[i], this._qcs.toFormGroup(this._questionService.questionsToQuestionsBase(questions)), questions)
              );

              this._questionService.getSousThemesTheme(numTheme)
                .subscribe(st => {
                  if (st && st.length > 0) {
                    // on a un sous thème
                    this.themesQuest[i].sousThemeQuestionnaire = st;
                    this.themesQuest[i].sousThemeQuestionnaire.sort((a, b) => a.ordreSousTheme - b.ordreSousTheme);
                  } else {
                    // on n'a pas de sous thème --> on va simuler la présence d'un sous thème vide
                    this.themesQuest[i].sousThemeQuestionnaire.push(new SousTheme(0, this.step));
                  }
                });

              this._questionService.getGroupesTheme(numTheme)
                .subscribe(grp => {
                  this.themesQuest[i].groupesQuestionnaire = grp;
                  this.themesQuest[i].groupesQuestionnaire.sort((a, b) => a.ordreGroupe - b.ordreGroupe);
                });
            });
        }

        this.themesQuest.sort((a, b) => a.themeQuestionnaire.numero - b.themeQuestionnaire.numero);
      });
  }

  getTheme(): void {
    this.themeQuestSel = this.themesQuest.find(t => t.themeQuestionnaire.numero === this.step);
  }

  // getSousThemes(): void {
  //   this._questionService.getSousThemesTheme(this.step)
  //     .subscribe(stheme => {
  //       if (stheme && stheme.length > 0) {
  //         // on a un sous thème
  //         this.sousThemesQuest = stheme;
  //         this.sousThemesQuest.sort((a, b) => a.ordreSousTheme - b.ordreSousTheme);
  //       } else {
  //         // on n'a pas de sous thème --> on va simuler la présence d'un sous thème vide
  //         this.sousThemesQuest.push(new SousTheme(0, this.step));
  //       }
  //     });
  // }

  getGroupesSousTheme(_numTheme: number, _numST: number): GroupeQuestionnaire[] {
    return this.themesQuest.find(t => t.themeQuestionnaire.numero === _numTheme).
      groupesQuestionnaire.filter(g => g.numSousTheme === _numST);
  }

  setStep(index: number) {
    this.step = index;
    this._storageService.sessionStorageSetItem(this._storageService.nomItemStorageStep, this.step);

    this.getTheme();
  }

  nextStep() {
    if (this.step < this.nbThemes - 1) {
      this.setStep(this.step + 1);
    }
  }

  prevStep() {
    if (this.step > 0) {
      this.setStep(this.step - 1);
    }
  }

  stepChange(evt: StepperSelectionEvent) {
    this.setStep(evt.selectedIndex);
  }

  validQuest() {
    this.nextStep();
  }

  retourQuest() {
    this._storageService.sessionStorageSupprItem(this._storageService.nomItemStorageStep);
    this.setStep(0);
  }
}

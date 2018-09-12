import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { GroupeQuestionnaire } from '../data-model';
import { QuestionBase } from '../question/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionValeurService } from '../services/question-valeur.service';

@Component({
  selector: 'app-questions-form-groupe',
  templateUrl: './questions-form-groupe.component.html',
  styleUrls: ['./questions-form-groupe.component.scss']
})
export class QuestionsFormGroupeComponent implements OnInit {
  @Input() groupe: GroupeQuestionnaire;
  @Input() form: FormGroup;

  readonly optForme = {
    hideRequired: false,
    floatLabel: 'auto'
  };

  questionsBase: QuestionBase<string>[] = [];

  // cpville$: Observable<CpVille[]>;
  // private searchTerms = new Subject<{term: string, cle: string}>();

  constructor(
    private _questionService: QuestionService,
    private _questionValeurService: QuestionValeurService
  ) { }

  // search(term: string, _questionBase: QuestionBase<string>): void {
  //   if (_questionBase.key === 'questionAdresseCp' || _questionBase.key === 'questionAdresseVille') { // cp ou ville
  //     this.searchTerms.next({
  //       term: term,
  //       cle: _questionBase.key === 'questionAdresseCp' ? 'Code_postal' : 'Nom_commune'
  //     });
  //   }
  // }

  ngOnInit() {
    this.getQuestions();

    // this.cpville$ = this.searchTerms.pipe(
    //   // https://angular.io/tutorial/toh-pt6
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   switchMap((rech: {term: string, cle: string}) => this._questionService.searchCpVille(rech.term, rech.cle)),
    // );
  }

  getQuestions(): void {
    this._questionService.getQuestionsGroupe(this.groupe.numGroupe)
      .subscribe(questions => {
        this.questionsBase = this._questionService.questionsToQuestionsBase(questions);
      });
  }

  onChangeVal(_questionBase: QuestionBase<string>) {
    if (_questionBase.key === 'questionProfession') { // profession
      if (this.form.get(_questionBase.key).value === 'Autre') { // profession autre sélectionné
        // on affiche la saisie de la profession
        this.questionsBase[1].visible = true;
      } else {
        this.questionsBase[1].visible = false;
      }
    }

    if (_questionBase.key === 'questionAntec') { // antécédents Oui / Non
      if (this.form.get(_questionBase.key).value === 'Non') { // Non sélectionné
        // on affiche la saisie du nombre
        this.questionsBase[1].visible = true;
        this.questionsBase[2].visible = false;
        this.questionsBase[3].visible = false;
      } else {
        this.questionsBase[1].visible = false;
        this.questionsBase[2].visible = true;
        this.questionsBase[3].visible = true;
      }
    }

    if (_questionBase.key === 'questionSinistre') { // sinistres Oui / Non
      if (this.form.get(_questionBase.key).value === 'Oui') {
        this.questionsBase[1].visible = true;
      } else {
        this.questionsBase[1].visible = false;
      }
    }

    if (_questionBase.key === 'questionResiliation') { // résiliation Oui / Non
      if (this.form.get(_questionBase.key).value === 'Oui') {
        this.questionsBase[1].visible = true;
        this.questionsBase[2].visible = true;
      } else {
        this.questionsBase[1].visible = false;
        this.questionsBase[2].visible = false;
      }
    }

    _questionBase.value = this.form.get(_questionBase.key).value;
    this._questionValeurService.setQuestionValeur(_questionBase, this.form);
  }

  getErrorMessage(_questionBase: QuestionBase<string>) {
    const _formCtrl = this.form.get(_questionBase.key);

    if (_formCtrl.invalid) {
      if (_formCtrl.hasError('email')) {
        return _questionBase.messErreurMail || _questionBase.messErreur;
      } else if (
        _formCtrl.hasError('minlength') || _formCtrl.hasError('maxlength') ||
         _formCtrl.hasError('min') || _formCtrl.hasError('max')
      ) {
        return _questionBase.messErreurSize || _questionBase.messErreur;
      } else {
        return _questionBase.messErreur;
      }
    } else {
      return '';
    }
  }

  getHintMessage(_questionBase: QuestionBase<string>) {
    return _questionBase.hint;
  }
}

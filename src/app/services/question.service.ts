import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question, ThemeQuestionnaire, SousTheme, SousThemeEtape, GroupeQuestionnaire, QuestionListe, CpVille } from '../data-model';
import { questions, sousThemes, themesQuest, sousThemesEtapes, groupesQuest } from '../../assets/mock-questions';
import { QuestionBase } from '../question/question-base';
import { DropdownQuestion } from '../question/question-dropdown';
import { TextboxQuestion } from '../question/question-textbox';
import { isUndefined } from 'util';
import { TextareaQuestion } from '../question/question-textarea';
import { RadioQuestion } from '../question/question-radio';
import { CheckBoxQuestion } from '../question/question-checkbox';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return of(questions);
  }
  getQuestionsTheme(_numTheme: number): Observable<Question[]> {
    return of(questions.filter(q => q.numeroTheme === _numTheme));
  }
  getQuestionsSousTheme(_numTheme: number, _numSousTheme?: number): Observable<Question[]> {
    if (_numSousTheme && _numSousTheme !== 0) {
      return of(questions.filter(q => q.numeroTheme === _numTheme && q.numSousTheme === _numSousTheme));
    } else {
      return this.getQuestionsTheme(_numTheme);
    }
  }
  getQuestionsSousThemeEtape(_numTheme: number, _numSousTheme?: number, _numEtape?: number): Observable<Question[]> {
    if (_numEtape && _numEtape !== 0) {
      return of(questions.filter(
        q => q.numeroTheme === _numTheme && q.numSousTheme === _numSousTheme && q.numSousThemeEtape === _numEtape
      ));
    } else {
      return this.getQuestionsSousTheme(_numTheme, _numSousTheme);
    }
  }
  getQuestionsGroupe(_numGroupe: number): Observable<Question[]> {
    return of(questions.filter(q => q.numGroupe === _numGroupe));
  }
  getQuestionsEtape(_numEtape: number): Observable<Question[]> {
    return of(questions.filter(q => q.numSousThemeEtape === _numEtape));
  }

  getThemes(): Observable<ThemeQuestionnaire[]> {
    return of(themesQuest);
  }
  getTheme(_numTheme: number): Observable<ThemeQuestionnaire> {
    return of(themesQuest.find(t => t.numero === _numTheme));
  }

  getSousThemes(): Observable<SousTheme[]> {
    return of(sousThemes);
  }
  getSousThemesTheme(_numTheme: number): Observable<SousTheme[]> {
    return of(sousThemes.filter(t => t.numeroTheme === _numTheme));
  }

  getSousThemesEtapes(): Observable<SousThemeEtape[]> {
    return of(sousThemesEtapes);
  }
  getSousThemesEtapesTheme(_numTheme: number): Observable<SousThemeEtape[]> {
    return of(sousThemesEtapes.filter(t => t.numeroTheme === _numTheme));
  }
  getSousThemesEtapesSousTheme(_numTheme: number, _numSousTheme?: number): Observable<SousThemeEtape[]> {
    if (_numSousTheme && _numSousTheme !== 0) {
      // On a un sous-thème --> on retourne les étapes pour ce sous-thème
      return of(sousThemesEtapes.filter(st => st.numeroTheme === _numTheme && st.numSousTheme === _numSousTheme));
    } else {
      // On n'a pas de sous thème --> on retourne les étapes pour le thème
      return this.getSousThemesEtapesTheme(_numTheme);
    }
  }
  getSousThemeEtape(_numSousThemeEtape: number): Observable<SousThemeEtape> {
    return of(sousThemesEtapes.find(e => e.numSousThemeEtape === _numSousThemeEtape));
  }

  getGroupes(): Observable<GroupeQuestionnaire[]> {
    return of(groupesQuest);
  }
  getGroupesTheme(_numTheme: number): Observable<GroupeQuestionnaire[]> {
    return of(groupesQuest.filter(t => t.numeroTheme === _numTheme));
  }
  getGroupesSousTheme(_numTheme: number, _numSousTheme?: number): Observable<GroupeQuestionnaire[]> {
    if (_numSousTheme && _numSousTheme !== 0) {
      // On a un sous-thème --> on retourne les groupes pour ce sous-thème
      return of(groupesQuest.filter(st => st.numeroTheme === _numTheme && st.numSousTheme === _numSousTheme));
    } else {
      // On n'a pas de sous thème --> on retourne les groupes pour le thème
      return this.getGroupesTheme(_numTheme);
    }
  }
  getGroupesSousThemeEtape(_numTheme: number, _numSousTheme?: number, _numEtape?: number): Observable<GroupeQuestionnaire[]> {
    if (_numEtape && _numEtape !== 0) {
      // On a une étape --> on retourne les groupes pour cette étape
      return of(groupesQuest.filter(et =>
        et.numeroTheme === _numTheme && et.numSousTheme === _numSousTheme && et.numSousThemeEtape === _numEtape
      ));
    } else {
      return this.getGroupesSousTheme(_numTheme, _numSousTheme);
    }
  }
  getGroupesEtape(_numEtape: number): Observable<GroupeQuestionnaire[]> {
    return of(groupesQuest.filter(e => e.numSousThemeEtape === _numEtape));
  }

  questionsToQuestionsBase(_questions: Question[]) {
    const questionsBase: QuestionBase<string>[] = [];

    _questions.forEach(question => {
      if (question.typeInput === 'ouinon') {
        // Oui ou Non (choix radio bouton)
        if (isUndefined(question.valeurListe)) {
          question.valeurListe = [new QuestionListe('Oui'), new QuestionListe('Non')];
        }
        if (isUndefined(question.questionApparence)) {
          question.questionApparence = 'outline';
        }
        question.typeInput = 'radio';
      }

      if (question.valeurListe && question.valeurListe.length > 0) {
        // on a une liste de choix (sous forme de liste, de check box ou de radio bouton)
        if (question.typeInput === 'radio') { // radio boutons
          questionsBase.push(new RadioQuestion(this.getQuestionsOptions(question)));
        } else if (question.typeInput === 'check') { // check boxs
          questionsBase.push(new CheckBoxQuestion(this.getQuestionsOptions(question)));
        } else { // liste de choix (select)
          questionsBase.push(new DropdownQuestion(this.getQuestionsOptions(question)));
        }
      } else if (question.typeInput === 'textarea') {
        // Textarea (texte sur plusieurs lignes)
        questionsBase.push(new TextareaQuestion(this.getQuestionsOptions(question)));
      } else if (question.typeInput === 'datepicker') {
        // TODO : mettre en place le datepicker https://material.angular.io/components/datepicker/overview
        questionsBase.push(new TextboxQuestion(this.getQuestionsOptions(question)));
      } else {
        // Textbox (input) normale
        questionsBase.push(new TextboxQuestion(this.getQuestionsOptions(question)));
      }
    });

    return questionsBase.sort((a, b) => a.order - b.order);
  }

  private getQuestionsOptions(_question: Question): {} {
    const questVisible = isUndefined(_question.isVisible) ? true : _question.isVisible;

    return {
      key: _question.nom,
      label: _question.questionLib,
      value: _question.questionValeur,
      required: _question.isObligatoire,
      options: _question.valeurListe,
      order: _question.ordreQuestion,
      messErreur: _question.libMesErr,
      messErreurMail: _question.libMesErrEMail,
      messErreurSize: _question.libMesErrTaille,
      type: _question.typeInput,
      appearance: _question.questionApparence,
      nonVide: _question.isNonVide,
      title: _question.questionTitre,
      visible: questVisible,
      class: _question.classeCSS,
      autosize: _question.tailleAuto,
      minrows: _question.minLigne,
      maxrows: _question.maxLigne,
      minsize: _question.minLongueur,
      maxsize: _question.maxLongueur,
      size: _question.taille,
      min: _question.minValeur,
      max: _question.maxValeur,
      hint: _question.hint,
      hintAlign: _question.hintAlign,
      hintDroit: _question.hintDroit,
      texteAide: _question.texteAide
    };
  }

  getCpVille() {
    return this._http.get<CpVille[]>('../assets/mock-cpville.json');
  }
}

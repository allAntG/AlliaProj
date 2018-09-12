import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question/question-base';
import { StorageService } from './storage.service';
import { isUndefined } from 'util';

// class ValeurQuestions<T> {
//   constructor(
//     public questionBase: QuestionBase<T>,
//     public formGroup: FormGroup
//   ) { }
// }

@Injectable({
  providedIn: 'root'
})
export class QuestionValeurService {
  // questionsValeur: ValeurQuestions<string>[] = [];
  questionsCleValeur: {cle: string, valeur?: any}[] = [];

  constructor(private _storageService: StorageService) {
    this.getQuestionsCleValeur();
  }

  setQuestionValeur(_questBase: QuestionBase<string>, _frmGrp: FormGroup) {
    // teste si question existe dans tableau
    // const _questValeur: ValeurQuestions<string> = this.questionsValeur.find((qv) => qv.questionBase.key === _questBase.key);
    // if (isUndefined(_questValeur)) {
    //   // existe pas donc on ajoute les valeurs
    //   this.questionsValeur.push(new ValeurQuestions<string>(_questBase, _frmGrp));
    // } else {
    //   // existe donc on modifie les valeurs
    //   _questValeur.questionBase = _questBase;
    //   _questValeur.formGroup = _frmGrp;
    // }

    const _val = this.questionsCleValeur.find(cv => cv.cle === _questBase.key);
    if (_val) {
      _val.valeur = _questBase.value;
    } else {
      this.questionsCleValeur.push({cle: _questBase.key, valeur: _questBase.value});
    }

    // sauvegarde des valeurs sur le local storage
    // this._storageService.localStorageSetItem(
    //   this._storageService.nomItemStorageObjetVal,
    //   this.questionsValeur.map<QuestionBase<string>>(q => {
    //     return q.questionBase;
    //   })
    // );
    this._storageService.localStorageSetItem(this._storageService.nomItemStorageObjetVal, this.questionsCleValeur);
  }

  private getQuestionsCleValeur() {
    // const tVal: Array<any> = this._storageService.localStorageGetItemObjet(this._storageService.nomItemStorageObjetVal);
    // return tVal.map(v => {
    //   return {cle: v.key, valeur: v.value};
    // });

    this.questionsCleValeur = this._storageService.localStorageGetItemObjet(this._storageService.nomItemStorageObjetVal);
    if (isUndefined(this.questionsCleValeur)) {
      this.questionsCleValeur = [];
    }
  }
}

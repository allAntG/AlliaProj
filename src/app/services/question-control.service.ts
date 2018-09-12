import { Injectable } from '@angular/core';
import { QuestionBase } from '../question/question-base';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl, FormArray } from '@angular/forms';
import { TableauQuestion } from '../question/question-base-tableau';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<string>[]) {
    const group: any = {};

    questions.forEach(question => {
      const _tFrmCtrl: FormControl[] = [];
      let _tQuest: QuestionBase<string>[] = [];
      if (question.controlType === 'tabq') {
        _tQuest = question.tabQuestion;
      } else {
        _tQuest.push(question);
      }

      _tQuest.forEach(quest => {
        const tabValid: any[] = [];
        let frmCtrl: FormControl;

        if (quest.nonVide) {
          tabValid.push(stringTrimValidator());
        } else if (quest.required) {
          tabValid.push(Validators.required);
        }

        if (quest.type === 'email') {
          tabValid.push(Validators.email);
        }

        if (quest.minsize && quest.minsize > 0) {
          tabValid.push(Validators.minLength(quest.minsize));
        }
        if (quest.maxsize && quest.maxsize > 0) {
          tabValid.push(Validators.maxLength(quest.maxsize));
        }

        if (quest.min) {
          tabValid.push(Validators.min(quest.min));
        }
        if (quest.max) {
          tabValid.push(Validators.max(quest.max));
        }

        if (tabValid.length > 0) {
          frmCtrl = new FormControl(quest.value || '', tabValid);
        } else { frmCtrl = new FormControl(quest.value || ''); }

        if (question.controlType === 'tabq') {
          _tFrmCtrl.push(frmCtrl);
        } else {
          group[question.key] = frmCtrl;
        }
      });

      if (question.controlType === 'tabq') {
        group[question.key] = new FormArray(_tFrmCtrl);
      }
    });

    return new FormGroup(group);
  }
}

export function stringTrimValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    let strVal = '';
    if (control.value) {
      strVal = control.value;
    }

    const forbidden = (strVal.trim().length === 0);
    return forbidden ? { 'stringTrim': { value: control.value } } : null;
  };
}


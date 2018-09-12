import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions-antecedents',
  templateUrl: './questions-antecedents.component.html',
  styleUrls: ['./questions-antecedents.component.css']
})
export class QuestionsAntecedentsComponent implements OnInit {
  step = 0;

  antecFormGroup: FormGroup;
  sinistreFormGroup: FormGroup;
  resilFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { this.createForm(); }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  createForm() {
    this.antecFormGroup = this._formBuilder.group({
      antecCtrl: ['', Validators.required],
      ancienAssuCtrl: ['', Validators.required],
      ancienAssuTmpCtrl: ['', Validators.required]
    });

    this.sinistreFormGroup = this._formBuilder.group({secondCtrl: ['', Validators.required]});
    this.resilFormGroup = this._formBuilder.group({thirdCtrl: ['', Validators.required]});
  }
}

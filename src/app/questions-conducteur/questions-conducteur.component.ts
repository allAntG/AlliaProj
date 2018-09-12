import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question, ThemeQuestionnaire } from '../data-model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-questions-conducteur',
  templateUrl: './questions-conducteur.component.html',
  styleUrls: ['./questions-conducteur.component.css']
})
export class QuestionsConducteurComponent implements OnInit {
  themes: ThemeQuestionnaire[];
  questions: Question[];

  // questionNom: string = "";
  // questionPrenom: string = "";
  // questionDateNaiss: string;
  // questionDatePermis: string;
  // questionProfessionAutreSaisie: string = "";
  // questionProfessionAutre: string = "";

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  adresseFormGroup: FormGroup;
  mailtelFormGroup: FormGroup;

  affAutreProfession = false;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private _formBuilder: FormBuilder,
    private _questionService: QuestionService
  ) {
    this.createForm();
   }

  createForm() {
    this.firstFormGroup = this._formBuilder.group({
      nomCtrl: ['', stringTrimValidator()],
      prenomCtrl: ['', stringTrimValidator()]
    });

    this.secondFormGroup = this._formBuilder.group({secondCtrl: ['', Validators.required]});
    this.thirdFormGroup = this._formBuilder.group({thirdCtrl: ['', Validators.required]});

    this.fourthFormGroup = this._formBuilder.group({
      professCtrl: ['', Validators.required],
      professAutreCtrl: ''
    });

    this.adresseFormGroup = this._formBuilder.group({
      adresseCtrl: ['', Validators.required],
      adresseCpCtrl: ['', Validators.required],
      adresseVilleCtrl: ['', Validators.required]
    });

    this.mailtelFormGroup = this._formBuilder.group({
      adrEMailCtrl: this.emailFormControl,
      telephoneCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getThemes();
    this.getQuestions();
  }

  get isValidForm(): boolean {
    return (this.isValidFormNomPrenom
      && this.secondFormGroup.valid
      && this.thirdFormGroup.valid
      && this.fourthFormGroup.valid
      && this.adresseFormGroup.valid
      && this.mailtelFormGroup.valid
    );
  }

  get isValidFormNomPrenom(): boolean {
    return this.firstFormGroup.valid;
  }

  getQuestions(): void {
    this._questionService.getQuestionsTheme(0)
      .subscribe(questions => this.questions = questions);
      // .filter(quest => quest.numeroTheme === this.NUM_THEME && quest.numSousTheme === st.numSousTheme));
  }

  getThemes(): void {
    this._questionService.getThemes().subscribe(themes => this.themes = themes);
  }

  onChangeVal(numVal: number, valeur: string) {
    this.questions[numVal].questionValeur = valeur;

    if (numVal.toString() === '4') {
      // profession
      const nbValLst = this.questions[4].valeurListe.length;
      if (valeur.toString() === this.questions[4].valeurListe[nbValLst - 1].valeur.toString()) {
        // profession autre sélectionné
        this.affAutreProfession = true;
      } else {
        this.affAutreProfession = false;
      }
    }

    if (this.isValidForm) {
      // .errors === null
      this.themes[0].valide = true;
      this.themes[1].disabled = false;
    } else {
      this.themes[0].valide = false;
      this.themes[1].disabled = true;
    }
  }
}

export function stringTrimValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    let strVal = '';
    if (control.value) {
      strVal = control.value;
    }

    const forbidden = (strVal.trim().length === 0);
    return forbidden ? {'stringTrim': {value: control.value}} : null;
  };
}

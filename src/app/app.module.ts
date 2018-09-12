import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CdkTableModule} from '@angular/cdk/table';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule, MatExpansionModule, MatButtonModule, MatIconModule, MatCardModule, MatStepperModule,
  MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule,
  MatRadioModule, MatProgressBarModule, MatAutocompleteModule, MatCheckboxModule
} from '@angular/material';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
// import * as _moment from 'moment';
// import {default as _rollupMoment} from 'moment';
// const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

// import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionsConducteurComponent } from './questions-conducteur/questions-conducteur.component';
import { QuestionnaireQuestionComponent } from './questionnaire-question/questionnaire-question.component';
import { QuestionsAntecedentsComponent } from './questions-antecedents/questions-antecedents.component';
import { QuestionsFormComponent } from './questions-form/questions-form.component';
import { QuestionsFormEtapeComponent } from './questions-form-etape/questions-form-etape.component';
import { QuestionsFormGroupeComponent } from './questions-form-groupe/questions-form-groupe.component';
import { QuestionnaireSousthemeComponent } from './questionnaire-soustheme/questionnaire-soustheme.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatRadioModule,
    MatProgressBarModule,
    MatCheckboxModule
  ]
})
export class AppMaterialModule {}


@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    QuestionsConducteurComponent,
    QuestionnaireQuestionComponent,
    QuestionsAntecedentsComponent,
    QuestionsFormComponent,
    QuestionsFormEtapeComponent,
    QuestionsFormGroupeComponent,
    QuestionnaireSousthemeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MatNativeDateModule,
    HttpClientModule
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

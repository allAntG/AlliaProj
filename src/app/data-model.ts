import { isUndefined } from 'util';

export class ThemeQuestionnaire {
    constructor(
        public numero: number,
        public titre: string,
        public description?: string,
        public icone?: string,
        public disabled = true,
        public valide = false
    ) { }
}

export class SousTheme {
    constructor(
        public numSousTheme: number,
        public numeroTheme: number,
        public ordreSousTheme: number = 0,
        public sousThemeLib?: string,
        public affStepper?: boolean,
        public classeCSS?: string
    ) { }
}

export class SousThemeEtape {
    constructor(
        public numSousThemeEtape: number,
        public numeroTheme: number,
        public sousThemeEtapeLib: string,
        public numSousTheme?: number,
        public ordreSousThemeEtape: number = 0,
        public classeCSS?: string
    ) { }
}

export class GroupeQuestionnaire {
    constructor(
        public numGroupe: number,
        public numeroTheme: number,
        public groupeLib: string,
        public groupeTitre?: string,
        public numSousTheme?: number,
        public numSousThemeEtape?: number,
        public ordreGroupe: number = 0,
        public classeCSS?: string
    ) { }
}

export class Question {
    questionValeur?: string;
    valeurListe?: QuestionListe[];
    icone?: string;
    libMesErr?: string;
    libMesErrEMail?: string;
    libMesErrTaille?: string;
    typeInput?: string; // = 'text';
    questionTitre?: string;
    isNonVide?: boolean;
    questionApparence?: string;
    isVisible?: boolean;
    classeCSS?: string;
    tailleAuto?: boolean;
    minLigne?: number;
    maxLigne?: number;
    minLongueur?: number;
    maxLongueur?: number;
    taille?: number;
    minValeur?: number;
    maxValeur?: number;
    hint?: string;
    hintAlign?: 'start' | 'end';
    hintDroit?: string;
    texteAide?: string;
    // TODO : mettre ordre

    constructor(
        public id: number,
        public numeroTheme: number,
        public nom: string,
        public questionLib: string,
        public numGroupe: number,
        public numSousTheme?: number,
        public numSousThemeEtape?: number,
        public isObligatoire: boolean = true,
        public ordreQuestion: number = 0,
        private _isNonVide?: boolean,
        private _questionApparence?: string,
        private _isVisible?: boolean
    ) {
        this.isNonVide = !!this._isNonVide;
        this.questionApparence = this._questionApparence || 'legacy';
        this.isVisible = (isUndefined(this._isVisible)) ? true : this._isVisible;
    }
}

export class QuestionListe {
    constructor(public valeur: string, public libelle?: string) {
        if (libelle === undefined) {
            this.libelle = valeur;
        }
    }
}

export class CpVille {
    Code_commune_INSEE: string;
    Nom_commune: string;
    Code_postal: string;
    Libelle_acheminement: string;
    Ligne_5?: string;
    coordonnees_gps?: string;
}

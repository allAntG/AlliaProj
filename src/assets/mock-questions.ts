import { Question, ThemeQuestionnaire, SousTheme, QuestionListe, SousThemeEtape, GroupeQuestionnaire } from '../app/data-model';

export const themesQuest: ThemeQuestionnaire[] = [
    new ThemeQuestionnaire(0, 'Conducteur', '', 'perm_identity', false),
    new ThemeQuestionnaire(1, 'Antécédents', '', 'history'),
    new ThemeQuestionnaire(2, 'Véhicule', 'Description du véhicule', 'directions_car'),
    new ThemeQuestionnaire(3, 'Usage assuré', 'Garanties du contrat'),
    new ThemeQuestionnaire(4, 'Garanties et options', 'Sélection des garanties et des options'),
];

export const sousThemes: SousTheme[] = [
    { numSousTheme: 1, numeroTheme: 0, ordreSousTheme: 0, sousThemeLib: 'Informations sur le conducteur', classeCSS: 'contFlex' },
    { numSousTheme: 2, numeroTheme: 0, ordreSousTheme: 1, sousThemeLib: 'Coordonnées', classeCSS: 'contFlex' },
    { numSousTheme: 3, numeroTheme: 1, ordreSousTheme: 0, sousThemeLib: 'Antécédents' },
    { numSousTheme: 4, numeroTheme: 1, ordreSousTheme: 1, sousThemeLib: 'Sinistres' },
    { numSousTheme: 5, numeroTheme: 1, ordreSousTheme: 2, sousThemeLib: 'Résiliations' }
];

export const sousThemesEtapes: SousThemeEtape[] = [
    {
        numSousThemeEtape: 1, numeroTheme: 0, sousThemeEtapeLib: 'Informations sur le conducteur ', numSousTheme: 1, ordreSousThemeEtape: 0,
        classeCSS: 'contFlex'
    },
    { numSousThemeEtape: 1, numeroTheme: 0, sousThemeEtapeLib: 'Nom et prénom', numSousTheme: 100, ordreSousThemeEtape: 0 },
    { numSousThemeEtape: 2, numeroTheme: 0, sousThemeEtapeLib: 'Date de naissance', numSousTheme: 100, ordreSousThemeEtape: 1 },
    { numSousThemeEtape: 3, numeroTheme: 0, sousThemeEtapeLib: 'Permis', numSousTheme: 100, ordreSousThemeEtape: 2 },
    { numSousThemeEtape: 4, numeroTheme: 0, sousThemeEtapeLib: 'Profession', numSousTheme: 100, ordreSousThemeEtape: 3 },
    // {numSousThemeEtape: 5, numeroTheme: 0, sousThemeEtapeLib: 'Votre adresse', numSousTheme: 2, ordreSousThemeEtape: 0,
    {
        numSousThemeEtape: 5, numeroTheme: 0, sousThemeEtapeLib: 'Coordonnées', numSousTheme: 2, ordreSousThemeEtape: 0,
        classeCSS: 'contFlex'
    },
    { numSousThemeEtape: 6, numeroTheme: 0, sousThemeEtapeLib: 'E-Mail et téléphone', numSousTheme: 200, ordreSousThemeEtape: 1 },
];

export const groupesQuest: GroupeQuestionnaire[] = [
    { numGroupe: 1, numeroTheme: 0, groupeLib: 'Nom et prénom', numSousTheme: 1, ordreGroupe: 0, numSousThemeEtape: 1 },
    { numGroupe: 2, numeroTheme: 0, groupeLib: 'Date de naissance', numSousTheme: 1, ordreGroupe: 1, numSousThemeEtape: 1 },
    { numGroupe: 3, numeroTheme: 0, groupeLib: 'Permis', numSousTheme: 1, ordreGroupe: 2, numSousThemeEtape: 1 },
    { numGroupe: 4, numeroTheme: 0, groupeLib: 'Profession', numSousTheme: 1, ordreGroupe: 3, numSousThemeEtape: 1 },
    { numGroupe: 5, numeroTheme: 0, groupeLib: 'Adresse', numSousTheme: 2, ordreGroupe: 0, numSousThemeEtape: 5 },
    { numGroupe: 6, numeroTheme: 0, groupeLib: 'Cp et Ville', numSousTheme: 2, ordreGroupe: 1, numSousThemeEtape: 5 },
    { numGroupe: 7, numeroTheme: 0, groupeLib: 'E-Mail et téléphone', numSousTheme: 2, ordreGroupe: 2, numSousThemeEtape: 5 },
    { numGroupe: 8, numeroTheme: 1, groupeLib: 'Antécédents', numSousTheme: 3, ordreGroupe: 0 },
    { numGroupe: 9, numeroTheme: 1, groupeLib: 'Conduite accompagné', numSousTheme: 3, ordreGroupe: 1 },
    { numGroupe: 10, numeroTheme: 1, groupeLib: 'Ancien assureur', numSousTheme: 3, ordreGroupe: 2 },
    { numGroupe: 11, numeroTheme: 1, groupeLib: 'Bonus/Malus Date ech.', numSousTheme: 3, ordreGroupe: 3 },
    { numGroupe: 12, numeroTheme: 1, groupeLib: 'Sinistres', numSousTheme: 4, ordreGroupe: 0 },
    { numGroupe: 13, numeroTheme: 1, groupeLib: 'Date et nature des sinistres', numSousTheme: 4, ordreGroupe: 1 },
    { numGroupe: 14, numeroTheme: 1, groupeLib: 'Annulation ou Suspension', numSousTheme: 5, ordreGroupe: 0 },
    { numGroupe: 15, numeroTheme: 1, groupeLib: 'Résiliation', numSousTheme: 5, ordreGroupe: 1 },
];

export const questions: Question[] = [
    {
        id: 1, numeroTheme: 0, numSousTheme: 1, numSousThemeEtape: 1, numGroupe: 1,
        nom: 'questionNom', questionLib: 'Nom', isObligatoire: true, isNonVide: true,
        libMesErr: 'Veuillez saisir votre nom', ordreQuestion: 0, taille: 80
    },
    {
        id: 2, numeroTheme: 0, numSousTheme: 1, numSousThemeEtape: 1, numGroupe: 1,
        nom: 'questionPrenom', questionLib: 'Prénom', isObligatoire: true, isNonVide: true,
        libMesErr: 'Veuillez saisir votre prénom', ordreQuestion: 1
    },
    {
        id: 3, numeroTheme: 0, numSousTheme: 1, numSousThemeEtape: 1, numGroupe: 2,
        nom: 'questionDateNaiss', questionLib: 'Date de naissance', isObligatoire: true, ordreQuestion: 2, typeInput: 'date'
    },
    {
        id: 4, numeroTheme: 0, numSousTheme: 1, numSousThemeEtape: 1, numGroupe: 3,
        nom: 'questionDatePermis', questionLib: 'Date de permis', isObligatoire: true, ordreQuestion: 3, typeInput: 'date'
    },
    {
        id: 5, numeroTheme: 0, numSousTheme: 1, numSousThemeEtape: 1, numGroupe: 4,
        nom: 'questionProfession', questionLib: 'Profession', isObligatoire: true, ordreQuestion: 4,
        valeurListe: [
            new QuestionListe('Salarié'), new QuestionListe('Cadre'), new QuestionListe('Fonctionnaire'),
            new QuestionListe('Etudiant'), new QuestionListe('Retraité'),
            new QuestionListe('Invalidité'), new QuestionListe('Autre', 'Autre (précisez)')
        ], libMesErr: 'Veuillez sélectionner une profession', questionTitre: 'Sélection de la profession'
    },
    {
        id: 6, numeroTheme: 0, numSousTheme: 1, numSousThemeEtape: 1, numGroupe: 4,
        nom: 'questionProfessionAutre', questionLib: 'Profession', isObligatoire: false,
        libMesErr: 'Veuillez saisir la profession', ordreQuestion: 5, isVisible: false
    },
    {
        id: 7, numeroTheme: 0, numSousTheme: 2, numSousThemeEtape: 5, numGroupe: 5,
        nom: 'questionAdresse', questionLib: 'Adresse', isObligatoire: false,
        libMesErr: 'Veuillez saisir votre adresse', ordreQuestion: 6, questionTitre: 'Votre adresse',
        typeInput: 'textarea', tailleAuto: true, minLigne: 2, maxLigne: 5, classeCSS: 'formFld_largeurTot'
    },
    {
        id: 8, numeroTheme: 0, numSousTheme: 2, numSousThemeEtape: 5, numGroupe: 5,
        nom: 'questionAdresseCp', questionLib: '*****', isObligatoire: true, isNonVide: true,
        libMesErr: 'Veuillez saisir le code postal', ordreQuestion: 7, questionTitre: 'Code postal',
        minLongueur: 5, maxLongueur: 5, libMesErrTaille: 'Code postal avec 5 chiffres', classeCSS: 'inptQuestionAdrCp'
    },
    {
        id: 9, numeroTheme: 0, numSousTheme: 2, numSousThemeEtape: 5, numGroupe: 5,
        nom: 'questionAdresseVille', questionLib: 'Ville', isObligatoire: true,
        libMesErr: 'Veuillez saisir la ville', ordreQuestion: 8, classeCSS: 'inptQuestionAdrVille'
    },
    {
        id: 10, numeroTheme: 0, numSousTheme: 2, numSousThemeEtape: 5, numGroupe: 7,
        nom: 'questionMail', questionLib: 'Adresse E-Mail', isObligatoire: true,
        libMesErr: 'Veuillez saisir votre adresse e-mail', ordreQuestion: 9, typeInput: 'email',
        libMesErrEMail: 'Veuillez entrer une adresse e-mail valide', classeCSS: 'inptQuestionEMail'
    },
    {
        id: 11, numeroTheme: 0, numSousTheme: 2, numSousThemeEtape: 5, numGroupe: 7,
        nom: 'questionTel', questionLib: 'N° de téléphone', isObligatoire: true,
        libMesErr: 'Veuillez saisir un numéro de téléphone valide', ordreQuestion: 10, typeInput: 'tel',
        minLongueur: 4, maxLongueur: 25, classeCSS: 'inptQuestionTelephone'
    },
    {
        id: 12, numeroTheme: 1, numSousTheme: 3, numGroupe: 8,
        nom: 'questionAntec', questionLib: 'Assuré en auto sur les 36 derniers mois',
        isObligatoire: true, ordreQuestion: 0, typeInput: 'ouinon',
        questionTitre: 'Assuré auto sur les 36 derniers mois', questionApparence: 'outline'  // , questionValeur: 'sup3'
    },
    {
        id: 13, numeroTheme: 1, numSousTheme: 3, numGroupe: 8,
        nom: 'questionAntecNon', questionLib: 'Combien de mois', isObligatoire: false,
        ordreQuestion: 1, isVisible: false, typeInput: 'number', minValeur: 0
    },
    {
        id: 14, numeroTheme: 1, numSousTheme: 3, numGroupe: 8,
        nom: 'questionAntecOui', questionLib: 'Assurance actuelle', isObligatoire: false,
        ordreQuestion: 2, isVisible: false,
    },
    {
        id: 15, numeroTheme: 1, numSousTheme: 3, numGroupe: 8,
        nom: 'questionAntecOuiMois', questionLib: 'Depuis combien de mois', isObligatoire: false,
        ordreQuestion: 3, isVisible: false, typeInput: 'number', minValeur: 0
    },
    {
        id: 25, numeroTheme: 1, numSousTheme: 3, numGroupe: 9, typeInput: 'ouinon',
        nom: 'questionCondAcc', questionLib: 'Conduite accompagné', questionTitre: 'Conduite accompagné',
        isObligatoire: true, ordreQuestion: 4,
    },
    // {
    //     id: 15, numeroTheme: 1, numSousTheme: 3, numGroupe: 10, libMesErr: 'Saisir le nom de l\'ancien assureur',
    //     nom: 'questionAncienAssureur', questionLib: 'Ancien assureur', isObligatoire: true, ordreQuestion: 3
    // },
    // {
    //     id: 16, numeroTheme: 1, numSousTheme: 3, numGroupe: 10,
    //     nom: 'questionAncienAssureurTemps', questionLib: 'Depuis combien de temps', isObligatoire: true, ordreQuestion: 4,
    //     typeInput: 'number', minValeur: 1, maxValeur: 70
    // },
    {
        id: 26, numeroTheme: 1, numSousTheme: 3, numGroupe: 9,
        libMesErr: 'Saisir le bonus/malus', libMesErrTaille: 'Bonus/malus entre 0,5 et 1,5',
        nom: 'questionBonusMalus', questionLib: 'Bonus/Malus', isObligatoire: true, ordreQuestion: 5,
        typeInput: 'number', minValeur: 0.5, maxValeur: 1.5, questionValeur: '1', hint: 'Entre 0,5 et 1,5'
    },
    // {
    //     id: 17, numeroTheme: 1, numSousTheme: 3, numGroupe: 10, libMesErr: 'Saisir le bonus/malus',
    //     nom: 'questionBonusMalus', questionLib: 'Bonus/Malus', isObligatoire: true, ordreQuestion: 5,
    //     typeInput: 'number'
    // },
    {
        id: 27, numeroTheme: 1, numSousTheme: 3, numGroupe: 9, libMesErr: 'Saisir la date d\'echéance',
        nom: 'questionDateEcheance', questionLib: 'Date d\'echéance', questionTitre: 'Date dernière échéance annuelle',
        isObligatoire: true, ordreQuestion: 6, typeInput: 'date'
    },
    {
        id: 28, numeroTheme: 1, numSousTheme: 3, numGroupe: 12, typeInput: 'ouinon',
        nom: 'questionSinistre', questionLib: 'Sinistres', questionTitre: 'Sinistres sur les 3 dernières années',
        isObligatoire: true, ordreQuestion: 7,
    },
    {
        id: 29, numeroTheme: 1, numSousTheme: 3, numGroupe: 13, typeInput: 'textarea', tailleAuto: true, minLigne: 1,
        nom: 'questionSinistreOui', questionLib: 'Date et nature des sinistres', questionTitre: 'Sinistres',
        isObligatoire: false, ordreQuestion: 8, isVisible: false,
    },
    {
        id: 30, numeroTheme: 1, numSousTheme: 3, numGroupe: 14, typeInput: 'ouinon',
        nom: 'questionAnnuleSusp', questionLib: 'Annulation ou suspension de permis sur 3 ans',
        questionTitre: 'Annulation ou suspension permis',
        isObligatoire: true, ordreQuestion: 9
    },
    {
        id: 31, numeroTheme: 1, numSousTheme: 3, numGroupe: 15, typeInput: 'ouinon',
        nom: 'questionResiliation', questionLib: 'Résiliation compagnie pour sinistre ou impayé sur 3 dernières années',
        questionTitre: 'Résiliation compagnie',
        isObligatoire: true, ordreQuestion: 10
    },
    {
        id: 32, numeroTheme: 1, numSousTheme: 3, numGroupe: 15, typeInput: 'date',
        nom: 'questionResiliationOuiDate', questionLib: 'Date',
        isVisible: false, isObligatoire: false, ordreQuestion: 11,
    },
    {
        id: 33, numeroTheme: 1, numSousTheme: 3, numGroupe: 15, typeInput: 'radio',
        nom: 'questionResiliationOuiType', questionLib: 'Motif de la résiliation', questionApparence: 'fill',
        valeurListe: [new QuestionListe('Sinistre'), new QuestionListe('Impayé'), new QuestionListe('Défaut de pièce')],
        isVisible: false, isObligatoire: false, ordreQuestion: 12, classeCSS: 'inptQuestionMotifResilia'
    },
];

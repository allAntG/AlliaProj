export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    messErreur: string;
    messErreurMail: string;
    messErreurSize: string;
    type: string;
    options: {valeur: string, libelle?: string}[] = [];
    nonVide: boolean;
    appearance: string;
    title: string;
    visible: boolean;
    class: string;
    autosize: boolean;
    minrows: number;
    maxrows: number;
    minsize: number;
    maxsize: number;
    size: number;
    min: number;
    max: number;
    hint: string;
    hintAlign: 'start' | 'end';
    hintDroit: string;
    texteAide: string;
    logoAide: string;
    tabQuestion: QuestionBase<string>[] = [];

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        messErreur?: string,
        messErreurMail?: string,
        messErreurSize?: string,
        nonVide?: boolean,
        appearance?: string,
        title?: string,
        visible?: boolean,
        class?: string,
        autosize?: boolean,
        size?: number,
        hint?: string,
        hintAlign?: 'start' | 'end',
        hintDroit?: string,
        texteAide?: string,
        logoAide?: string
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.messErreur = options.messErreur || '';
      this.messErreurMail = options.messErreurMail || '';
      this.messErreurSize = options.messErreurSize || '';
      this.nonVide = !!options.nonVide;
      this.appearance = options.appearance || '';
      this.title = options.title || '';
      this.visible = !!options.visible;
      this.class = options.class || '';
      this.autosize = !!options.autosize;
      this.size = options.size === undefined ? 20 : options.size;
      this.hint = options.hint || '';
      this.hintAlign = options.hintAlign || 'start';
      this.hintDroit = options.hintDroit || '';
      this.texteAide = options.texteAide || '';
      this.logoAide =  options.logoAide || 'help_outline';
    }
  }

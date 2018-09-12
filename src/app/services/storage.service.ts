import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  readonly nomItemStorageStep: string = 'numTheme';
  readonly nomItemStorageObjetVal: string = 'objQuestValeurs';

  constructor() { }

  clearAllStorage(): void {
    sessionStorage.clear();
    localStorage.clear();
  }

  // SESSION STORAGE
  sessionStorageSupprItem(nomItem: string) {
    sessionStorage.removeItem(nomItem);
  }

  sessionStorageSetItem(nomItem: string, valItem: string | number | boolean | any): void {
    if (typeof valItem === 'string') {
      sessionStorage.setItem(nomItem, valItem);
    } else if (typeof valItem === 'number' || typeof valItem === 'boolean') {
      sessionStorage.setItem(nomItem, valItem.toString());
    } else {
      const monobjet_json = JSON.stringify(valItem);
      sessionStorage.setItem(nomItem, monobjet_json);
    }
  }

  sessionStorageGetItem(nomItem: string, valItemDef?: string): string {
    if (!isNullOrUndefined(sessionStorage.getItem(nomItem)) && sessionStorage.getItem(nomItem)) {
      return sessionStorage.getItem(nomItem);
    } else if (valItemDef) {
      this.sessionStorageSetItem(nomItem, valItemDef);
    }

    return valItemDef;
  }

  sessionStorageGetItemObjet(nomItem: string, objItemDef?: any): any {
    if (!isNullOrUndefined(sessionStorage.getItem(nomItem)) && sessionStorage.getItem(nomItem)) {
      const monobjet_json = sessionStorage.getItem(nomItem);
      return JSON.parse(monobjet_json);
    } else if (objItemDef) {
      this.sessionStorageSetItem(nomItem, objItemDef);
    }

    return objItemDef;
  }


  // LOCAL STORAGE
  localStorageSupprItem(nomItem: string) {
    localStorage.removeItem(nomItem);
  }

  localStorageSetItem(nomItem: string, valItem: string | number | boolean | any): void {
    if (typeof valItem === 'string') {
      localStorage.setItem(nomItem, valItem);
    } else if (typeof valItem === 'number' || typeof valItem === 'boolean') {
      localStorage.setItem(nomItem, valItem.toString());
    } else {
      const monobjet_json = JSON.stringify(valItem);
      localStorage.setItem(nomItem, monobjet_json);
    }
  }

  localStorageGetItem(nomItem: string, valItemDef?: string): string {
    if (!isNullOrUndefined(localStorage.getItem(nomItem)) && localStorage.getItem(nomItem)) {
      return localStorage.getItem(nomItem);
    } else if (valItemDef) {
      this.localStorageSetItem(nomItem, valItemDef);
    }

    return valItemDef;
  }

  localStorageGetItemObjet(nomItem: string, objItemDef?: any): any {
    if (!isNullOrUndefined(localStorage.getItem(nomItem)) && localStorage.getItem(nomItem)) {
      const monobjet_json = localStorage.getItem(nomItem);
      return JSON.parse(monobjet_json);
    } else if (objItemDef) {
      this.localStorageSetItem(nomItem, objItemDef);
    }

    return objItemDef;
  }
}

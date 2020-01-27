export default class Control {

  constructor() {
    this.btnChangeBackgroundImage = document.querySelector('.btn-refresh');

    this.formSearch = document.querySelector('.form-search');
    this.btnSearch = document.querySelector('.btn-search');
    this.inputSearch = document.querySelector('.location-search');

    this.btnCelsius = document.querySelector('.btn-celsius');
    this.btnFarenheit = document.querySelector('.btn-farenheit');

    this.buttonsLang = document.querySelectorAll('.btn-lang');
    this.btnLangEn = document.querySelector('.btn-lang-en');
    this.btnLangRu = document.querySelector('.btn-lang-ru');
    this.btnLangBe = document.querySelector('.btn-lang-be');

  }
}

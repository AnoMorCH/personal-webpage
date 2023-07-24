// Switch a language of index.html template.

import { getCurrentLanguage, switchLanguage } from "../helpers/support.js";

window.addEventListener("DOMContentLoaded", () => {
  switchIndexLanguage();
  
  function switchIndexLanguage() {
    const currentLanguage = getCurrentLanguage();
    const templatePath = "/static/language/index.json";
    switchLanguage(currentLanguage, templatePath);
  }
});
// Switch a language of index.html template.

import { getCurrentLanguage, switchLanguage } from "../helpers/support.js";

switchIndexLanguage();

function switchIndexLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = "/static/language/templates-translation/index.json";
  switchLanguage(currentLanguage, templatePath);
}
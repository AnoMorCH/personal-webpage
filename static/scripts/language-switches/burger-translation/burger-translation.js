// Switch a language of the burger.

import { getCurrentLanguage, switchLanguage } from "../helpers/support.js";

function switchBurgerLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = "/static/language/burger/index.json";
  switchLanguage(currentLanguage, templatePath);
}

export { switchBurgerLanguage };
// Switch a language of projects/graphs-of-rating-of-cities.html template.

import { getCurrentLanguage, switchLanguage } from "../../helpers/support.js";

window.addEventListener("DOMContentLoaded", () => {
  switchGraphOfRatingOfCitiesLanguage();
  
  function switchGraphOfRatingOfCitiesLanguage() {
    const currentLanguage = getCurrentLanguage();
    const templatePath = "/static/language/templates-translation/projects/graphs-of-rating-of-cities.json";
    switchLanguage(currentLanguage, templatePath);
  }
});
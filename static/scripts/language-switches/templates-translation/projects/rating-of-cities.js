// Switch a language of projects/rating-of-cities.html template.

switchRatingOfCitiesLanguage();

function switchRatingOfCitiesLanguage() {
  const currentLanguage = getCurrentLanguage();
  // TODO. Think if there is a better name for the var below as "template" can
  // TODO. have a lot of different interpretations.
  const templatePath = "/static/language/projects/rating-of-cities.json";
  switchLanguage(currentLanguage, templatePath);
}
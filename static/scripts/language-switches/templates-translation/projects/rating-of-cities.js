// Switch a language of projects/rating-of-cities.html template.

switchRatingOfCitiesLanguage();

function switchRatingOfCitiesLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = "/static/language/projects/rating-of-cities.json";
  switchLanguage(currentLanguage, templatePath);
}
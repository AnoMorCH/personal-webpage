// Switch a language of projects/graphs-of-rating-of-cities.html template.

switchGraphOfRatingOfCitiesLanguage();

function switchGraphOfRatingOfCitiesLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = "/static/language/projects/graphs-of-rating-of-cities.json";
  switchLanguage(currentLanguage, templatePath);
}
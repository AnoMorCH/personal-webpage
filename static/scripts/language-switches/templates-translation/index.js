// Switch a language of index.html template.

switchIndexLanguage();

function switchIndexLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = "/static/language/index.json";
  switchLanguage(currentLanguage, templatePath);
}
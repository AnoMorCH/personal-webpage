// Switch a language of index.html template.

const currentLanguage = getCurrentLanguage();
const templatePath = "/static/language/index.json";
switchLanguage(currentLanguage, templatePath);

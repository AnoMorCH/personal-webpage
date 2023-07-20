// Switch a language of projects.html template.

const currentLanguage = getCurrentLanguage();
const templatePath = "/static/language/projects.json";
switchLanguage(currentLanguage, templatePath);

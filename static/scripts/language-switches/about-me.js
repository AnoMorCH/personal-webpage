// Switch a language of about-me.html template.

const currentLanguage = getCurrentLanguage();
const templatePath = "/static/language/about-me.json";
switchLanguage(currentLanguage, templatePath);
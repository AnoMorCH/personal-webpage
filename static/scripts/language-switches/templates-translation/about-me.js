// Switch a language of about-me.html template.

switchAboutMeLanguage();

function switchAboutMeLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = "/static/language/about-me.json";
  switchLanguage(currentLanguage, templatePath);
}
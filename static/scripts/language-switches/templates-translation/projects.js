// Switch a language of projects.html template.

switchProjectsLanguage();

function switchProjectsLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = "/static/language/projects.json";
  switchLanguage(currentLanguage, templatePath);
}

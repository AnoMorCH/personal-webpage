// Switch a language of the burger.

switchBurgerLanguage();

function switchBurgerLanguage() {
  const currentLanguage = getCurrentLanguage();
  const templatePath = "/static/language/burger/index.json";
  switchLanguage(currentLanguage, templatePath);
}
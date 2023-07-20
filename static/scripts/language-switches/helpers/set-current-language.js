// Set up a language. 

const languageVarName = "language";
const lightGreenColorClassName = "light-green-color";

setInitialLanguage();
const languageSwitchBtns = getLanguageSwitchBtns();
setEventsOnLanguageSwitchBtns(languageSwitchBtns);
colorSelectedLanguageBtn();

function getLanguageSwitchBtns() {
  const languages = document.getElementById("language-switch");
  const switchBtns = languages.getElementsByTagName("span");
  return switchBtns;
}

function setEventsOnLanguageSwitchBtns(languageSwitchBtns) {
  Array.from(languageSwitchBtns).forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLanguage = btn.id;
      setCurrentLanguageCookie(selectedLanguage);
      window.location.reload();
    });
  });
}

function setCurrentLanguageCookie(selectedLanguage) {
  Cookies.set(languageVarName, selectedLanguage);
}

function colorSelectedLanguageBtn() {
  const currentLanguage = getCurrentLanguage(); 
  const languageBtn = document.getElementById(currentLanguage);
  languageBtn.classList.add(lightGreenColorClassName);
}

function setInitialLanguage() {
  const currentLanguage = getCurrentLanguage(); 
  if (currentLanguage === undefined) {
    Cookies.set(languageVarName, Language.English);
  };
}
// Set up a language. 

const languageVarName = "language";

setInitialLanguage();
const languageSwitchBtns = getLanguageSwitchBtns();
setEventsOnLanguageSwitchBtns(languageSwitchBtns);

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
  if (selectedLanguage == Language.English) {
    Cookies.set(languageVarName, Language.English);
  } else if (selectedLanguage == Language.Russian) {
    Cookies.set(languageVarName, Language.Russian);
  }
}

function setInitialLanguage() {
  if (Cookies.get(languageVarName) === undefined) {
    Cookies.set(languageVarName, Language.English);
  };
}
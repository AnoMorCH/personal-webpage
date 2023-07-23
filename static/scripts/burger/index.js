class NavMenu {
  #openBtn;
  #closeBtn;
  #navMenu;
  #main;
  #headerGrid;

  constructor() {
    this.#openBtn = document.getElementById("burger");
    this.#closeBtn = document.getElementById("close-burger-menu-btn");
    this.#navMenu = document.getElementById("burger-items");
    this.#main = document.getElementsByTagName("main")[0];
    this.#headerGrid = document.getElementById("grid");
  }

  #open() {
    this.#navMenu.style.transform = "translateY(100vh)";
    this.#hideMainContent();
  }
  
  #close() {
    this.#navMenu.style.transform = "translateY(0)";
    this.#showMainContent();
  }

  #hideMainContent() {
    this.#main.style.display = "none";
    this.#headerGrid.display = "none";
  }

  #showMainContent() {
    this.#main.style.display = "block";
    this.#headerGrid.display = "grid";
  }

  manageEventsToOpenClose() {
    this.#openBtn.addEventListener("click", () => { this.#open(); });
    this.#closeBtn.addEventListener("click", () => { this.#close(); });
  }
}

const navMenu = new NavMenu();
navMenu.manageEventsToOpenClose();
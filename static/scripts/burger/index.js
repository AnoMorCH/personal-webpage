class NavMenu {
  // TODO. Hide all fields.
  constructor() {
    this.openBtn = document.getElementById("burger");
    this.closeBtn = document.getElementById("close-burger-menu-btn");
    // TODO. Rename "object".
    this.object = document.getElementById("burger-items");
    this.main = document.getElementsByTagName("main")[0];
    this.headerGrid = document.getElementById("grid");
  }

  #open() {
    this.object.style.transform = "translateY(100vh)";
    this.#hideMainContent();
  }
  
  #close() {
    this.object.style.transform = "translateY(0)";
    this.#showMainContent();
  }

  #hideMainContent() {
    this.main.style.display = "none";
    this.headerGrid.display = "none";
  }

  #showMainContent() {
    this.main.style.display = "block";
    this.headerGrid.display = "grid";
  }

  manageEventsToOpenClose() {
    this.openBtn.addEventListener("click", () => { this.#open(); });
    this.closeBtn.addEventListener("click", () => { this.#close(); });
  }
}

const navMenu = new NavMenu();
navMenu.manageEventsToOpenClose();
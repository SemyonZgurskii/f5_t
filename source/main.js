const headerElement = document.querySelector(".main-header");
const menuButtonElement = headerElement.querySelector(".main-header__menu-button");

const HeaderModifier = {
  menuOpened: "main-header--menu-opened",
  menuClosed: "main-header--menu-closed",
  noJs: "main-header--no-js",
}

headerElement.classList.remove(HeaderModifier.noJs);
headerElement.classList.add(HeaderModifier.menuClosed);

menuButtonElement.addEventListener("click", () => {
  const isMenuOpened = headerElement.classList.contains(HeaderModifier.menuOpened);

  if (isMenuOpened) {
    headerElement.classList.remove(HeaderModifier.menuOpened);
    headerElement.classList.add(HeaderModifier.menuClosed);
  } else {
    headerElement.classList.remove(HeaderModifier.menuClosed);
    headerElement.classList.add(HeaderModifier.menuOpened);
  }
})

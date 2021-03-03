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

const JsToggleModifier = {
  Container: "js-toggle-container",
  Controller: "js-toggle-controller",
}

const buttonModifier = "toggle-header__button--opened";

function setJsModifierToggle(parentClassName) {
  const parentElement = document.querySelector(`.${parentClassName}`)
  const toggleContainerElements = parentElement.querySelectorAll(`.${JsToggleModifier.Container}`);
  toggleContainerElements.forEach((currentElement) => {
    const toggleControllerElement = currentElement.querySelector(`.${JsToggleModifier.Controller}`);

    toggleControllerElement.addEventListener("click", () => {
      currentElement.classList.toggle("js-hide");

      if (currentElement.classList.contains("js-hide")) {
        toggleControllerElement.classList.remove(buttonModifier);
      } else {
        toggleControllerElement.classList.add(buttonModifier);
      }
    })
  })
}

setJsModifierToggle("details");
setJsModifierToggle("footer-menu");

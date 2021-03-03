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
  Hidden: "js-hide",
  DesktopShowed: "js-desktop-showed"
}

const buttonModifier = "toggle-header__button--opened";
let desktopShownElements = [];

function setJsModifierToggle(parentClassName) {
  const parentElement = document.querySelector(`.${parentClassName}`)
  const toggleContainerElements = parentElement.querySelectorAll(`.${JsToggleModifier.Container}`);

  toggleContainerElements.forEach((currentElement) => {
    const toggleControllerElement = currentElement.querySelector(`.${JsToggleModifier.Controller}`);

    if (currentElement.classList.contains(JsToggleModifier.DesktopShowed)) {
      desktopShownElements.push(currentElement);
    }

    toggleControllerElement.addEventListener("click", () => {
      currentElement.classList.toggle(JsToggleModifier.Hidden);

      if (currentElement.classList.contains(JsToggleModifier.Hidden)) {
        toggleControllerElement.classList.remove(buttonModifier);
      } else {
        toggleControllerElement.classList.add(buttonModifier);
      }
    })
  })
}

function onScreenSizeChange() {
  if (window.innerWidth >= 1139) {
    desktopShownElements.forEach((element) => {
      if (element.classList.contains(JsToggleModifier.Hidden)) {
        element.classList.remove(JsToggleModifier.Hidden);
      }
    })
  }
}

setJsModifierToggle("details");
setJsModifierToggle("footer-menu");

window.addEventListener("resize", onScreenSizeChange);
onScreenSizeChange();

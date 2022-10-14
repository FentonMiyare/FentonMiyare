let navWrapper = document.querySelector('nav');
let navContainer = document.querySelector('.navitem__container');
let navItem = document.querySelectorAll('.nav__item');
let menuOpener = document.querySelector('.menu-opener');

window.onload = () => {
  menuOpener.checked = false;
}

/* NAVBAR ADD SHADOW ON SCROLL */
window.onscroll = function() {
  let className = 'shadow';

  if (navWrapper.classList) {
    if (window.scrollY > 10)
      navWrapper.classList.add(className);
    else
      navWrapper.classList.remove(className);
  }
};

/* MENU */
const mask = document.createElement("div");
const activeClass = "is-active";

/* Create mask */
 mask.classList.add("mask");
 document.body.appendChild(mask);
 
 mask.addEventListener("click", (e) => {
   e.preventDefault()
   mask.classList.toggle(activeClass);
   navContainer.classList.toggle('toggle');
  navItem.forEach(item => {
        item.classList.toggle("fade");
      })
   menuOpener.checked = false;
    console.log('click');
  });

menuOpener.addEventListener('change', openMenu);

function openMenu() {
  navContainer.classList.toggle('toggle');
  mask.classList.toggle(activeClass);
  navItem.forEach(item => {
        item.classList.toggle("fade");
      })
}


// C-CIRCLE-NAV-TOGGLE
(() => {

  "use strict";

  /**
   * Cache variables
   */
  const menu = document.querySelector("#c-circle-nav");
  const toggle = document.querySelector("#c-circle-nav__toggle");
  const mask = document.createElement("div");
  const activeClass = "is-active";

  /**
   * Create mask
   */
  mask.classList.add("c-mask");
  document.body.appendChild(mask);

  /**
   * Listen for clicks on the toggle
   */
  toggle.addEventListener("click",(e) => {
    e.preventDefault();
    toggle.classList.contains(activeClass) ? deactivateMenu() : activateMenu();
  });

  /**
   * Listen for clicks on the mask, which should close the menu
   */
  mask.addEventListener("click", () => {
    deactivateMenu();
    console.log('click');
  });

  /**
   * Activate the menu 
   */
  const activateMenu = () => {
    menu.classList.add(activeClass);
    toggle.classList.add(activeClass);
    mask.classList.add(activeClass);
  }

  /**
   * Deactivate the menu 
   */
  const deactivateMenu = () => {
    menu.classList.remove(activeClass);
    toggle.classList.remove(activeClass);
    mask.classList.remove(activeClass);
  }

})();

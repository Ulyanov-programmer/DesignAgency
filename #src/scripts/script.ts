//? If you are making a multi-page site, i recommend dividing the contents of this file
//? into several parts and connecting them to each page separately.

//? Also, TSDoc is used here, so read the tips. Try hover on some constructor.

// fsnavmenu //
import FsNavmenu from './modules/fsNavmenu.js';

new FsNavmenu(
  '#burgerButton',
  '.fullscreen-navmenu',
  '.fs-element',
  true
)
FsNavmenu.fsNavmenuActiveClass = 'active'
FsNavmenu.burgerActiveClass = 'active'

// modal window //
import ModalWindowMenu from './modules/modalWindow.js';

/*
  It works like this:
  Finds all elements that contain data-modal-link and .modal-closer.
  The first ones trigger the event of opening the modal window, the second ones close it.
  After clicking on one of these elements, 
  it looks for a block with a name inside data-modal-link and gives it the "active" class.

  Also, when pressed, turns off the scrolling page.
*/
new ModalWindowMenu(
  '[data-modal-link]', // i recommend this value.
  '.modal-closer',
  500,
  '.fullscreen-navmenu',
)

// AnimationByScroll //
import AnimateByScroll, { AnimationElement, AnimationMediaQuery } from "./modules/animateByScroll.js";

new AnimateByScroll(
  false,
  new AnimationElement('.anim-adv1', 0.6, 700),
  new AnimationElement('.anim-adv2', 0.6, 700),
  new AnimationElement('.anim-adv3', 0.7, 700),
  new AnimationElement('.anim-adv4', 0.7, 700),
  new AnimationElement('.anim-adv5', 1, 700),
)
AnimateByScroll.activeAnimationClass = 'active'

//? your scripts //

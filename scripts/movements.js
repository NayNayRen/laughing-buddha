/* MOVE INPUT FIELDS ON PAGE LOAD */
function init() {
  'use strict';

  const name_move_right = document.getElementById('name_move_right');
  const number_move_right = document.getElementById('number_move_right');
  const email_move_left = document.getElementById('email_move_left');
  const party_move_left = document.getElementById('party_move_left');

  name_move_right.className = 'moveRight';
  name_move_right.style.left = '50%';
  number_move_right.className = 'moveRight';
  number_move_right.style.left = '50%';
  email_move_left.className = 'moveLeft';
  email_move_left.style.right = '50%';
  party_move_left.className = 'moveLeft';
  party_move_left.style.right = '50%';

}
window.onload = init;

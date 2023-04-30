const buttns = { 0: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '◄', '▼', '►'], 1: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "\\", 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '◄', '▼', '►'], 2: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', "|", 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '◄', '▼', '►'], 3: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', "/", 'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '◄', '▼', '►'], 4: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', "\\", 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '◄', '▼', '►'], 5: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', "\\", 'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '◄', '▼', '►'], 6: ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']};

// // Выгрузка кнопок
// document.onkeydown = function (event) {  
//   console.log(buttns.length);
// };

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
let lang = 'en';

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  }
}
function setLocalStorage() {
  localStorage.setItem('lang', lang);

}
window.addEventListener('load', getLocalStorage,);
window.addEventListener('beforeunload', setLocalStorage);

document.onkeydown = function keydown(event){
  document.querySelector(`.Tab`).classList.remove('selected');
  document.querySelector(`.${event.code}`).classList.add('selected');
};
document.onkeyup = function keyUp(event){
  document.querySelector(`.${event.code}`).classList.remove('selected');
};

function init() {
  document.body.appendChild(keyboard);
}
init();

function generateBoard() {
  let line = generateLine();
  for (let i = 0; i < 64; i++) {
    if (i == 14 || i == 29 || i == 42 || i == 55) line = generateLine();
    let button = generateButtns(i);
    button.className = `keyboard__buttn ${buttns[6][i]}`;
    line.appendChild(button);
  }

}
function generateButtns(ord) {
  let arr = ['en', 'ru'];
  let order = 0;
  let button = document.createElement('div');
  for (let el of arr) {
    let butLang = document.createElement('div');
    butLang.className = el + ' disabled';
    let butCaps = document.createElement('div');
    butCaps.className = 'caps disabled';    
    butCaps.textContent = buttns[4 + order][ord];
    let butCapsShift = document.createElement('div');
    butCapsShift.className = 'capsShift disabled';
    butCapsShift.textContent = buttns[0 + order][ord];
    let butShift = document.createElement('div');
    butShift.className = 'shift disabled';
    butShift.textContent = buttns[2 + order][ord];
    let but = document.createElement('div');
    but.className = 'norm';
    but.textContent = buttns[0 + order][ord];
    butLang.appendChild(butCaps);
    butLang.appendChild(butCapsShift);
    butLang.appendChild(butShift);
    butLang.appendChild(but);
    button.appendChild(butLang);
    order++;
  }
  return button;
}

function generateLine() {
  let line = document.createElement('div');
  line.className = 'keyboard__line';
  keyboard.appendChild(line);
  return line;
}
generateBoard();

function reveal(lang){
  document.querySelectorAll('.'+lang).forEach(el=>el.classList.remove('disabled'));  
}

document.onload = reveal(lang);
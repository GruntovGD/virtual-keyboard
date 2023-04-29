const buttns = { 0: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', "\\", 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '◄', '▼', '►'], 1: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "\\", 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '◄', '▼', '►'], 2: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', "|", 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '◄', '▼', '►'], 3: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', "/", 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '◄', '▼', '►'], 4: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', "\\", 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '◄', '▼', '►'], 5: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', "\\", 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '◄', '▼', '►'] };

// // Выгрузка кнопок
// document.onkeydown = function (event) {  
//   console.log(buttns.length);
// };

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
let lang = 'en';

function init() {
  document.body.appendChild(keyboard);
}
init();

function generateBoard() {
  let line = generateLine();
  for (let i = 0; i < 64; i++) {
    if (i == 14 || i == 29 || i == 42 || i == 55) line = generateLine();
    let button = generateButtns(i);
    button.className = (buttns[0][i] == ' ') ? 'keyboard__buttn space' : 'keyboard__buttn';
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

document.onload(reveal(lang));
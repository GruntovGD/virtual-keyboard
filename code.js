const buttnsEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Control', 'Alt', ' ', 'Alt', 'Control'];

// Выгрузка кнопок
document.onkeydown = function (event) {  
  console.log(event.keyCode);
};

function init() {
  let keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  document.body.appendChild(keyboard);
}
init();

function generateButtns() {
  let generated = '';
  for (let el of buttnsEn) {
    generated += `<div class="keyboard__buttn" >${el}</div>`;
  }
  document.querySelector('.keyboard').innerHTML = generated;
}
generateButtns();
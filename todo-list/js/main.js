'use strict';

const list = document.querySelector('.list-block');
const inputs = document.getElementsByTagName('input');
const outputs = document.querySelector('output');
let count = 0;

Array.from(inputs).forEach(input => input.addEventListener('click', switchRadio));
Array.from(inputs).filter(input => input.checked ? switchRadio.call(input) : outputs.value = `${count} из ${inputs.length}`);

function switchRadio() {
  outputs.value = ( this.checked ? ++count : --count ) + ` из ${inputs.length}`;
  count === inputs.length ? list.classList.add('complete') : list.classList.remove('complete');
}

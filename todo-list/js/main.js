'use strict';

const list = document.querySelector('.list-block');
const inputs = document.getElementsByTagName('input');
const outputs = document.querySelector('output');
let count = 0;
console.log(inputs);

for (let input of inputs) {
		input.addEventListener('click', switchRadio);
}

Array.from(inputs).filter(input => input.checked ? switchRadio.call(input) : outputs.value = `${count} из ${inputs.length}`);

function switchRadio() {
  console.log('1');
  if (this.checked) {
    outputs.value = `${++count} из ${inputs.length}`;
  } else {
    outputs.value = `${--count} из ${inputs.length}`;
  }
  count === inputs.length ? list.classList.add('complete') : list.classList.remove('complete');
}

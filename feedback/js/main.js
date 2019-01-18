'use strict';

const form = document.getElementsByClassName('contentform')[0];
const main = document.getElementById('output');
const inputs = Array.from(form.getElementsByTagName('input'));
const outputs = Array.from(main.getElementsByTagName('output'));

inputs.forEach(input => input.addEventListener('input', addValue));

function addValue(event) {
  if (event.currentTarget.name === 'zip') {
    event.currentTarget.value = event.currentTarget.value.replace(/\D/, '');
  }

  outputs.forEach(output => {
    if (event.currentTarget.name === output.id) {
      output.value = event.currentTarget.value;
    }
  });

}

const sendButton = document.querySelector('form > button');
const editButton = document.querySelector('main > button');
Array.from(form.getElementsByTagName('fieldset')).forEach(fieldset => fieldset.addEventListener('input', sendButtonOn));

function sendButtonOn() {
  inputs.every(input => input.value !== '') ? sendButton.removeAttribute('disabled') : sendButton.setAttribute('disabled');
}

function showMain(event) {
  event.preventDefault();
  form.classList.add('hidden');
  main.classList.remove('hidden');
}

function showForm() {
  main.classList.add('hidden');
  form.classList.remove('hidden');
}

sendButton.addEventListener('click', showMain);
editButton.addEventListener('click', showForm);

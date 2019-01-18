'use strict';

let data;
const preloader = document.getElementById('loader');
const content = document.getElementById('content');
const source = document.getElementById('source');
const from = document.getElementById('from');
const to = document.getElementById('to');
const output = document.getElementById('result');

const xhr = new XMLHttpRequest();

function showPreloader() {
  preloader.classList.remove('hidden');
}

function showContent() {
  preloader.classList.add('hidden');
  content.classList.remove('hidden');
}

xhr.addEventListener('loadstart', showPreloader);
xhr.addEventListener('load', getValute);
xhr.addEventListener('loadend', showContent);
xhr.addEventListener('loadend', update);

from.addEventListener('change', update);
to.addEventListener('change', update);
source.addEventListener('input', update);

xhr.open('GET', 'https://neto-api.herokuapp.com/currency');
xhr.send();

function getValute() {
  try {
    data = JSON.parse(xhr.responseText);
  }
  catch (err) {
    console.log(err);
    return;
  }

  let valutes = data.map(one => `<option label="${one.code}" value="${one.value}"></option>`);
  console.log(valutes);
  from.innerHTML = to.innerHTML = valutes.join('');
}

function update() {
  output.value = (source.value * from.value / to.value).toFixed(2);
}
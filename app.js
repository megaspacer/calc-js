// numbers
const numbers = document.querySelectorAll('.number');
// output
const output = document.querySelector('.output');
const input = document.querySelector('.output > input');
// operations
const plus = document.querySelector('#plus');
const equals = document.querySelector('#equals');

plus.addEventListener('click', function () {
  const div = document.createElement('div');
  if (!isNaN(input.value)) {
    div.innerHTML = `<span class="input-numbers">${input.value}</span>`;
    output.appendChild(div);
    input.value = '';
  }
});

equals.addEventListener('click', function () {
});

const addEventForButtons = () => {
  numbers.forEach((number) => {
    number.addEventListener('click', function () {
      input.value += this.dataset.value;
    });
  });
};

addEventForButtons();
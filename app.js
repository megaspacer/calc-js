// numbers
const numbers = document.querySelectorAll('.number');
// output
const output = document.querySelector('.output');
const input = document.querySelector('#input-value');
// operations
const plus = document.querySelector('#plus');
const equals = document.querySelector('#equals');

const parseOperations = () => {
  let result = 0;
  const arrayOfNums = [];
  const nums = document.querySelectorAll('.input-numbers');
  const operations = document.querySelectorAll('.input-operations');
  nums.forEach((num) => {
    const n = parseFloat(num.dataset.number);
    arrayOfNums.push(n);
  });
  // TODO
  operations.forEach((o, i) => {
    result += arrayOfNums[i] + arrayOfNums[i + 1];
  });
  console.log(result);
};

plus.addEventListener('click', function () {
  const divNum = document.createElement('div');
  const divOperation = document.createElement('div');
  if (!isNaN(input.value)) {
    divNum.innerHTML = `<span data-number="${input.value}" class="input-numbers">${input.value}</span>`;
    divOperation.innerHTML = `<span data-operation="plus" class="input-operations">+</span>`;
    output.appendChild(divNum);
    output.appendChild(divOperation);
    input.value = '';
  }
});

equals.addEventListener('click', function () {
  if (!isNaN(input.value)) {
    const divNum = document.createElement('div');
    divNum.innerHTML = `<span data-number="${input.value}" class="input-numbers">${input.value}</span>`;
    output.appendChild(divNum);
    input.value = '';
    parseOperations();
  } else {
    parseOperations();
  }
});

const addEventForButtons = () => {
  numbers.forEach((number) => {
    number.addEventListener('click', function () {
      input.value += this.dataset.value;
    });
  });
};

addEventForButtons();
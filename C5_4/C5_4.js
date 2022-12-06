const firstInp = document.querySelector('.firstInp');
const secondInp = document.querySelector('.secondInp');
const btn = document.querySelector('.btn');
const resultNode = document.querySelector('.result');

btn.addEventListener('click', async() => {
  let firstValue = firstInp.value;
  let secondValue = secondInp.value;

  if(isNaN(Number(firstValue)) || isNaN(Number(secondValue)) || firstValue === ''|| secondValue === '') {
    resultNode.innerHTML = `
    Введите ЧИСЛА в поля
      `;
  }
  else if(Number(firstValue) < 100 || Number(secondValue) < 100 || Number(firstValue) > 300 || Number(secondValue) > 300) {
    resultNode.innerHTML = `
    Одно из введенных чисел ВНЕ диапазона от 100 до 300
      `;
  }
  else {
    const url = `https://picsum.photos/${firstValue}/${secondValue}`;
    let res = fetch(url)
    .then((response) => {
      console.log(response);
      resultNode.innerHTML = `
      <img
          src="${response.url}"
          class="card-image"
        />
      `;
    })
    .catch(() => {
      console.log('error');
    })
  }
});


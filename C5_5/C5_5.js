const pageInput = document.querySelector('.pageInp');
const limitInput = document.querySelector('.limitInp');
const btn = document.querySelector('.btn');
const resultNode = document.querySelector('.result');

btn.addEventListener('click', async() => {
  let pageValue = pageInput.value;
  let limitValue = limitInput.value;

  if(pageValue === '' || limitValue === '') {
    resultNode.innerHTML = 'Введите числа в ОБА поля';
  }
  else if((isNaN(Number(pageValue)) || Number(pageValue) < 1 || Number(pageValue) > 10) && (isNaN(Number(limitValue)) || Number(limitValue) < 1 || Number(limitValue) > 10)) {
    resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
  }
  else if(isNaN(Number(pageValue)) || Number(pageValue) < 1 || Number(pageValue) > 10) {
    resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
  }
  else if(isNaN(Number(limitValue)) || Number(limitValue) < 1 || Number(limitValue) > 10) {
    resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10';
  }
  else {
    const url = `https://picsum.photos/v2/list?page=${pageValue}&limit=${limitValue}`;
    console.log(url)

    const requestResult = await useRequest(url);    

    displayResult(requestResult);
  }
});

function useRequest(url) {
  return fetch(url)
  .then((response) => {
  // console.log(response);
  // console.log(response.url);
  return response.json();
  })
  .then((data) => {
    // console.log(data);
    return data;
  })
  .catch(() => {
    console.log('error')
  })
} 
function displayResult(apiData) {
  let cards = '';

  apiData.forEach(item => {
    const cardBlock = `
    <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
      </div>
    `;
    cards += cardBlock;
  })

  resultNode.innerHTML = cards;
}

function setLocalStorage() {
  if(resultNode.innerHTML === 'Введите числа в ОБА поля' || resultNode.innerHTML === 'Номер страницы и лимит вне диапазона от 1 до 10' || resultNode.innerHTML === 'Номер страницы вне диапазона от 1 до 10' || resultNode.innerHTML === 'Лимит вне диапазона от 1 до 10') {
    localStorage.setItem('result', 'Здесь будет результат Вашего запроса');
  }
  else {
    localStorage.setItem('result', resultNode.innerHTML);
  }
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('result')) {
    resultNode.innerHTML = localStorage.getItem('result');
  }
  else {
    resultNode.innerHTML = 'Здесь будет результат Вашего запроса';
  }
}

window.addEventListener('DOMContentLoaded', getLocalStorage);
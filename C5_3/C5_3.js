const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const resultNode = document.querySelector('.result');

btn.addEventListener('click', checkNumber);

function checkNumber() {
  let inpValue = input.value;

  if(isNaN(Number(inpValue)) || inpValue === '') {
    resultNode.innerHTML = 'Введите ЧИСЛО в поле';
  }
  else if(Number(inpValue) < 1 || Number(inpValue) > 10) {
    resultNode.innerHTML = 'Введенное число вне диапазона от 1 до 10';
  }
  else{
    useRequest(`https://picsum.photos/v2/list/?limit=${inpValue}`, displayResult)
  }
}

function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function() {
    if(xhr.status != 200) {
      console.log(`Статус запроса: ${xhr.status}`);
    }
    else {
      console.log(xhr.response)
      const result = JSON.parse(xhr.response);
      console.log(result);
      if(callback) {
        callback(result);
      }
    }
  }

  xhr.onerror = function() {
    console.log(`Ошибка! Статус ответа: ${xhr.status}`);
  }

  xhr.send();
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
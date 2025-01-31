let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');

request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

const obj = {name: 'Nintendo 64', sku: 'nin64x', price: 250};
const json = JSON.stringify(obj);

request.addEventListener('load', e => {
  console.log(`This product was added ${request.responseText}`);
});

request.send(json);
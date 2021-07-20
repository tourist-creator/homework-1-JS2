'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
}

// const renderProducts = (list) => {
//     const productList = list.map(item => {
//         return renderProduct(item.title, item.price);
//     });
// document.querySelector('.products').innerHTML = productList.join("");

    const renderProducts = list => {
    document.querySelector('.products').innerHTML = (list.map(item => renderProduct(item.title, item.price)).join(''));
    //либо вместо .innerHTML думаю можно добавлять через .insertAdjacentHTML(beforeend, ) 
    };
renderProducts(products);
// Артем, помогите. какой цикл нужно добавить в анонимную функцию(title, price) на возврат, 
// чтобы она мне просто поочередно выдала тут 1234, не меняя другой код. 
// это реально? я чет не допер.
// про значения по умолчанию не понял. обьясните пожалуйста.



let totalPrice = 0;

document.querySelectorAll('.add-button').forEach(button => {
    button.addEventListener('click', function() {
        const price = parseInt(this.getAttribute('data-price'));
        totalPrice += price
        // Добавляем товар в корзину
        const itemName = this.previousElementSibling.querySelector('.image-description').textContent;
        const cartItems = document.getElementById('cart-items');
        const newItem = document.createElement('li');
        newItem.textContent = itemName + ' - ' + price + ' руб.';
        cartItems.appendChild(newItem)
        // Обновляем общую сумму
        document.getElementById('total-price').textContent = totalPrice
        // Активируем кнопку оплаты
        document.getElementById('checkout-button').disabled = false;
    });
})
document.getElementById('checkout-button').addEventListener('click', function() {
    alert('Оплата произведена! Сумма: ' + totalPrice + ' руб.');
    // Сброс корзины
    totalPrice = 0;
    document.getElementById('total-price').textContent = totalPrice;
    document.getElementById('cart-items').innerHTML = '';
    this.disabled = true; // Деактивируем кнопку после оплаты
})
// Обработчик для кнопки открытия корзины
document.getElementById('cart-button').addEventListener('click', function() {
    const cart = document.getElementById('cart');
    cart.style.display = (cart.style.display === 'none') ? 'block' : 'none';
})
// Обработчик для кнопки закрытия корзины
document.getElementById('close-cart-button').addEventListener('click', function() {
    document.getElementById('cart').style.display = 'none';
});


const addButtons = document.querySelectorAll('.add-button');

// Добавляем обработчик события на каждую кнопку
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Получаем название товара (можно сделать более гибким, если нужно)
        const itemName = button.previousElementSibling.querySelector('img').alt; // Получаем alt из изображения
        alert(`Товар "${itemName}" успешно добавлен в корзину!`);
    });
});
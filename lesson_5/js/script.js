let menu = document.querySelector('.menu'),
    menuItem = document.createElement('li'),
    adv = document.querySelector('.adv'),
    // column = document.querySelector('.column:nth-child(3)'),
    menuItems = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    answer = document.getElementById('prompt');

menuItem.classList.add('menu-item');
menuItem.textContent = 'Пятый пункт';
menu.appendChild(menuItem);
menu.insertBefore(menuItems[2], menuItems[1]);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

// column.removeChild(adv);

answer.textContent = prompt('Ваше отношение к технике apple?', ''); // лучше конечно было бы создать новую переменную prompt через let
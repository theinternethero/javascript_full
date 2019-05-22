'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money, // для того чтобы добавить переменную нужно сначала создать св-во
    expenses: {}, // можно объявлять пустые объекты внутри объекта, а потом добавлять им свойства
    optionalExpenses: {},
    income: [], // можно добавлять пустые массивы
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''), // при отмене prompt возвращает null
        b = prompt("Во сколько обойдется?", '');
    // Ниже: 1 условие: a строго равно строке, 2 и 3 условия: a и b не равны отмене, 4 и 5: a и b не равны пустой строке и количество символов a меньше 50
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b; // пара: ключ - значение, [a] потому что нам нужно передать переменную и если мы используем []? то св-во может содержать любую строку
    } else {
        i = 0;
    }
};

// Вариант цикла с while:
// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
    
//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i = 0;
//     }
//     i++;
// };

// Вариант цикла с do:
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i = 0;
//     }
//     i++;
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30; // создаем свойство/метод объекта appData

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log("Произошла ошибка");
};


// let necessarilyMoneyFirst = +prompt('Введите обязательную статью расходов в этом месяце'),
//     howMuchFirst = +prompt('Во сколько обойдется?'),
//     necessarilyMoneySecond = +prompt('Введите обязательную статью расходов в этом месяце'),
//     howMuchSecond = +prompt('Во сколько обойдется?');

// appData.expenses.necessarilyMoneyFirst = howMuchFirst; '=' - знак присваивания
// appData.expenses.necessarilyMoneySecond = howMuchSecond;

// console.log(appData.expenses.necessarilyMoneyFirst);

// alert(appData.moneyData / 30);
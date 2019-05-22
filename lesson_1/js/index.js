'use strict';

let money = +prompt('Ваш бюджет на месяц?'),
    time = +prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    moneyData: money, // для того чтобы добавить переменную нужно сначала создать св-во
    timeData: time,
    expenses: {}, // можно объявлять пустые объекты внутри объекта, а потом добавлять им свойства
    optionalExpenses: {},
    income: [], // можно добавлять пустые массивы
    savings: false
};

let necessarilyMoneyFirst = +prompt('Введите обязательную статью расходов в этом месяце'),
    howMuchFirst = +prompt('Во сколько обойдется?'),
    necessarilyMoneySecond = +prompt('Введите обязательную статью расходов в этом месяце'),
    howMuchSecond = +prompt('Во сколько обойдется?');

// Мой вариант (неправильно):
// expenses = {
//     necessarilyMoneyFirst: howMuchFirst,
//     necessarilyMoneySecond: howMuchSecond
// };

appData.expenses.necessarilyMoneyFirst = howMuchFirst; // = знак присваивания
appData.expenses.necessarilyMoneySecond = howMuchSecond;

console.log(appData.expenses.necessarilyMoneyFirst);

alert(appData.moneyData / 30);
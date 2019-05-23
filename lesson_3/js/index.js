'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    // isNaN - возвращает true, в том случае если попадают туда не цифры
    // Пока что-то не произошло (один из вариантов выполнится), мы задолбаем вопросом:
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money, // для того чтобы добавить переменную нужно сначала создать св-во
    expenses: {}, // можно объявлять пустые объекты внутри объекта, а потом добавлять им свойства
    optionalExpenses: {},
    income: [], // можно добавлять пустые массивы
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''), // при отмене prompt возвращает null
            b = prompt("Во сколько обойдется?", '');
        // Ниже: 1 условие: a строго равно строке, 2 и 3 условия: a и b не равны отмене, 4 и 5: a и b не равны пустой строке и количество символов a меньше 50
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b; // пара: ключ - значение, [a] потому что нам нужно передать переменную и если мы используем []? то св-во может содержать любую строку
        } else {
            i = i - 1;
        }
    }
};

chooseExpenses();

// Вариант цикла с while:
// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
    
//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i = i - 1;
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
//         i = i - 1;
//     }
//     i++;
// } while (i < 2);

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); // создаем свойство/метод объекта appData
    // toFixed() - метод, пустые скобки округляет до ближайшего целого
    // если 1 , то до первого знака после запятой
    // to fixed возвращает строковое значение
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log("Произошла ошибка");
    }
};

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthInCome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthInCome);
    }
};

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let answer = +prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = answer;         
    }
}

chooseOptExpenses();

// let necessarilyMoneyFirst = +prompt('Введите обязательную статью расходов в этом месяце'),
//     howMuchFirst = +prompt('Во сколько обойдется?'),
//     necessarilyMoneySecond = +prompt('Введите обязательную статью расходов в этом месяце'),
//     howMuchSecond = +prompt('Во сколько обойдется?');

// appData.expenses.necessarilyMoneyFirst = howMuchFirst; '=' - знак присваивания
// appData.expenses.necessarilyMoneySecond = howMuchSecond;

// console.log(appData.expenses.necessarilyMoneyFirst);

// alert(appData.moneyData / 30);
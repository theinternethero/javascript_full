'use strict';

let startBtn = document.getElementById("start"),

	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');
	
let money, time;

startBtn.addEventListener('click', function() {
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt('Ваш бюджет на месяц?', '');
	// isNaN - возвращает true, в том случае если попадают туда не цифры
	// Пока что-то не произошло (один из вариантов выполнится), мы задолбаем вопросом:
	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed(); // округляем до целого число
	yearValue.value = new Date(Date.parse(time)).getFullYear(); // с инпутами работаем только с value, не с textContent или innerHTML
	// выше мы создаем новую дату, а Date это объект и имеющий свои методы, один из методов это Date.parse(), он преобразовывает введеное значение с миллисекунды пройденное с 1970 года, а после с помощью метода getFullYear мы это значение преобразовываем в полные года
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1; // так как в js все начинается с нуля, мы прибавляем +1
	dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
	if (appData.budget != undefined ) {
	let sum = 0; // создаем сумму всех обязательных расходов
	for (let i = 0; i < expensesItem.length; i++) { // expensesItem - псевдомассив, length это последний индекс +1
		let a = expensesItem[i].value, // помещаем в переменную значение value каждого элемента по порядку от 0 до 3
			b = expensesItem[++i].value; // а в переменную b помещаем value i + 1, то есть 0+1 это второй и так далее
		// Ниже: 1 условие: a строго равно строке, 2 и 3 условия: a и b не равны отмене, 4 и 5: a и b не равны пустой строке и количество символов a меньше 50
		if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
			console.log('done');
			appData.expenses[a] = b; // пара: ключ - значение, [a] потому что нам нужно передать переменную и если мы используем [], то св-во может содержать любую строку
			sum += +b; // каждую итерацию прибавлять в сумму переменную b
		} else {
			i = i - 1;
		}
	}
	expensesValue.textContent = sum; // добавляем сумму в поле
	} else {
		expensesBtn.disabled = true;
	}
});

optionalExpensesBtn.addEventListener('click', function() {
	if (appData.budget != undefined ) {
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let answer = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = answer; // каждому ключу по порядку от 0 до 3 присваиваем значение по порядку
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; // в поле выводим каждый элемент
	}
	} else {
		optionalExpensesBtn.disabled = true;
	}
});

countBtn.addEventListener('click', function() {
	if (appData.budget != undefined ) {
		if (expensesValue.textContent != '') {
			appData.moneyPerDay = ((appData.budget - +expensesValue.textContent)/ 30).toFixed(); // создаем свойство/метод объекта appData
			// toFixed() - метод, пустые скобки округляет до ближайшего целого
			// если toFixed(1) , то до первого знака после запятой
			// toFixed() возвращает строковое значение
			dayBudgetValue.textContent = appData.moneyPerDay;
		} else {
			appData.moneyPerDay = (appData.budget / 30).toFixed(); // создаем свойство/метод объекта appData
			// toFixed() - метод, пустые скобки округляет до ближайшего целого
			// если toFixed(1) , то до первого знака после запятой
			// toFixed() возвращает строковое значение
			dayBudgetValue.textContent = appData.moneyPerDay;
		}
		
		if (appData.moneyPerDay < 100) {
			levelValue.textContent = 'Минимальный уровень достатка';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
			levelValue.textContent = 'Средний уровень достатка';
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = 'Высокий уровень достатка';
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	} else {
		// dayBudgetValue.textContent = "Произошла ошибка";
		countBtn.disabled=true;
	}
});

incomeItem.addEventListener('input', function() {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let save = +sumValue.value,
			percent = +percentValue.value;
		
		appData.monthIncome = save/100/12*percent;
		appData.yearIncome = save/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let save = +sumValue.value,
			percent = +percentValue.value;
		
		appData.monthIncome = save/100/12*percent;
		appData.yearIncome = save/100*percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money, // для того чтобы добавить переменную нужно сначала создать св-во
	expenses: {}, // можно объявлять пустые объекты внутри объекта, а потом добавлять им свойства
	optionalExpenses: {},
	income: [], // можно добавлять пустые массивы
	timeData: time,
	savings: false,
};

for (let key in appData) {
	console.log('Наша программа включает в себя данные: ' + key + " - " + appData[key]);
};
// let btn = document.getElementById('start'),
//     value = document.querySelectorAll('[class $= "value"]'),
//     input = document.getElementsByClassName('expenses-item'),
//     optionalInput = document.querySelectorAll('.optionalexpenses-item'),
//     chooseIncome = document.querySelectorAll('.choose-income'),
//     savings = document.querySelectorAll('#savings'),
//     chooseSum = document.querySelectorAll('.choose-sum'),
//     choosePercent = document.querySelectorAll('.choose-percent'),
//     yearValue = document.querySelectorAll('.year-value'),
//     monthValue = document.querySelectorAll('.month-value'),
//     dayValue = document.querySelectorAll('.day-value');
// console.log(btn);
// console.log(value);
// console.log(input);
// console.log(optionalInput);
// console.log(chooseIncome);
// console.log(savings);
// console.log(chooseSum);
// console.log(choosePercent);
// console.log(yearValue);
// console.log(monthValue);
// console.log(dayValue);

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
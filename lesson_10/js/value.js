let age = document.getElementById('age'); // получили элемент

function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

// showUser.apply(age, ["Горький","Максим"]); // получается можно задать несколько аргументов в массиве, через запятую

let double = showUser.bind(age); // мы насильно привязываем age к this
double('Горький', 'Максим'); // а тут уже передаем обычные аргументы




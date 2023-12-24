//Exercise 1
let password = 'JS&html';
let userPassword = prompt("Введите пароль");
if (userPassword === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неверно');
}

//Exercise 2
let c = Number(prompt('Введите число'));
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Exercise 3
let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Exercise 4
let a = '2';
let b = '3';
console.log(a + b);
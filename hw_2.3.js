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
console.log(Number (a) + Number (b));

//Exercise 5
let month = prompt('Введите порядковый номер месяца');
switch (month) {
    case '1':
        console.log('Январь - зимний месяц');
        break;
    case '2':
        console.log('Февраль - зимний месяц');
        break;
    case '3':
        console.log('Март - весенний месяц');
        break;
    case '4':
        console.log('Апрель - весенний месяц');
        break;
    case '5':
        console.log('Май - весенний месяц');
        break;
    case '6':
        console.log('Июнь - летний месяц');
        break;
    case '7':
        console.log('Июль - летний месяц');
        break;
    case '8':
        console.log('Август - летний месяц');
        break;
    case '9':
        console.log('Сентябрь - осенний месяц');
        break;
    case '10':
        console.log('Октябрь - осенний месяц');
        break;
    case '11':
        console.log('Ноябрь - осенний месяц');
        break;
    case '12':
        console.log('Декабрь - зимний месяц');
        break;
    default:
        console.log('Ввёл неверное значение');
        break;
}


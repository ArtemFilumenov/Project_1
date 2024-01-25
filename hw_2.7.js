//Exercise 1
let str = 'js';
console.log(str.toUpperCase());


//Exercise 2
function searchStart(arr, str) {
    const result = arr.filter(el => el.toLowerCase().includes(str.toLowerCase()));
    return result;
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

//Exercise 3
let math =  32.58884;
console.log(Math.floor(math));
console.log(Math.ceil(math));
console.log(Math.round(math));

//Exercise 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//Exercise 5
function randomNum() {
    const result = Math.round(Math.random() * 10);
    return result;
}

console.log(randomNum());

//Exercise 6
function getRandomArrNumbers(num) {
   const result = [];
   for (let i = 0; i < Math.floor(num / 2); i++) {
    result.push(Math.round(Math.random() * num));
   } 
   return result;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//Exercise 7
function getRandomNum(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue) + minValue);  
}

console.log(getRandomNum(3, 8));

//Exercise 8
let currentDates = new Date();
console.log(currentDates);

//Exercise 9
let currentDate = new Date();
let after73days = +currentDate + (73 * 24 * 60 * 60 * 1000);
console.log(new Date(after73days));

//Exercise 10
function getDate() {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let myDate = new Date();
    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это" + " " + days[myDate.getDay()] + "\nВремя: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    let hour = myDate.getHours();
    let minute = myDate.getMinutes();
    let second = myDate.getSeconds();
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return fullDate;
}

console.log(getDate());

// //Exercise 11
// function rememberWords() {
//     let fruits = [' Яблоко', ' Груша', ' Дыня', ' Виноград', ' Персик', ' Апельсин', ' Мандарин'];
//     let fruit = fruits.sort(() => Math.random() - 0.5);
//     alert(fruit);
//     let oneQuestion = " " + prompt('Чему равнялся первый элемент массива?');
//     if (oneQuestion === " " + null) {    
//         alert ('Вы отменили ввод');
//     } else {
//         let twoQuestion = " " + prompt('Чему равнялся последний элемент массива?');
//         if (twoQuestion === " " + null) {    
//             alert ('Вы отменили ввод');
//         } else {
//             if (!oneQuestion.trim() || !twoQuestion.trim()) {
//                 alert ('Строка пустая или состоит только из пробелов');
//             } else {
//                 if (oneQuestion.toLowerCase() === fruit[0].toLowerCase() && twoQuestion.toLowerCase() !== fruit[6].toLowerCase() || oneQuestion.toLowerCase() !== fruit[0].toLowerCase() && twoQuestion.toLowerCase() === fruit[6].toLowerCase() ) {
//                     alert ('Вы были близки к победе!')
//                 } else {
//                     if (oneQuestion.toLowerCase() === fruit[0].toLowerCase() && twoQuestion.toLowerCase() === fruit[6].toLowerCase()) {
//                         alert ('Угадал');
//                          } else {
//                             alert ('Не угадал');
//                         }
//                 }
//             }
//         }
//     }

// }

// rememberWords();
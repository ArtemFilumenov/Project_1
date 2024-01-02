//Exercise 1
let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}

//Exercise 2
let num1 = 1;
while (num1 <= 5) {
    console.log(num1);
    num1++;
}

//Exercise 3
let num2 = 7;
while (num2 <= 22) {
    console.log(num2);
    num2++;
}

//Exercise 4
let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
};
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов.`);
}

//Exercise 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);

//Exercise 6
let friday = 3;
for (let phonetic = friday; phonetic <= 31; phonetic +=7 ) {
    console.log(`Сегодня пятница, ${phonetic}-е число. Необходимо подготовить отчет.`);
}
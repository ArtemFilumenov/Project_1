//Exercise 1
function chooseBigNum (num1, num2) {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}
  
console.log(chooseBigNum(4,8));

//Exercise 2
function defineEvenOdd (num) {
  if (num % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}

console.log(defineEvenOdd(6));

//Exercise 3.1
function erectSquare1(num) {
  console.log(num ** 2);
}

erectSquare1(5)

//Exercise 3.2
function erectSquare2(num) {
  num = num ** 2;

  return num;
}

console.log(erectSquare2(11));

//Exercise 4
function askAge (num) {
  num = prompt('Сколько тебе лет?');
  if (num < 0) {
    return 'Вы ввели неправильное значение';
  } else if (num <= 12) {
    return 'Привет, друг!';
  } else {
    return 'Добро пожаловать!'
  }
}

console.log(askAge());

//Exercise 5
function multNum() {
  let num1 = +prompt('Введите первое число');
  let num2 = +prompt('Введите второе число');
  if  (isNaN(num1)) {
    return 'Одно или оба значения не являются числом';
  } else if (isNaN(num2)) {
    return 'Одно или оба значения не являются числом';
  }

  return num1 * num2;
}

console.log(multNum());

//Exercise 6
function erectCube() {
  let num = +prompt('Введите число');
  if  (isNaN(num)) {
    return 'Переданный параметр не является числом';
  } else {
    return num ** 3;
  }
}

console.log(erectCube());

//Exercise 7
function getRectangleArea() {
 return 3.14 * this.radius;
}

function getRectanglePerimeter() {
  return 2 * 3.14 * this.radius;
}

const circle1 = {
  radius: prompt('Какой радиус круга?'),

  getArea: getRectangleArea,
  getPerimeter: getRectanglePerimeter,
};

const circle2 = {
  radius: prompt('Какой радиус круга?'),

  getArea: getRectangleArea,
  getPerimeter: getRectanglePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
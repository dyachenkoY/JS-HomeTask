/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие(Пусть совершеннолетним считается пользователь, которому исполнилось 18 лет):
isAdult(20); // true
isAdult(4); // false */

///////////////////////////  1st version///////////////

const adult = prompt('Введите Ваш возраст?');

const isAdult1 = function (age) {
    if (isNaN(age)) {
        alert (null);
    } else {
    age >= 18 ? alert('Добро пожаловать!') : alert('Вы не совершенолетний!');
    return age;
}
}
isAdult1(adult);


///////////////////////////  2nd version///////////////
const isAdult2 = function (age) {
    if (isNaN(age)) {
        alert (null);
    } else {
    let result = age >= 18;
    return result
}
}
console.log(isAdult2(18));




/* 2.  Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
checkMultiplicity(25, 5) // true
checkMultiplicity(15, 3) // true
checkMultiplicity(15, 5) // true
checkMultiplicity(15, 4) // false */

const checkMultiplicity = function (num1, num2) {
    if (isNaN(num1) || isNaN(num2))  {
        console.log(null);
    } else {
    let result = num1 % num2 === 0;
    return result;
}
}

console.log(checkMultiplicity(20, 4));



/* 3. Проверка возможности треугольника. Создать функцию которая принимает длины сторон треугольника; функция возвращает true если треугольник возможен и false если нет*/

////////////////////////////////////////// 1st VERSION///////////////////////////////////

const triangle1 = function (num1, num2, num3) {
    
    if ((num1 + num2 > num3) && (num2 + num3 > num1) && (num3 + num1 > num2)) {
        console.log('Треугольник возможен');
    } else {
        console.log('Треугольник не возможен');
    };
}

triangle1(3, 4, 5);

////////////////////////////////////////// 2nd VERSION///////////////////////////////////

const triangle2 = function (num1, num2, num3) {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3))  {
        console.log(null);
    } else {
    let result = ((num1 + num2 > num3) && (num2 + num3 > num1) && (num3 + num1 > num2));
    return result;
}
}
console.log(triangle2(3, 4, 5));



/*  4. написть функцию, которая принимает число и возвращает сумму нечетных чисел от 1 до указанного числа
*/

let sum = 0;
const returnSumm = function (num) {
    if (isNaN(num))  {
        console.log(null);
    } else {
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) continue
        sum = sum + i;
    }
    return sum;
}
}
console.log(returnSumm(5));


/* 5. Создать функцию, которая будет проверять, является ли число простым. Простым является неотрицательное число, которое делится нацело только на самого себя или на 1.
 */

const isSimpleNumber = function (num) {
    if (isNaN(num))  {
        console.log(null);
    } else {
    for (let i = 2, sqrt = num ** (1 / 2); i <= sqrt; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}
}
console.log(isSimpleNumber(2));
console.log(isSimpleNumber(3));
console.log(isSimpleNumber(5));
console.log(isSimpleNumber(7));

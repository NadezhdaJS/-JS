'use strict'
/* <!-- Task 1 -->
<!-- В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90. Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.

Программа должна учитывать вариант ввода чисел за пределами диапазона 1..90. --> */
/* let flat = 34;
if (flat >= 1 && flat <= 20) {
    console.log(`Квартира ${flat} находится в первом подъезде`)
} else if (flat >= 21 && flat <= 48) {
    console.log(`Квартира ${flat} находится во втором подъезде`)
}
else if (flat >= 49 && flat <= 90) {
    console.log(`Квартира ${flat} находится в третьем подъезде`)
} else {
    console.log(`Такой квартиры нет в этом доме`)
} */


/* let array = [1, 2, 3, 4, 5, 6, 7]
for (let index = 0; index <= 7; index++) {

    if (index === 0) {
        array[index] = console.log('Introduction')
    }
    else if (index === array.length) {
        array[index] = console.log('Conclusion')
    }
    else {
        array[index] = console.log('Chapter ' + index)
    }

} */

/* for (let index = 1; index < 51; index++) {
    console.log(index)
} */

//3 loop

/* for (let index = 1; index <= 122; index++) {
    if (index%2 == 0) {
        console.log(index)
    }
} */

//4 loop

/* for (let index = 25; index >= 7; index--) {
    console.log(index)
} */
// 5 loop
/* for (let index = 77; index >= 35; index--) {
    if (index%3 == 0) {
        console.log(index + '_')
    }
    
} */

//loop 6

/* let times = 9;
for (let index = 0; index < times; index++) {
    console.log('******')
}
 */

//loop 7
/* let pushNumber = 12;
for (let index = pushNumber; index >= 0; index--) {
    console.log(index)
    
} */

//loop 8
/* let input1 = 2;
let input2 = 8;
for (let index = input1; index <= input2; index++) {
    console.log(index)   
} */

//loop 9
/* let input3 = 7;
let input4 = 2;
if (input3 < input4) {
   for (let index = input3; index <= input4; index++) {
    console.log(index)
   } 
}
else {
    for (let index = input4; index <=input3; index++) {
      console.log(index)
    }
} */

//loop 10
/* for (let index = 1950; index <= 2000; index = index+2) {
    console.log(index)
} */

// loop 11
/* for (let i = 0; i < 11; i++) { 
  console.log(10-i); 
  console.log(i);
} */

// loop 12
/* let result = 0;
let arr = [25, 25, 50];
for (let index = 0; index < arr.length; index++) {
    result += arr[index];  
}
console.log(result) */

// loop 13
//Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

/* let arr = [2, 5, 9, 15, 0, 4];
for (let index = 0; index < arr.length; index++) {
    if (index > 3 && index < 10) {
       console.log(index) 
    }
} */

// loop 14
//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

/* let arr = [4, 1, -3, 10, -4, -6, 10];
let result = 0;
for (let index = 0; index < arr.length; index++) {
    
if (arr[index] > 0) {
        result += arr[index];
    }   
}
console.log(result) */

// loop 15
//Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
/*  let arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 4)  {
        console.log(`Есть!`); 
    break;
    } 
} */

//loop ***
//Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

//loop 16
//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
/* let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = 1;
for (let index = 1; index < arr.length; index++) {
    result += '-' + arr[index];
}
console.log('-' + result + '-') */

//loop 17
//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите с эмоджи.
/* let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
for (let index = 0; index < week.length; index++) {
    if (index > 4) {
       console.log(week[index] + ' 😎!')
    }
    else {
    console.log(week[index])
    }
}
 */

//loop 18
 //Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите день с эмоджи. Текущий день должен храниться в переменной day.
/* let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let today = 'вторник';
for (let index = 0; index < week.length; index++) {
    if (week[index]==today) {
        console.log(week[index] + ' 👻')
    } 
    else {
    console.log(week[index])
}
} */
    

//loop 19
 //Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// https://w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
"use strict";
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

/* let num = 5;
for (let index = 1000; index > 50; index++) {
   index /= 2;
console.log(index)
    
} */

//loop 20
//Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

/* for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log(i + " Fizz");
  } else if (i % 5 == 0) {
    console.log(i + " Buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " FizzBuzz");
  } else {
    console.log(i);
  }
} */

//loop 21
//Get the sum of two arrays…actually the sum of all their elements.

/* let arr2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let arr1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

let getSum1 = 0;
for (let i = 0; i < arr1.length; i++) {
  getSum1 += arr1[i];
}

let getSum2 = 0;
for (let i = 0; i < arr2.length; i++) {
  getSum2 += arr2[i];
}

let sum = getSum1 + getSum2;
console.log(getSum1, getSum2, sum); */

//Как сложить элементы одного массива?
/* let sum =
  arr1[0] +
  arr1[1] +
  arr1[2] +
  arr1[3] +
  arr1[4] +
  arr1[5] +
  arr1[6] +
  arr1[7] +
  arr1[8] +
  arr1[9] +
  arr1[10];
console.log(sum); */

//loop 22
//Using a for loop print all even numbers up to and including n. Don’t include 0.
/* let n = 22;
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
} */

// loop 23
//Using a for loop output the elements in reverse order
/* let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
} */

// loop 24
//Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair. Assume both arrays are of the same length.
let arr3 = [4, 6, 7];
let arr4 = [8, 1, 9];
let arr = [];
for (let i = 0; i <= 2; i++) {
  let sum = arr3[i] + arr4[i];
  arr.push(sum);
}
console.log(arr);

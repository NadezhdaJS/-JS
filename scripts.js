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


let array = [1, 2, 3, 4, 5, 6, 7]
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

}

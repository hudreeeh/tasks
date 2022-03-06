//! 1) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено 
//   значение 99. Программа должна подсчитать, сколько чисел было введено с клавиатуры 
//   (не считая значения 99) и вывести эту информацию на экран.
//   ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4
// let btnStart = document.getElementById('start');
// let btnResult = document.getElementById('result');
// let ques;
// let res;
// res = 0;
// let start = () => {
//     ques = prompt('Введите число');
//     do{
//         res += 1;
//         ques = prompt('Введите число');
//     }
//     while(ques != 99)
// }
// btnStart.onclick = start;
// btnResult.onclick = () => {
//     alert(`Количество чисел: ${res}`);
// }

//! 2) Составьте программу, которая принимает с клавиатуры числа, пока не будет введено 
//    значение 999. Программа должна подсчитать, сколько чисел было введено с клавиатуры, 
//    чему равна сумма этих чисел (не считая значения 999), и вывести эту информацию 
//    на экран.
//    ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290
let btnStart2 = document.getElementById('start2');
let btnResult2 = document.getElementById('result2');
let ques2;
let res2;
let res3;
res2 = 0;
let res4 = 0;
let start2 = () => {
    ques2 = prompt('Введите число');
    while(ques2 != 999){
        res2 += 1;
        res4 =  ques2 + ques2;
        ques2 = prompt('Введите число');
    }
}
btnStart2.onclick = start2;
btnResult2.onclick = () => {
    alert(`Количество чисел: ${res2}; сумма: ${res4}`);
}


//! 3) Составьте программу, которая принимает с клавиатуры два целых числа, первое из которых - год рождения ученика,
//    а второе – нынешний (текущий) год. 
//    Программа должна вывести на экран возраст ученика (в целых годах).
//    ввод: 2006, 2018 ⇒ вывод: вам 12 лет)
// let btnStart3 = document.getElementById('start3');
// let btnResult3 = document.getElementById('result3');
// let year = 140;
// let birth = 340;
// let dif;

// let difference = () => {
//     do{
//         birth = prompt('Введите ваш год рождения');
//         year = prompt('Введите текущий год');
//         dif = year - birth;
//     }
//     while(year < birth);
// }
// btnStart3.onclick = difference;
// btnResult3.onclick = () => {
//     alert(`${birth}, ${year} = вывод: вам ${dif}`);
// }


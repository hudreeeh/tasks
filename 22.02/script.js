// Если переменная x равна 7, то выведите окошко
//    с сообщением 'Верно', иначе выведите 'Неверно'.
let x = 7;
if(x === 7){
    alert('Верно');
}
else{
    alert('Неверно');
}

// Если переменная a равна или меньше 1, а переменная b больше или равна 3,
//    то выведите сумму этих переменных, иначе выведите их результат вычитания.
let a = 1;
let b = 4;
if(a <= 1 && b >= 3){
    alert(a + b);
}

// В переменной time лежит число от 0 до 59. Определите в какую четверть
//    часа попадает это число (в первую, вторую, третью или четвертую).
//    Например: если переменная time = 5, то она попадает в первую четверть.
//    В противном случае вывести "Значение не попадает в диапазон от 0 до 59".
let time = 33;
if(time >= 0 && time <= 14){
    alert('Число находтся в первой четверти');
}
else if(time >= 15 && time <= 29){
    alert('Число находится во второй четверти');
}
else if(time >= 30 && time <= 44){
    alert('Число находится в третьей четверти');
}
else if(time >= 45 && time <=59){
    alert('Число находится в четвертой четверти');
}
else{
    alert('Значение не попадает в диапозон чисел от 0 до 59');
}

// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'.
//    Проверьте работу скрипта при test, равном true, false.
//    Напишите два варианта скрипта - с короткой записью и с длинной.
// Длинное условие
let test = true;
if(test !== true){
    alert('Верно');
}
else{
    alert('Неверно');
}

// Укороченное условие
let test2 = false;
let result = test2 !== true ? 'Верно' : 'Неверно';
alert(result);


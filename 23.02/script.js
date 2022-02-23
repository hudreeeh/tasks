//1) Создайте объект заработных плат.
//     Назовите userSalaries.
//     Свойствами выступают: Ella, Sophia, Ellie
//     Выведите на экран зарплату Ella, Sophia.
let userSalaries = {
    Ella: 15000,
    Sophia: 13000,
    Ellie: 20000
}
console.log(`${userSalaries.Ella}, ${userSalaries.Sophia}`);

//2) Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
//    Найдите сумму его элементов.
let sum = {
    a: 5,
    b: 6,
    c: 10
}
console.log(sum.a + sum.b + sum.c);

//3) let number;
//   if(data === true){
//      number = 3;
//   } else{
//      number = 5;
//   }
//
//   Сделайте рефакторинг кода, с помощью тернарного оператора.
let data = true;
let number = data === true ? 3 : 5;
console.log(number);
//Используя конструкцию if..else, напишите код, который будет спрашивать: «Кто такой В.В.ПУТИН?».
//
// Если посетитель вводит «Президент», то выводить «Верно!», если что-то другое – выводить «Не знаете?».
let ques = prompt('Кто такой В.В.ПУТИН?', '');
if(ques == 'Президент'){
    alert('Верно!');
}
else{
    alert('Не знаете?');
}

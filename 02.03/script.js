//! 1)  Дан массив с элементами [2, 3, 4, 5, 6, 7].
//!    С помощью цикла for найдите произведение элементов этого массива.
//!    Общий результат сохранить в объекте с соответствующим свойством.
//!    Например: 2 * 3 = 6 -> 6 * 4 и.т.д.
//! Через метод reduce()
let arr = [2, 3, 4, 5, 6, 7];
let result = arr.reduce((sum, value) =>{
    return sum * value;
}, 1);
console.log(result);
let obj = {
    res: result
}
console.log(obj);
// Через цикл
sum = 1;
for(let i = 0; i < arr.length; i++){
    sum *= arr[i];
}
console.log(sum);

//! 2) Напишите функцию, которая заполняет новый массив предоставленным значением 
//!    и затем ее возвращает. Функция должна первым параметром принимать 
//!    элемент (значение для массива), вторым параметром размер массива.  
//!    Например: myFunc('a', 3)   // ['a', 'a', 'a']
function myFunc1(mass, value) {
    let arr = [];
    for(mass; mass > 0; mass--) {
    arr.push(value);
    }
    return arr;
}
console.log(myFunc1(3, 'a'));

//! 3) Напишите функцию, которая разворачивает массив в обратном порядке 
// !   и затем ее возвращает.  Функция наша  принимает массив любых элементов.      
//!    Например:
//!    const data = [1, 2, 3]; 
//!    myFunc(data);  // [3, 2, 1];
// Через метод reverse()
// const data = [1, 2, 3];
// data.reverse();
// console.log(data);

// Через функцию
function myFunc(){
    const data = [1, 2, 3];
    data.reverse();
    console.log(data);
}
myFunc();
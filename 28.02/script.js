// //1) Напишите функцию hello(), которая при вызове будет возвращать строку 
// //«Привет, JavaScript!»
// // function hello(){
// //     return 'Привет, JavaScript!';
// // }
// // hello();
// // alert(hello());

// // // 2) Нужно создать функцию, которая будет выводить куб числа на страничку. 
// // //    Число должно передаваться параметром.
// function alertCube(num = 5){
//     return num * num * num;
// }
// alertCube();
// alert(alertCube());

// // // 3) Напишите функцию getName(), которая при вызове будет принимать переменную 
// // //    name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»). 
// // //    В случае отсутствующего параметра выводить «Привет, гость»
// function getName(){
//     let name = prompt('Введите ваше имя');
//     if(name === ''){
//         alert('Привет, гость');
//     } else{
//         alert('Привет, ' + name);
//     }
// }
// getName();


// // 4) На старте вы получаете массив. Необходимо написать функцию, которая будет  
// //    возвращать массив удвоенных значений исходного массива.
// //    Пример кода:
// //    example([1, 2, 3]) => [2, 4, 6]
// //    example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
// //    example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]
// let mass = [];
// function calc(mass1){
//     for(let i = 0; i < mass1.length; i++){
//         let sum = mass1[i] + mass1[i];
//         mass.push(sum);
//     }
// }
// calc([1, 2, 3]);
// calc([4, 1, 1, 1, 4]);
// calc([2, 2, 2, 2, 2, 2]);
// console.log(mass);



// function str(str){
//     return str.split('').reverse().join('');
// }
// console.log(str('ох ататат чиркин пиркин'));


// console.log('morning'.split(''));
// console.log('morning good teh phone'.split('o'));


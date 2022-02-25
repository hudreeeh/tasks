//1) Создайте массив с числами. Перебирая элементы созданного массива с помощью 
//цикла выведите только те элементы массива, которые больше нуля и меньше 10.
let number = [1, 2, 3, 4, 50, 12, 9, 8, 13, 7, 20];
for(let i = 0; i < number.length; i++){
    if(number[i] > 10){
        continue;
    }
    console.log(number[i])
}

//2) У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
//С помощью цикла надо найти сумму элементов этого массива.
let arr = [1, 2, 5, 6, 88, 5];
let result = 0;
for(let o = 0; o < arr.length; o++){
    result += arr[o];
    console.log(result);
}

//3) Создайте массив с различными числами. Должно быть как минимум 10 элементов 
//внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива. 
//Квадрат числа 5 будет 25.
let my_num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let res = 0;
let mass = [];
for(let u = 0; u < my_num.length; u++){
    console.log(my_num[u] * my_num[u]);
    res = my_num[u] * my_num[u];
    mass.push(res);
}
let west = 0;
for(let u = 0; u < my_num.length; u++){
    west += mass[u];
}
console.log(west);




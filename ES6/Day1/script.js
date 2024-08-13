/*
1- var
    reassign
    redeclare
    hoisting
    function scope
    added to the window object
2- let
    reassign
    can't redeclare
    hoisting not allowed
    block scope
    not added to the window object
*/ 


// console.log(fname); // hoisting
// var fname = "men3m";
// console.log(fname);
// var fname = 22;  // redeclaration
// console.log(fname);
// fname = true;  // reassign (any type)
// console.log(fname);

// scope (global, function scope)

// function show(){
//     console.log("i = ",i);    
//     for(var i=0; i<3; i++){
//         console.log("i = ",i);
//     }
//     console.log("i = ",i);
// }
// show();

// console.log(window);
// console.log("window fname",window.fname); // added to the window object


// console.log(address); // hoisting isn't allowed
// let address = "cairo";
// console.log(address);
// address = "alex";
// console.log(address);
// address = 3.14;   // 1- reassign (any type)
// console.log(address);

// let address = true; // can't redeclare


// function show()
// {
//     // console.log("i = ",i);    
//     for(let i = 0; i < 3; i++)
//     {
//         console.log("i = ",i);
//     }
//     // console.log("i = ",i);
// }

// show();


// console.log(window.address); // not added to window object



// var test = "hello";
// console.log(test);
// let test = "yes";  // error


/////////////////////////////////
// console.log(PI); // hoisting isn't allowed
// const pi = 3.14;  // xxx
const PI = 3.14;
// PI =  "men3m";  // can't reassign

// const trackName = "React";  // xxx
// const TRACKNAME = "React";

// const PI = "Summer Trainning"; // can't redeclare


// function show(){
//     for(let i=0; i<3; i++){
//         const x = "hi";
//         console.log("i = ",i);
//     }
//     // console.log(x); // error: bcoz it's a block scope
// }

// show();


// const arr = ["mona", "nora", "yahia"];
// console.log(arr);
// arr.push("nada");  // work
//console.log(arr);
// arr = [123,243];  // error

// arr[0] = "343";
// console.log(arr);


// var c = "abc";
// c[0] = 'z';

// console.log(c);  // no change bcoz it's a immutable object



// let a = 5;
// let b = a;
// a = 34;
// console.log(a);
// console.log(b);
// //1 5, 5
// //2 34 5     // correct
// //3 34 34


// let arr1 = [1,2];
// let arr2 = arr1;
// arr1.push(3);
// console.log(arr1);
// console.log(arr2);


let arr1 = [1,2,6,"test", 5, 7];
// let arr2 = arr1.slice();
// let arr3 = [];
// for(let i=0; i<arr1.length; i++){
//     arr3[i] = arr1[i];
// }
// clone
// arr1.push("test");
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


// let arr4 = [...arr1];
// arr1.push("men3m");
// arr4.push("ahmed");
// console.log(arr1);
// console.log(arr4);

// let arr5 = ["iti", ...arr1, "react", ...arr1, "st"];
// console.log(arr5);

// let a = 3;
// let b = 5;
// let c = 7;
// console.log(Math.max(a,b,c,34,-90));

// let arr=[1, 5, 2, 3];
// console.log(Math.max(arr)); // NaN
// console.log(Math.max(...arr)); // 5


// function add(...rest){
//     // console.log(arguments);
//     console.log(rest);
//     // console.log(x+y);
// }

// add(23,54, 34, 45, 102, 343);
// add("ali", "ahmed");




// let a = 30;
// let b = 15;
// console.log(a, b);
// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a, b);


// console.log(a);
// console.log(b);
// let temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);


// let trackNames = ["React", "Angular", "PHP"];
// let x = trackNames[0];
// let y = trackNames[1];

// let [x, ...y] = trackNames;
// console.log(x);
// console.log(y);

// let [...a] = trackNames;
// console.log(a);



// function getArr(x) { 
//     return [
//         x, 
//         function (newX) {
//             x = newX;
//             return x;
//         },
//         true
//     ];
// }

// let [b, setb] = getArr(5);
// console.log(b);
// console.log(setb);

// b = setb(34);

// console.log(b);
// console.log(setb);



// let arr = [2,34];
// let [x,y] = arr;
// console.log(x);
// console.log(y);

// let person = {
//     fname : "men3m",
//     age: 34,
//     address : "cairo",
//     tel: "01234567890"
// }

// console.log(person.x);

// console.log(person);

// let {age:age, tel:tel} = person; 
// let {age, tel} = person;  // sugar syntax
// let {x, y} = person; 
// console.log(x);
// console.log(y);



// default values in es6
// function show(a="men3m",b="ahmed"){
//     // short circuit
//     // a = a || "mona"; 
//     // b = b || "ahmed";
//     console.log(a, b);
// }

// show();
// show(12, 15);

// let fname = "yahia";
// console.log("hello", fname);
// console.log(`hello ${fname}`);


/////////
/*
1- function statement / declaration
2- function expression
3- callback function
4- anonymous function
5- arrow function
*/ 


// function sum(x,y){
//     return x+y;
// }

// let add = function (x,y){
//     return x+y;
// }



// let res = (x) => x+x;
// console.log(res(5));



let arr = [10, 23, 15, 45, 30, 59];
// function findElement(x,y,z){
//     console.log(`x = ${x}`);
//     console.log(`y = ${y}`);
//     console.log(`z = ${z}`);
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>25)
//             return arr[i];
//     }
// }

// // console.log(findElement(arr[0], 0, arr));

// for(let i=0; i<arr.length; i++){
//    let num = findElement(arr[i], i, arr);
//    console.log(num);
//    console.log("============================");
// }


// arr.find(cb)
// let number = arr.find(function (item,idx,arr){
//     console.log(`item = ${item}`);
//     console.log(`idx = ${idx}`);
//     console.log(`arr = ${arr}`);
//     console.log("-----------------");
//     return item>25;
// });

// let number = arr.findIndex(function (item, idx, arr){
//     console.log(arguments)
//     // console.log(`item = ${item}`);
//     // console.log(`idx = ${idx}`);
//     // console.log(`arr = ${arr}`);
//     console.log("-----------------");
//     return item>25;
// });
// console.log(`number = ${number}`);

// let tracks = ["React", "Angular", "PHP", "Python", "Java"];
// let res = tracks.map(function(item, idx, arr){
//     return {
//         id:idx,
//         trackName: item,
//     }
// });

// console.log(res);


let products = [
    {
        id: 1,
        name: "mobile",
        price: 200,
        category: "electronics"
    },
    {
        id: 2,
        name: "watch",
        price: 100,
        category: "electronics"
    },
    {
        id: 3,
        name: "book",
        price: 50,
        category: "school"
    },
    {
        id: 4,
        name: "pen",
        price: 10,
        category: "school"
    },
    
    {
        id: 5,
        name: "mango",
        price: 25,
        category: "fruit"
    },

];

// let filtered = products.filter((item, idx, arr) => item.category != "school");

// console.log(filtered);

// let res = products.every((item, idx, arr)=>item.price>15);
// let res = products.some((item, idx, arr)=>item.price>50);
// console.log(res);


// for(let idx = 0; idx<products.length; idx++){
//     console.log(products[idx]);
// }


// let out = products.forEach((item, idx, arr)=>{
//     console.log(`${item.name} = ${item.price}$`);
// })

// console.log(out);


// reduce: self study
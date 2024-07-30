/*
var fname = "iti";
console.log(fname);

// reassign
fname = "ali";
console.log(fname);

// console.log("hello");
var g2 = true;
// redeclaration
var fname = g2;
console.log(fname);
console.log(typeof fname);

fname = 5;
console.log(fname);
console.log(typeof fname);

// Js : Loosely Data Type
*/

/** Data Types
  1- Primitive Data Types
        1- number
        2- string 
        3- boolean
        4- undefined
        5- null
  2- Reference Data Types
*/

/*
var age=23;
console.log(age);

var age2;
console.log(age2);
console.log(typeof age2);


var x = 0;
console.log("x", typeof x);
var y = null;
console.log("y", typeof y);
*/

/**Variables
    1- Literal Creation
    2- Method Creation
 */

/*    
var address = "cairo";
console.log(address);
console.log(typeof address);

var address2 = String("alex");
console.log(address2);
console.log(typeof address2);

var age = Number(10);
console.log(age);
console.log(typeof age);

var age2 = Number("55");
console.log(age2);
console.log(typeof age2);

var age2 = Number("55werw");
console.log(age2);
console.log(typeof age2);

var x = isNaN("10a"); // true
console.log(x);

var x = isNaN("10"); // false
console.log(x);

var x = isNaN(10);
console.log(x);


var flag = Boolean(true);
console.log(flag);
console.log(typeof flag);

flag = Boolean("ali");
console.log(flag);
console.log(typeof flag);

flag = Boolean([1,2]);
console.log(flag);
console.log(typeof flag);

flag = Boolean(NaN);
console.log(flag);
console.log(typeof flag);
*/

/** Falsy Values
    ""
    NaN
    0
    false
    undefinded
    null
 */

/** Truthy Values
    all values except falsy values
*/

/**strongly typed
int x  = 5;
x = 22;

x = "men3m";  // error: strongly typed
*/

/* Loosely Typed
var x = 4;
x = "iti"; // loosely data type  
*/

/*Arthematic Operators
//#region Arthematic Operators

// plus +

// sum
var num1 = 10;
var num2 = 22;
console.log(num1 + num2);

// concatenation
var num1 = "10";
var num2 = "22";
console.log(num1 + num2);

var num1 = "mona";
var num2 = "ali";
console.log(num1 + ' ' + num2);

// Coercien: The process of converting a datatype to another.

var num1 = 53;
var num2 = "10";
console.log(num1 + num2);

var num1 = 52; // 52
var num2 = "ali"; // nan
console.log(Number(num1) + Number(num2)); // NaN


// Special Cases

var n1 = undefined;
var n2 = undefined;
console.log("case1: ", n1+n2);

n1 = 10;
n2 = undefined;
console.log("case2: ", n1+n2);

n1 = 10;
n2 = NaN;
console.log("case3: ", n1+n2);

n1 = NaN;
n2 = NaN;
console.log("case4: ", n1+n2);

n1 = null;
n2 = null;
console.log("case5: ", n1+n2);

n1 = null;
n2 = 10;
console.log("case6: ", n1+n2);

n1 = null;
n2 = 10;
console.log("case7: ", n1-n2);

n1 = 10;
n2 = "7";
console.log("case8: ", n1+n2);

n1 = 10;
n2 = 7;
console.log("case9: ", n1-n2);

n1 = 10;
n2 = "8";
console.log("case10: ", n1+n2);

n1 = 10;
n2 = "8";
console.log("case10: ", n1-n2);

n1 = 10;
n2 = "ali";
console.log("case10: ", n1-n2);


// isNaN("8") // false
// isNaN("ali") // true  = NaN
// 10-NaN = NaN


//#endregion
*/

/*Comparison
    1 > 3 : False
    2 < 6 : True
*/

/*
var x = 10;
var y = 10;
console.log("case1",x == y);

var x = 10;
var y = "5";
console.log("case1",x == y);
console.log("case1",x === y);

var x = 10;
var y = "10";
console.log("case2",x == y);
console.log("case3",x === y);

var x = 10;
var y = "ali";
console.log("case22",x == y);  // 
console.log("case23",x === y); // false

var n1 = true;   // 1
var n2 = "true"; // NaN
console.log("case4",n1 == n2);  // false
console.log("case5",n1 === n2); // false
*/

/*Logical Operators
    1- Bitwise AND
    2- Bitwise OR
    3- Bitwise NOT
*/

// AND
//1<3 && 2<4

// Short Circuits
/* 
var x = "mona";
var y = "ali";
// console.log("case1",x && y);
// console.log("case2",x || y);
// console.log("case3",x && y);
// console.log("case4",x && y);

console.log("case5", 0 && undefined); // 0
console.log("case6", "" && "ali");    // "" 
console.log("case7", "ali" && undefined && "mona"); // undefined
console.log("case7", "ali" && true && "mona");      // 

console.log("case8", "mona" || "ali");  // mona
console.log("case9", "mona" || "");     // mona
console.log("case10", 0 || undefined);  // undefined
console.log("case11", 0 || "alaa");     // alaa
console.log("case12", "alaa" || 0);     // alaa

function greet(){
    var sum = 3 + 5;
    console.log("sum = ", sum);
}

console.log("case12", greet && "ali");   // ali
console.log("case13", greet() && "ali"); // undefined

console.log("case14", greet || "ali"); // greet
console.log("case15", greet() || "ali"); // ali
*/

// var fname = prompt("Enter your name: ");
// console.log(fname);

// var x = Number(prompt("enter number 1"));
// var y = Number(prompt("enter number 2"));
// console.log("sum =", x+y);

// if(x < y){
//     console.log("number 1 smaller than number 2");
// }
// else if(x == y){
//     console.log("number 1 equals to number 2");
// }
// else {
//     console.log("number 1 greater than number 2");
// }
                       // 3 < 3 
// for(var counter = 0; counter < 3; counter++){
//     console.log("hello world");
//     console.log("hello js");
// }

// var counter = 0; 
// while(counter < 3){
//     counter++;
//     console.log("hello world");
//     console.log("hello js");
// }

// var counter = 0; 
// while(counter < 3){
//     // counter++; // inifinity loop - if you try you will cry
//     console.log("hello world");
// }

// alert("hello world");
// var choice = confirm("R U sure that you want delete this product");

// console.log(choice);
// if(choice == true){
//     console.log("product deleted successfully");
// } else {
//     console.log("product not deleted");
// }

// ternary operator
// (condition)?true:false

// (choice == true)?
//     console.log("product deleted successfully"):
//     console.log("product not deleted");

// nested ternary operator
// (choice == true)?
//     console.log("product deleted successfully"):
//     (1 < 2)?
//         console.log("product not deleted and 1 < 2"):
//         console.log("product not deleted and 1 >= 2");


// if(choice == true){
//     console.log("product deleted successfully");
//     if(1<2){
//          console.log("test2");
//     } else {
//          console.log("test1");
//     }
// } else {
//     console.log("product not deleted");
// }

// var iterations = 0;
// for(var i = 0; i<2; i++){
//     for(var j=0; j<3; j++){
//         console.log("(",i,",",j,")");
//         iterations++;
//     }
// }
// console.log("iterations = ",iterations);

// document.writeln("<h1 style='color:red'>hello world<h1>");

// for(var i = 1; i<7; i++){
//     document.writeln("<h"+i+" style='color:green'>hello world<h"+i+">");
// }
// var a = 5;
// var b = 6;  
// console.log(a+b);

// /// 103 line code

// var a = 5;
// var b = 6;  
// console.log(a+b);

// /// 103 line code

// var a = 5;
// var b = 6;  
// console.log(a+b);


// function sum(){
//     var a = 5;
//     var b = 6;  
//     console.log("a",a);
//     console.log("b",b);
//     console.log("sum=",a+b);    
// }

// var x = sum();
// console.log("x=",x);


// sum();

// sum();

// function sum(a,b){
//     console.log("a",a);
//     console.log("b",b);
//     console.log("sum=",a+b);
// }

// sum(3,90);
// sum(3);
// sum();
// sum(4,5,6,87);
// sum("mona", " ali");
// sum("mona", 5);
// sum(true, true);
// sum("1", true);

// function sum(a,b){
//     console.log("a",a);
//     console.log("b",b);
//     console.log("sum=",a+b);
//     // return a+b;
// }

// var s = sum(5,7);
// console.log(s);
// console.log(sum(5,7));
//  var mul = 2 * sum(5,7);

// console.log(test());

// built in function
// console.log(Number("1"));

// user defined function
// 1- function statement (function declaration)
// function sum(a,b){
//     return a*b;
// }

// 2- function expression
// var result = function (a,b){
//     return a+b;
// }

// console.log(result);
// console.log(result(5,6));

// error: sum is not defined
// console.log(sum);
// console.log(sum(5,6));

// console.log(test());
// console.log(fname);  // undefined 
// var fname = "men3m";
// console.log(fname);  // men3m

// console.log(window);
// console.log(this);

// console.log(mul(4,5)); // 20
// console.log(fname);    // undefined
// console.log(age);// error:cannot access before initialization
// var fname="men3m";
// console.log(fname);    // men3m
// let age=23;
// console.log(age);

// function mul(a,b){
//     return a*b;
// }
// console.log(sub(4,5)); //  error: not a function
// var sub = function (a,b){
//     return a-b;
// }

// console.log(sub(4,5)); //  -1

// console.log(5 || 0);

// function sum(a, b) {
    // a = a || 0;
    // b = b || 0;
    // console.log("a = ", a);
    // console.log("b = ", b);
    // if(a==undefined){
    //     a=0;
    // }
    // if(b==undefined){
    //     b=0;
    // }
//     return a+b;
// }

// console.log("sum = ",sum(5));

// function greet(myFunc1, myFunc2){
//     console.log(myFunc1);
//     myFunc1("ahmed");

//     console.log(myFunc2);
//     myFunc2(
//         function (){
//             console.log("inner func");
//         }
//     );

//     console.log("welcome from iti");
// }


// function summerTraining(){
//     console.log("hello I'm summerTraining");
// }

// summerTraining("7asbat");

// function pdTrack(){
//     console.log("hello I'm pdTrack");
// }

// summerTraining();
// var returnedValue = summerTraining();
// console.log(returnedValue);
// greet(returnedValue);
// greet(summerTraining);
// console.log(fname);

// greet(summerTraining, "7asbat");

// greet(summerTraining, pdTrack);

// function (param) {  }
// greet(
//     summerTraining,
//     pdTrack
// )
// greet(
//     function (x){
//         console.log("x = ",x);
//         console.log("i'm callback1");
//     }
//     ,
//     function (y){
//         y();
//         // console.log("y = ", y);
//         console.log("i'm callback2");
//     }
// )

// String APIs
// var fname = "   WeLcOmE Iti     ";
// for(var i=0;i<fname.length;i++){
//     console.log(fname[i]);
// }

// console.log(fname.charAt(2));

// console.log(fname.IndexOf('e'));
// console.log(fname.lastIndexOf('e'));

// console.log(fname.toLowerCase());
// console.log(fname.toUpperCase());


// console.log(fname.startsWith("Wel"));
// console.log(fname.endsWith("E Iti"));

// console.log(fname.concat(", men3m"));

// console.log(fname);
// console.log(fname.trim());
// console.log(fname.trimStart());
// console.log(fname.trimEnd());


// console.log(fname.slice(2,9));

// console.log(fname.includes("WeL"));

// console.log(fname.includes("WeL", 5));

// fname = "username=men3m;password=123;email=7asbat.com";
// console.log(fname.split(";"));
// console.log(fname.split(";")[0].split("="));
// console.log(fname.split(";")[0].split("=")[0]);
// console.log(fname.split(";")[0].split("=")[1]);
// console.log(fname.split(";")[1]);
// console.log(fname.split(";")[2]);


//Array
var arr = [ 
    1, 
    true, 
    function(x,y){
        return x+y;
    },
    "men3m",
    [10,20,30]
];
console.log(arr[2](5,6));
console.log(arr[4][1]);
console.log(arr);

console.log(arr[0]);
console.log(arr[99]);

console.log(arr.length);

arr[5] = false;
console.log(arr);
console.log(arr.length);



arr.push("LOL");
arr.unshift(55);


arr.pop();
arr.shift();

arr = arr.concat([1,2,3]);

console.log(arr);
arr.reverse();
console.log(arr);


var str = arr.toString();
console.log(str);

arr =arr.join("???");
console.log(arr);

var c = "men3m";
console.log(c.split("").reverse().join(""));
arr = [10,50,3, 22,"test","hello"];
// arr.sort();
console.log(arr);
console.log("------------");
arr2 = arr.splice(2,3);
console.log(arr);  // arr after deleting elements
console.log(arr2); // deleted elements
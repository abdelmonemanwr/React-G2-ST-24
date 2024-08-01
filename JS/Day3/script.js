// function greet(name){
//     console.log("Hello ", name);
// }

// function add(a,b){
//     return a+b;
// }


// greet(fname);
// var fname = "iti";
// greet(fname);


// console.log(add(3,5));

// console.log(fname);
/*container
    temp: 10;

*/
// var temp=10; // global variable
// function sum(a,b)
// {
//     //var x = a+b;   // local variable, scope: function 
//     temp = "men3m";
//     console.log(temp); // men3m
//     return a+b;
// }
// console.log(sum(3,5)); // 8

// console.log(temp); // men3m

// var temp=10; // global variable
// function sum(a,b)
// {
//     //var x = a+b;   // local variable, scope: function 
//     var temp = "men3m";
//     console.log(temp); // men3m
//     return a+b;
// }
// console.log(sum(3,5)); // 8

// console.log(temp); // 10

////////////////////////////Object////////////////////////////

// var fname1 = "yahia";
// var fname2 = "hussien";

// var age5 = 23;
// var age7 = 21;

// key: value
// var person = {}; -> empty object

// var person = {
//     fname: "yahia",
//     lname: "ahmed",
//     age: 22,
//     gender: true,
//     address:{
//         city: "cairo",
//         country: "egypt",
//         street: "mohamed elmasry road",
//         code: "12345"
//     }
// };
// console.log(person);

// console.log(person.address.code);
// console.log(person["address"]["code"]);
// console.log(person["address"].code);
// console.log(person.address["code"]);

// var c = person.address;
// console.log(c.code);

// console.log(person);

// ways to access properties within object
// 1- dot notation
// 2- subscript notation

// // get value using dot notation
// console.log(person.fname);
// console.log(person.lname);
// console.log(person.age);
// // get value using subscript notation
// console.log(person["fname"]);
// console.log(person["lname"]);
// console.log(person["age"]);

// set value using dot notation
// person.fname = "men3m";

// person.color = "blue";
// console.log(person.color);

// console.log(person["color"]);
// var myKey = "color";
// console.log(person[myKey]);
// console.log(person["myKey"]);

// console.log(person.color);
// console.log(person.myKey);

// console.log(myKey)

// var student = {
//     st_name: "ali",
//     st_age: 25,
//     print: function (){
//         // console.log(student.st_name, student.st_age);
//         console.log(this.st_name, this.st_age);
//     }
// }

// student.print();

// console.log(st_name, st_age);



//////////////////////////Math Object/////////////////////////

// var c;
// c = Math;
// c = Math.PI;
// c = Math.sin(90*Math.PI/180);
// c = Math.max(2,3,4,5,6,7,8,5,16,17,18,19,20);
// c = Math.min(2,3,4,5,6,16,17,18,19,-20);
// c = Math.pow(2,7);
// c = Math.sqrt(25);
// c = Math.log2(64);

// c = Math.floor(5.1122);
// c = Math.ceil(5.1);
// c = Math.ceil(5.0);
// c = Math.round(5.4);

// c = Math.floor(Math.random()*100);

// +50 -> 1
// -50 -> -1
// 0   -> 0
// c = Math.sign(0)

// c = Math.trunc(5);
// console.log(c);

//////////////////////////////////////////////////

// console.log(document);

// Dom -> Document Object Model

// var element = document.getElementById("head1");
// console.log(element);

// var elements = document.getElementsByClassName("parent");
// console.log(elements[1]);

// var elements = document.getElementsByClassName("parent");
// for(var i = 0; i < elements.length; i++){
//    console.log(elements[i]);
// }

// var elements = document.getElementsByName("input");
// console.log(elements[0].value);

// var elements = document.getElementsByTagName("h1");
// console.log(elements[0].innerText);

// var elements = document.getElementsByTagName("h1");
// console.log(elements[0].innerText);

// var parent = document.getElementsByClassName("parent")[0];
// var p = parent.getElementsByClassName("content")[0];
// console.log(p.innerText);

// var elements = document.querySelectorAll("div");
// console.log(elements);

// var elements = document.querySelectorAll("div p");
// console.log(elements);

// var element = document.querySelector("div p");
// console.log(element);

// var element = document.querySelector("div p.content");
// console.log(element);


// var c;
// c = document.body;
// c = document.links;
// c = document.images;
// var parent = document.getElementsByClassName("parent")[0];
// c = parent.firstChild;
// c2 = parent.firstElementChild;
// console.log(c);
// console.log(c2);

// var parent = document.getElementsByClassName("parent")[0];
// var c = parent.lastChild;
// var c2 = parent.lastElementChild;
// console.log(c);
// console.log(c2);


// var parent = document.getElementsByClassName("parent")[0];
// var c = parent.children;
// var c2 = parent.childNodes;
// console.log(c);
// console.log(c2);

// how to change content

// var h = document.querySelectorAll("div h1#head1")[0];
// console.log(h.innerText);
// get
// var c = h.innerHTML;
// console.log(c);
//set
// h.innerText = "<h1>ITI</h1>";
// h.innerHTML = "<h6>ITI</h6>";


// how to change style

//1- Style Object
// var h = document.querySelectorAll("div h1#head1")[0];
// console.log(h.innerText);
// h.style.backgroundColor = "red";
// h.style.color = "white";
// h.style.padding = "7px";

//2- Class Name
// var h = document.querySelectorAll("div h1#head2")[0];
// console.log(h.innerText);
// h.style.color = "white";
// h.style.padding = "7px";

// console.log(h);
// h.className = "newClass";
// h.className += " newClass2";
// console.log(h);

//3- Class List

// var h = document.querySelectorAll("div h1#head1")[0];
// h.classList.add("container");
// console.log(h);
// h.classList.remove("container");
// console.log(h);
// h.classList.toggle("container");
// console.log(h);
// h.classList.toggle("container");
// console.log(h);


function show(){
    var p = document.querySelector("p");
    p.style.color = "red";
    p.innerHTML = "iti";
}
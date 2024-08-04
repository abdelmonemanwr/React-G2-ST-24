// var input = document.getElementById("input");
// function getText(){
    // var value = input.value;
    // console.log(value);
// }

// var links = document.links;
// var link = links[0];
// console.log(link.attributes);
    // console.log(link.attributes[2]);

// for(var i=0; i<link.attributes.length; i++){
//     console.log(link.attributes[i]);
// }
// console.log(link);

// console.log(link.getAttribute("target"));

// link.setAttribute("target", "_self");
// link.setAttribute("id", "link2");

// console.log(link.hasAttribute("id"));
// link.removeAttribute("id");
// console.log(link.hasAttribute("id"));


// if(link.hasAttribute("id")){
//     console.log("here");
//     link.removeAttribute("id");
// } 

// // link not exists
// if(!link.hasAttribute("id")){
//     console.log("there");
//     link.setAttribute("id", "link1");
// }
// // link exists

// var element = document.createElement("p");
// var text = document.createTextNode("helloeeofmeok");
// var c1 = element.appendChild(text);
// var c2 = element.append(text);
// console.log(c1);
// console.log(c2);
// accepts only type of node, text=>error
// "hello"

// element.innerHTML = "hello";
// console.log(element);
// element.style.color = "red";

// var elementParent = document.getElementsByClassName("extra")[0];

// elementParent.appendChild(element);



// var l = document.getElementById("input");
// console.log(l);

// var p = document.createElement("p");
// var text = document.createTextNode("github");
// p.appendChild(text);

// l.append(p);

// var comment = document.createComment("rufhwkjf");
// console.log(comment);

// ----------------------------------------------------

// console.log(window);

// var person = {
//     fname: "ali"
// }

// person.fname;  // using object name is a must
// console.log(fname); // error

// window is optional

// var openedWindow;
// function openWindow( ) {
    // window.open();
    // window.open("https://www.google.com.eg");
    // window.open("about.html");
//     openedWindow = window.open("about.html", "", "width=300, height=300");
// }
// function closeWindow( ) {
//     openedWindow.close();
// }

// function moveToWindow( ) {
//     openedWindow.moveTo(500, 500);
// }
// function moveByWindow( ) {
//     openedWindow.moveBy(-50, -50);
// }
// function resizeToWindow( ) {
//     openedWindow.resizeTo(500, 500);
// }
// function resizeByWindow( ) {
//     openedWindow.resizeBy(50, 50);
// }

// -------------------------------

//1- setTimeOut(call back function, time ms);

// function cb (){
//     console.log("set time out executed");
// }
// cb();
// console.log("------");

// setTimeout(cb, 2000);


// setTimeout(function(){
//     console.log("set time out executed using call back func");
// }, 2000);


// var myInterval = setInterval(function(){
//     console.log("set interval executed");
// }, 1000);

// setTimeout(function(){
//     clearInterval(myInterval);
// }, 5000);

// var count = 1;
// var myInterval;
// var p = document.getElementsByClassName("count")[0];
// function start(){
//     myInterval = setInterval(function(){
//         p.innerHTML = `Count = ${++count} Seconds`;
//         console.log(count);
//     }, 1000);
// }


// function stop(){
//     clearInterval(myInterval);
// }

// function reset(){
//     count = 1;
//     p.innerHTML = `Count = ${count} Seconds`;
// }

// https://localhost:5500/index/getEmployee?id=1

// console.log(location);
// var c = location;
// c = location.href;
// c = location.hostname;
// c = location.host;
// c = location.protocol;
// c = location.port;
// location.href = "http://localhost:5500/index/getEmployee?id=1";
// c = location.search;
// location.reload();
// location.assign("https://www.google.com");
// location.replace("https://www.google.com");
// console.log(c);

// location.assign("index.html");

// var c = history;
// c = history.length
// c = history.back
// c = history.forward
// console.log(c);

// function successCallBack(position){
//     console.log(position);
//     console.log(position.coords.longitude, position.coords.latitude);
//     console.log("success");
// }

// function errorCallBack(){
//     console.log("error");
// }

// navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);

// // console.log(navigator.geolocation.getCurrentPosition)



// var btn = document.getElementById("btn");
// var p = document.getElementById("pp");

// console.log(btn);
// console.log(p);


// function btnClicked(){
//     console.log("clicked");
//     // btn.innerHTML = "clicked";
// };

// function changeContent(color){
//     p.innerHTML = "new Text";
//     p.style.color = color;
// }

// fname = "mona"
// fname = 2;
// console.log(fname);

// btn.onclick = btnClicked;
// btn.onclick = changeContent;

// function cb(){
//     btnClicked();
//     changeContent();
// }
// btn.onclick = cb;
    
// btn.onclick = function(){
//     btnClicked();
//     changeContent();
// }


// ---------------Add Event Listener---------------

// btn.addEventListener("click", function(){
//     p.innerHTML = "hello ";
// });

// function cb2() { 
//     changeContent("green");
//  }
// btn.addEventListener("click", cb2);


// btn.addEventListener("click", function () { 
//     changeContent("green");
// });


// btn.addEventListener("click", function(){
//     console.log("hello");
// });

// btn.addEventListener("click", function(){
    //     console.log("bye");
    // });
    
// -----------------------------------------

// var btn = document.getElementById("btn");
// var p = document.getElementById("pp");

// function add(){
//     console.log("clicked 1");
// }

// function add2(){
//     console.log("clicked 2");
// }

// btn.addEventListener("click", add);
// btn.addEventListener("click", add2);

// btn.removeEventListener("click", add);

// setTimeout(function(){
//     btn.removeEventListener("click", add);
//     btn.removeEventListener("click", add2);
// }, 3000);

// -----------------------------------------------


function greet(e){
    // console.log("hello");
    console.log(e.target.value);
}

// var e = {
//     target:{}
// }
// greet(e);

// var btn = document.getElementById("btn");
// var inp = document.getElementById("input");

// inp.addEventListener("input", greet);
// inp.oninput = greet;


// function getText(e){
//     console.log(e);
//     console.log(e.target.value);
// }


// var btn = document.getElementById("send");
// var inp = document.getElementsByClassName("in")[0];
// var err = document.getElementById("errorMSG");

// inp.addEventListener('input', function(e){
//     // console.log(e.target.value);
//     if(e.target.value.length<5){
//         err.style.display = "block";
//         inp.style.border = "2px solid red";
//     } else {
//         err.style.display = "none";
//         inp.style.border = "2px solid green";
//     }
// });

// function login(event) { 
//     // console.log(event);
//     event.preventDefault();
//     console.log(inp.value, "logged in successfully");
// }


// function first(e){
//     console.log("first");
//     e.stopPropagation();
// }

// function second(e){
//     console.log("second");
//     e.stopPropagation();
// }

// function third(e){
//     console.log("third");
//     e.stopPropagation();

// }

// console.log(document.cookie); /// get

// set

// document.cookie = "fname=mona;"
// document.cookie = "lname=ali;"
// document.cookie = "age=23;"
// document.cookie = "country=egypt;";

// var myDate  = new Date();
// console.log("date object: ", myDate);

// c = myDate.getDate();
// console.log("getDate = ", c);

// c = myDate.getDay();
// console.log("getDay = ", c);

// c = myDate.getMonth();
// console.log("getMonth = ", c);


/* days:
sun: 0
mon: 1
tue: 2
wed: 3
thu: 4
fri: 5
sat: 6
*/ 

/** months:
jan: 0
feb: 1
mar: 2
......
dec:11
 */

// setDate

// var today = myDate.getDate();
// console.log("today = ", today);

// myDate.setDate(today + 5);
// console.log(myDate.getDate());


// document.cookie = "intern=iti;expires="+myDate;
// document.cookie = "email=iti@gmail.com;expires="+myDate;


// work as addCookie, editCookie
function setCookie(key, value, date=myDate) {
    document.cookie = key+"="+value+";expires="+date;
}

function getAllCookies() { 
    return document.cookie.split("; ");
}

function getCookie(key){
    var myCookies = getAllCookies();
    for(var i=0; i<myCookies.length; i++){
        var cookieKey = myCookies[i].split("=")[0];
        var value = myCookies[i].split("=")[1];
        if(cookieKey == key)
            return value;
    }
    return null;
}


function deleteCookie(key) {
    var value = getCookie(key);
    if(value != null){
        var exipreDate = new Date();
        exipreDate.setDate(exipreDate.getDate()-10);
        setCookie(key, value, exipreDate);
        return true;
    }
    return false;
}

function hasCookie(key) {
    return getCookie(key) != null;
    // var value = getCookie(key);
    // if(value != null){
    //     return true;
    // }
    // return false;
}


// console.log(hasCookie("fname"));
// console.log(getCookie("email"));

// var state = deleteCookie("fname");
// if(state){
//     console.log("cookie has been deleted succesfully");
// } else {
//     console.log("cookie not found");
// }


// setCookie("summer_trainning", "8");
// console.log(getCookie("intern"));

// if           then  
// line1 by     line2
// error    not executed

// before handling
// console.log("hello world");
// throw "error!!";
// console.log("hello");

/// error handling

// try catch

// after handling

// try {
//     var a = 16, b = 0;
//     if(b == 0) 
//         throw "you can't divide by zero";
//     var div = a/b;
//     console.log(div);
// } 
// catch (error) {
//     console.log(error);
// }
// console.log("test");


// try {
//     // open connection on database
//     var a = 16, b = 8;
//     if(b == 0) 
//         throw "you can't divide by zero";
//     var div = a/b;
//     console.log(div);
//     //close database connection
// } 
// catch (error) {
//     console.log(error);
//  } 
// finally{
//     console.log("finally1");
//     //close database connection    // do it here
// }

//note : will not generate error, but it should be executed in the finally block

// console.log("finally1");    xxx 
//close database connection    xxx




// function sum(a, b){
//     return a+b;
// }

// function sum(a, b){
//     console.log(arguments);
//     return a+b;
// }

// function sum(a, b){
//     for(var i=0; i<arguments.length; i++){
//         console.log(arguments[i]);
//     }
//     return a+b;
// }

function sum(a, b){
    try {
        if(arguments.length!=2){
            throw {
                message: "please provide 2 arguments only",
                code: 400,
                status: "failed"
            }
        }
        return a+b;
    } catch (error) {
        console.log(error.message)
    }
}

var c;
// c = sum(10, 20, 30, 40, "mona");
c = sum(1, 120);
console.log("sum = ", c);
// let value = "iti";
// let person = {
//     fname: value,
//     lname: "monofia",
//     age: 22
// }
// console.log(person);

// let fname = "iti";
// let person = {
//     [fname]: "st",
//     lname: "monofia",
//     age: 22
// }
// console.log(person);


// let myName = "men3m";
// console.log(myName);

// let fname = "iti";
// let age = 25;
// let person = {
//     fname,
//     age,  // sugar syntax
//     lname,
// }
// console.log(person);


// let fname = "iti";
// let age = 25;
// let person = {
//     fname,
//     age,  // sugar syntax
//     lname: "monofia",
//     display: function(){
//         console.log("hello from iti");
//     },
//     display2(name){
//         console.log("hello from iti 2", name);
//     }

// }
// console.log(person);
// person.display2("mona")



// let fname = "iti";
// let age = 25;
// let person = {
//     fname,
//     age,  // sugar syntax
//     lname: "monofia",
//     color: "red",
//     display2(name){
//         console.log("hello from iti 2");
//     }
// }
// console.log(person);

// let keys = Object.keys(person);
// console.log(keys);

// keys.forEach((key)=>console.log(person[key]));


// let values = Object.values(person);
// console.log(values);
// keys.forEach((key)=>console.log(person[key]));


// let result = Object.entries(person);
// console.log(result);



//////////////////////////////////////////////

// setTimeOut Execution


// function first(){
//     console.log("first");
//     second();
//     for(let i=0; i<1000;i++)
//         console.log("end of first");
// }

// function second() {
//     setTimeout(()=>console.log("second"), 2000);
//     console.log("test");
// }

// first();


// setTimeout(()=>console.log("first"), 2000);
// setTimeout(()=>console.log("second"), 1000);
// setTimeout(()=>console.log("third"), 0);
// console.log("fourth");


// function first(){
//     console.log("first");
//     second();
// }

// function second() {
//     setTimeout(()=>console.log("second"), 2000);
//     console.log("test");
// }

// first();
// for(let i=0; i<1000;i++)
//     console.log("end of first");
// console.log("go");


// var x;
// var y;
// var z;
// setTimeout(()=>x=35, 2000);
// setTimeout(()=>console.log(x, y, z), 2000);
// setTimeout(()=>y=45, 2000);
// setTimeout(()=>z=55, 2000);

/////////////////////////////////////////
// Promises

// send request
// setTimeOut(()=>{//apply logic to the response}, 2000)






// let products;
// setTimeout(function(){
//     // first request: get all products
//     products = [
//         {id: 1, name: "laptop", price:50000},
//         {id: 2, name: "IPhone", price:55000},
//         {id: 3, name: "Watch", price:20000},
//     ];
// }, 3000)


// let product;
// setTimeout(() => {
//     // second request: get product
//    product = products[1];
// }, 2000);

// let price;
// setTimeout(() => {
//     // third request: get price
//     price = product.price;
//     console.log(price);
// }, 1000);





// setTimeout(function(){
//     // first request: get all products
//     let products = [
//         {id: 1, name: "laptop", price:50000},
//         {id: 2, name: "IPhone", price:55000},
//         {id: 3, name: "Watch", price:20000},
//     ];
//     let product = [ price='20'];;
//     setTimeout(() => {
//         // second request: get product
//         // product = products[1];
//         setTimeout(() => {
//             // third request: get price
//             let price = product.price;
//             console.log(price);
//         }, 1000);
//     }, 2000);

//     
// }, 3000)


// fulfilled
// failure
// let mypromise = new Promise(function(resolve, reject){})


// function men3mPromise(myFunc){
//     myFunc(
//         ()=>console.log("cb1"), 
//         ()=>console.log("cb2")
//     );
// }

// let p = new men3mPromise(function(resolve, reject){
//     console.log(resolve, reject);
//     resolve();
//     reject();
//     console.log("hello from iti");
// });


// function greet(myFunc){
//     myFunc(
//         ()=>console.log("cb1"), 
//         ()=>console.log("cb2")
//     );
// }

// let flag = false;
// greet(function (resolve,reject) { 
//     flag?resolve():reject();
//  })


// let flag = false;
// let mypromise = new Promise((resolve, reject)=>{
//     flag?
//     resolve("data retreived successfully"):
//     reject("An error occurs during fetching data");
// });

// mypromise
//     .then((data)=>{
//         console.log(data)
//     })
//     .catch((errorMessage)=>{
//         console.log(errorMessage);
//     });

// console.log(mypromise);

// function getAllProducts(){
//     var myPromise = new Promise(function (resolve, reject) {
//         var productList;
//         setTimeout(()=>{
//             productList = [ 
//                 {id: 1, name: "laptop", price:50000}, 
//                 {id: 2, name: "IPhone", price:55000}, 
//                 {id: 3, name: "Watch", price:20000}, 
//             ];
//             if(productList){
//                 resolve(productList);
//             }else {
//                 reject("Failed to get all products");
//             }
//         }, 3000)
//     });
//     return myPromise;
// }

// function getProduct(productList, pid){
//     return new Promise(function (resolve, reject) {
//         setTimeout(()=>{
//             // console.log(productList);
//             // console.log(pid);
//             let product = productList.find((p)=>p.id == pid);
//             if(product){
//                 resolve(product);
//             } else {
//                 reject("Failed to get product");
//             }
//         }, 2000);
//     })
// }

// function getProductPrice(product){
//     return new Promise((resolve, reject)=>{
//         let price = product.price;
//         if(price){
//             resolve(price);
//         } else {
//             reject("Failed to get price");
//         }
//     });
// }

// getAllProducts()
//     .then((data)=>{
//         console.log(data)
//     }).catch(function(errMessage){
//         console.log(errMessage)
//     })

// getProduct(1)
//     .then((product)=>{
//         console.log(product);
//     })
//     .catch((errorMessage)=>{
//         console.log(errorMessage);
//     });


// let myProduct = {id: 2, name: "IPhone", price:55000};
// getProductPrice(myProduct)
//     .then((price)=>{
//         console.log(price);
//     })
//     .catch((errorMessage)=>{
//         console.log(errorMessage);
//     })



//// callback hell

// getAllProducts()
//     .then((productList)=>{
//         getProduct(0)
//             .then((product)=>{
//                 getProductPrice(product)
//                     .then((price)=>{
//                         console.log(price);
//                     })
//                     .catch((error)=>{
//                         console.log(error)
//                     })
//             })
//             .catch((error)=>{
//                 console.log(error)
//             })
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

// getAllProducts()
//     .then((productList) => getProduct(productList, 3))
//     .then((product)=>{ return getProductPrice(product); })
//     .then(price => console.log(`price = ${price}`))
//     .catch((errorMessage)=>console.log(errorMessage))


// async function execute(){
//     try{
//         let productList = await getAllProducts();
//         console.log(productList);
//         let product = await getProduct(productList, 2);
//         console.log(product);
//         let price = await getProductPrice(product);
//         console.log(`price = ${price}`);
//     } catch(errorMessage){
//         console.log(errorMessage);
//     }
// }

// execute();
    


// let response = fetch("https://jsonplaceholder.typicode.com/users");

// console.log(response)


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>{
//         return response.json(); // promise
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((errorMessage)=>{console.log(errorMessage)});


async function execute() { 
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        // console.log(response);  // promise
        let users = await response.json();
        console.log(users);
    }
    catch(errorMessage){
        console.log(errorMessage);
    }
 }

 execute();
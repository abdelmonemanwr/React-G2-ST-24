// var span = document.getElementById("rangeVal");
// var inp = document.querySelector("input[type=range]");

// inp.addEventListener("input", function(){
//     span.textContent = inp.value;
// });

// const audio = document.getElementById("audio") 

// function playAudio() { 
//     audio.play();
// }
// function pauseAudio() { 
//     audio.pause();
//  }
// function stopAudio() { 
//     // audio.stop(); // xxxxx
//     // audio.preventDefault(); // xxxxx
    
//     audio.load();

//     // also valid 
//     // audio.pause();                     
//     // audio.currentTime = 0;
//  }

// function muteAudio() { 
    
//     // audio.muted = audio.muted?false:true;
//     audio.muted = !audio.muted;
//  }

// var key = "username";
// var value = "a7med";

// var person = {
//     fname : "ahmed"
// }

// console.log(person.time);


// person.age = 22;
// person.key = value;
// console.log(person);

// function SetData(key, value){
//     localStorage.setItem(key, value);
//     // localStorage[key] = value;
    
//     // localStorage.key = value;  // ????
// }

// SetData("arr", [1,2,3]);
// SetData("st", "iti");

// function GetData(key){
//     console.log(localStorage.getItem(key));
//     // console.log(localStorage[key]);
//     // var x = localStorage.key(0);// get key
//     // console.log(localStorage[x]); 
// }

// // GetData("st");

// function RemoveItem(key){
//     localStorage.removeItem(key);
// }

// // RemoveItem("st");

// function Clear(){
//     localStorage.clear();
// }

// Clear();


// session

// function SetData(key, value){
//     sessionStorage.setItem(key, value);
// }

// SetData("arr", [1,2,3]);
// SetData("st", "iti");

// function GetData(key){
//     console.log(sessionStorage.getItem(key));
// }

// GetData("st");

// function RemoveItem(key){
//     sessionStorage.removeItem(key);
// }

// // RemoveItem("arr");
// console.log("test");

// function Clear(){
//     sessionStorage.clear();
// }

// Clear();



navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    // console.log("yees");
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
}

function error(e) {
    // console.log("no");
  alert(e.message);
}

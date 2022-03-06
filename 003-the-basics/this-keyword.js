// Global Context
'use strict'; //object global equals undefined
function globalContext() {
    console.log(this); // object window or undefined in strict mode
}
globalContext(); 

// Implicit Binding (Object Method)

let tanuchiky =  {
    airlines : "Dodo",
    miles : 1000,
    greeting : function () {
        console.log(`Hello you have ${this.miles} miles`);
        console.log(this);
    }
}
tanuchiky.greeting();

// Implicit Binding (New Binding)

function Tamagocki (miles) {
    this.miles = miles;
    this.message = function () {
        console.log("The miles is " + this.miles);
    }
}

new Tamagocki(10).message();
new Tamagocki(20).message();



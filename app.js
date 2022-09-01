'use strict';

let username = prompt("What's your name?");
let message

if (username== "Monica"){
  message= "Hello, master! "}
else {message= "Welcome, "+username+"!"};
;

let answer= prompt("Are you a night owl or an early bird?");
let response;

if (answer == "early bird"){
    response= " (｡◕‿◕｡) "
}
else{response=" (∪｡∪)｡｡｡zzz " };

document.write(message);

document.write(response);


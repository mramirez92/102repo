'use strict';

let username = prompt("What's your name?");
  let message;
  
function greeting(){ 
  if (username== "Monica"){
  message= "Hello, master! "}
  else {message= "Welcome, "+username+"!"};
  document.write(message)};

  greeting(message);

 


  function goodbye(){
    document.write("Thanks for visiting, "
    +username+"!")
   };

  let hours; 

   function kitty(){
      let hours=prompt("How many hours of sleep did you get?");
      for (let n=0; n<hours && hours<9; n+=1)
    {
      document.write('<img src="https://media2.giphy.com/media/l5Ixyi91ENW1N2MyAc/giphy.gif?cid=6c09b95231v3v475n3sg8yj150dshf0s8sjgw4t8u4y5pf7o&rid=giphy.gif&ct=salt=" alt="kitty" class="kitty"/>')
    }
    }

let guess;

function annoying(){
    while (guess !== 'sheep'){
    guess= prompt ('What rhymes with sleep? (hint it goes baaa)')
  }
};


annoying(guess);
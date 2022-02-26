

document.getElementById("button").addEventListener("click", function() {

  //get text
  let textBoxContent = document.getElementById("item").value;

  //create the element
  let ul = document.getElementById('input');
  let li = document.createElement('li');
  let item = document.getElementById('item');

  li.appendChild(document.createTextNode(item.value));

let remainingGuess = 10;
let remainingLetters = 4;

//the game loop
while (remainingLetters > 0) {

  //get a guess from the player
  var guess = item.value;
  if (guess.length !== 1) {
    console.log("Please enter a single letter.");
  } else {
    //update the game with the Guess

      if(item.value == "r"){
        document.getElementById('letter-one').innerHTML = "r";
        remainingLetters--;
        remainingGuess--;
      }else if (item.value == "o"){
        document.getElementById('letter-two').innerHTML = "o";
        remainingLetters--;
        remainingGuess--;
      } else if(item.value == "c"){
        document.getElementById('letter-three').innerHTML = "c";
        remainingLetters--;
        remainingGuess--;
      }else if (item.value == "k"){
        document.getElementById('letter-four').innerHTML = "k";
        remainingLetters--;
        remainingGuess--;
      } else {
        remainingGuess--;
        console.log(remainingGuess);
      }


      }
    }
  }


  //clear Textarea
  document.getElementById("item").value = "";
})

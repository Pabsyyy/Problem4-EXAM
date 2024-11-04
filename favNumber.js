function favNumber() {
  let faveNumber = 12;
  let guess = prompt("Guess the Favorite Number");
   while (guess != faveNumber) {
        if (guess < faveNumber) {
           alert("Too low, try again.")
        } else {
           alert("Too high, try again.")
        }
        enter = prompt("Guess the Favorite Number.");
    }
    alert("Correct, you guessed the favorite number.");
}
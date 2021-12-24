var randomNumber1 =  "images/dice" + Math.floor(Math.random() * 7) + ".png";
var randomNumber2 =  "images/dice" + Math.floor(Math.random() * 7) + ".png";
 


/*use this when you want to drill into the tag and change an element */
document.querySelector(".img1").setAttribute("src", randomNumber1)
document.querySelector(".img2").setAttribute("src", randomNumber2)




if(randomNumber1 > randomNumber2){
/*use this when you just need to change the text of the tag*/
  document.querySelector("h1").innerHTML = "Player 1 wins";
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML ="Draw";
}

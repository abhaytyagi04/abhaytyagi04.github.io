var p1 =  document.getElementById("p1");
var p2 = document.getElementById("p2");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var input = document.querySelector("input")
var resetButton =  document.getElementById("reset")
var p = document.querySelector("p");
var gamechange = document.querySelector("p span");
var p1score = 0 ;
var p2score = 0;
var gameover = false ; 
var winningscore = 5;

p1.addEventListener ("click" , function(){
    if (!gameover){
        p1score++ ;
        if(p1score === winningscore){
            score1.classList.add("winner");
            gameover = true;
        }
        score1.textContent = p1score;
    }
  
});

p2.addEventListener("click" , function(){
if (!gameover){
    p2score++;
if(p2score === winningscore){
    score2.classList.add("winner");
    gameover = true ;
  
}
    score2.textContent = p2score;
}

});
resetButton.addEventListener("click", function(){
    reset();
});
function reset(){
    p1score = 0; 
    p2score = 0;
    score1.textContent = p1score;
    score2.textContent = p2score;
    score1.classList.remove("winner");
    score2.classList.remove("winner");
    gameover = false ;
};

input.addEventListener("change",function(){
  gamechange.textContent = input.value ;
  winningscore = Number(input.value );
  reset();
})
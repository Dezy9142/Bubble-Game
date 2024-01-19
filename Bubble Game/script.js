
// Make Maker function
function makeBubble(){
    var clutter="";
for(var i=1;i<=168;i++){
    var rn=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`              
}
document.querySelector('#panelbottom').innerHTML=clutter
}

// Run Timer Function
var timer=60;
function runTimer(){
  var timeIntv=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timer').textContent=timer
        }
        else{
             clearInterval(timeIntv);
             document.querySelector('#panelbottom').innerHTML=`<h1>Game Over !</h1>`
        }

    },1000)
}

var randNum=0;
function getNewHit(){
    randNum=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=randNum
}

var score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}

document.querySelector("#panelbottom").addEventListener("click",function(details){
    var clickedNum=Number(details.target.textContent);
    if(randNum===clickedNum){
        increaseScore();
        makeBubble();
        getNewHit()

    }
})

getNewHit();
runTimer();
makeBubble();
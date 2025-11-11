let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
let btn4=document.getElementById("btn4")
let btn5=document.getElementById("btn5")
let btn6=document.getElementById("btn6")
 sc1=12
 sc2=5

let score1=document.getElementById("score1")

let score2=document.getElementById("score2")
score1.textContent=sc1
score2.textContent=sc2

function plus1(){
    sc1+=1
   
    score1.textContent=sc1
}
function plus2(){
    sc1+=2
    
    score1.textContent=sc1

}
function plus3(){
    sc1+=3
    
    score1.textContent=sc1
   
}
function plus4(){
    sc2+=1
   
    score2.textContent=sc2
    
}
function plus5(){
    sc2+=2
    
    score2.textContent=sc2

}
function plus6(){
    sc2+=3
   
    score2.textContent=sc2
}
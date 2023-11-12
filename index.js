function gerand(min,max){
    return Math.floor(Math.random()*(max-min+1))
           +min;}


var rN1= gerand(1,6);
var str="images\\dice"+ rN1.toString()+".png";
document.querySelector(".img1").setAttribute("src",
str);

var rN2=gerand(1,6);
var str1="images\\dice"+ rN2.toString()+".png";
document.querySelector(".img2").setAttribute("src",
str1);

if(rN1==rN2)
document.querySelector("h1").innerHTML="DRAW";
else if(rN1>rN2)
document.querySelector("h1").innerHTML="Jai Wins";
else
document.querySelector("h1").innerHTML="Tiny_Wins";


/*player 1*/
var randomnum1=Math.random();
randomnum1=randomnum1*6;
randomnum1=Math.floor(randomnum1)+1;

var randomdiceimage="dice"+randomnum1+".jpg";
var randomimagesource= randomdiceimage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);


/*player 2*/
var randomnum2=Math.random();
randomnum2=randomnum2*6;
randomnum2=Math.floor(randomnum2)+1;

var randomdiceimage="dice"+randomnum2+".jpg";
var randomimagesource= randomdiceimage;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource);

/*condition*/
if(randomnum1>randomnum2)
{
    document.querySelector("h1").innerHTML="Player 1 Won";
}
else if(randomnum1===randomnum2)
{
    document.querySelector("h1").innerHTML="It's a draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Won";
}




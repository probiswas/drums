for(var i=0;i<7;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){soundPlay(this.innerHTML)} );
}

function soundPlay(key)
{
  buttonAnimation(key);
  if(key==="w")
  {
  var a = new Audio("sounds/tom-1.mp3");
  a.play();
  }
  else if(key==="a")
  {var a = new Audio("sounds/tom-2.mp3");
  a.play();}
  else if(key==="s")
  {var a = new Audio("sounds/tom-3.mp3");
  a.play();}
  else if(key==="d")
  {var a = new Audio("sounds/tom-4.mp3");
  a.play();}
  else if(key==="k")
  {var a = new Audio("sounds/crash.mp3");
  a.play();}
  else if(key==="l")
  {var a = new Audio("sounds/kick-bass.mp3");
  a.play();}
  else if(key==="j")
  {var a = new Audio("sounds/snare.mp3");
  a.play();}
}
document.addEventListener("keypress", function(){soundPlay(event.key);buttonAnimation(event.key)});

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

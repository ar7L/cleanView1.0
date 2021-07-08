
var arr=[];
var slider = document.querySelector('.slider');
var slides = document.querySelector('.slides');
var slide = document.querySelector('.slide');
var slideAll = document.getElementsByClassName('slide');
var wdt = slider.clientWidth;
for(sld of slideAll){
  sld.style.width  = wdt + "px";
  console.log(wdt);
}
var n = document.querySelectorAll('.slide').length;
var intr = slider.dataset.delay;
var now=0 , gap = -20;
for(let i='1';i<='4';++i){
  arr.push(document.getElementById(i));
}
for(let i=0;i<arr.length;++i){
  arr[i].addEventListener('click',function(){
    now = i;
    let x = i*(-400),  y = "";
    y += x + "px";
    setW();
    let w = document.querySelector('.first');
    w.style.marginLeft=y;
    //document.write(y);
  })
}
setW();
var nxt = document.getElementById('next');
nxt.addEventListener('click',function(){
  now++;
  if(now>=n){
    now = 0;
  }
  setW();
  let x = (now*(gap));
  let y = x+"%";
  document.querySelector('.first').style.marginLeft=y;
  //document.write(y);
});

var prv = document.getElementById('prev');
prv.addEventListener('click',function(){
  now--;
  if(now<0){
    now = n-1;
  }
  setW()
  let x = (now*(gap));
  let y = x+"%";
  document.querySelector('.first').style.marginLeft=y;
  //document.write(y);
});

function setW(){
    let p = document.querySelector("#percent");
    let col = p.dataset.color;
    p.innerHTML=now%n +1;
    p.style.backgroundColor = col;
    p.style.width = ((now%n+1)/n)*100+"%";
}


// setInterval(function(){
//   now++;
//   setW();
//   if(now>=n){
//     now=0;
//   }
//   let x = (now*gap)
//   console.log((now+1)/n);
//   let y=x+"%";
//   document.querySelector('.first').style.marginLeft=y;
  
// },intr);
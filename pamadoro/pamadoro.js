// Setting Objests
 let timer =document.querySelector(".timer");
 let startBtn =document.querySelector(".start");
 let startNewBtn=document.getElementById('startNew');
 let ispused=false; 
let skip =false;

//detecting the working pamadoro teqnique
 let working,Break;
let  teqnique =val();
if(teqnique=="big"){
  working=50*60;
  Break=10*60;
}
else if(teqnique=="small"){
  working=25*60;
  Break=5*60;
  console.log("small");
}






// start working...


 startBtn.onclick=function(){
  //detecting the working pamadoro teqnique
 let working,Break;
 let  teqnique =val();
 if(teqnique=="big"){
   working=50*60;
   Break=10*60;
 }
 else if(teqnique=="small"){
   working=25*60;
   Break=5*60;
   console.log("small");
 }
 
    if(startBtn.innerHTML=="Start")
   {
    document.getElementById('audio').pause();
    document.getElementById('audio').currentTime=0;
    startBtn.innerHTML="Stop";
     countDown(working,Break);
    
   }
   // puseing timer  
     else if(startBtn.innerHTML=="Stop"){
        ispused=true;
       startBtn.innerHTML="Resume";
       startNewBtn.style.display="block";
    
   } 
   //countineuing the timer 
   else if(startBtn.innerHTML=="Resume"){
    ispused=false;
    startBtn.innerHTML="Stop";
    startNewBtn.style.display="none";
   }
    else if(startBtn.innerHTML=="Take Breake"){
        skip=true; 
    }
 };
  // Starting New Pamadoro

  startNewBtn.onclick=function(){
    window.location.reload();
  };






















//functions







 function countDown(duration,Break){
    
        let m;
        let s;
        countDown1=setInterval( function (){
             m =parseInt(duration/60);
             s =parseInt(duration%60);
            m= m < 10 ? `0${m}`: m;
            s= s < 10 ? `0${s}`: s;
            timer.innerHTML =`${m} : ${s}`;
            if(!ispused){
            if(--duration < 0){
                document.body.style.backgroundImage="url('../imgs/pexels-angelo-duranti-3512848.jpg')";
                clearInterval(countDown1);
                startBtn.innerHTML="Take Breake";
                document.getElementById('audio').play();
                duration=8;
              countDownBetween=setInterval(function(){
              // time Between
              if(!ispused){
                
               if(--duration < 0 ||skip){
                clearInterval(countDownBetween);
                startBtn.innerHTML="Stop";
                document.getElementById('audio').pause();
                document.getElementById('audio').currentTime=0;
                skip=false;

                // TAKING BREAKE
                 duration=Break;
                countDown2=setInterval(function(){
                    m =parseInt(duration/60);
                    s =parseInt(duration%60);
                   m= m < 10 ? `0${m}`: m;
                   s= s < 10 ? `0${s}`: s;
                   timer.innerHTML =`${m} : ${s}`;
                  // Break duration
                   if(!ispused){
                   if(--duration < 0){
                    document.getElementById('audio').play();
                    clearInterval(countDown2);
                    document.body.style.backgroundImage="url('../imgs/compute-ea4c57a4.png')";
                     startBtn.innerHTML= "Start";
                }
              }
                  },1000);          
            }
          }
              },1000);                     
           }
        }
        },1000);

 }
 function stop(interval){
    interval.stopI

 }


 // hover 
 function hover (){
  if(startBtn.innerHTML=="Stop"){
    startBtn.onmouseover=function(){
      startBtn.style.background="red";
    };
    startBtn.onmouseleave=function(){
      startBtn.style.background="black";  
    }
  }
    else {
      startBtn.onmouseover=function(){
        startBtn.style.background="green";
      };
      startBtn.onmouseleave=function(){
        startBtn.style.background="black";  
      }
    }
 }
 // select value
 function val(){
  d=document.getElementById('teqnique').value;
  return d;
 }
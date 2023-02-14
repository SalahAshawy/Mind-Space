// Setting Objects 
let addBtn = document.querySelector(".fa-circle-plus");
let listItem = document.querySelector(".fa-list-check");
let stopWatchItem = document.querySelector(".fa-stopwatch");
let frogItem = document.querySelector(".fa-frog");  
let noteItem = document.querySelector(".fa-note-sticky");  
let stopWatchSpan=document.querySelector(".stop-watch");
let counterSpan=document.querySelector(".counter");
let todoSpan=document.querySelector(".todo");
let notesSpan=document.querySelector(".notes");

// pressing to show featuerse
addBtn.onclick=function(){
    if(stopWatchItem.style.display=="block"){
        stopWatchItem.style.display="none";
        listItem.style.display="none";
        frogItem.style.display="none";
        noteItem.style.display="none";
    }
    else{
   stopWatchItem.style.display="block";
   listItem.style.display="block";
   frogItem.style.display="block";
   noteItem.style.display="block";
}
};

// hover on items to show details


listItem.onclick=function(){
   
  window.open("todo/todo.html","_self");
};
stopWatchItem.onclick=function(){
    
  window.open("pamadoro/pamadoro.html",'resizable=0');
};

frogItem.onclick=function(){
  console.log("asa");
window.open("counter/counter.html","_self");
};

noteItem.onclick=function(){
  console.log("asa");
window.open("notes/notes.html","_self");
};






// Functions 
   function hoverProcess(item,span){
item.onmouseover=function(){
        span.style.display="inline";
       };
       item.onmouseleave=function(){
           span.style.display="none";
          };
   };

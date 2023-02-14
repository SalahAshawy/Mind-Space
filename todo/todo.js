// Settings variables
let input =document.querySelector(".add-task input");
let count =document.querySelector(".count");
let comCount =document.querySelector(".completed-count");
let addBtn =document.querySelector(".plus");
let taskContainer =document.querySelector(".tasks");
let allDiv =document.querySelector(".all");
let deleteAll =document.querySelector(".delet-all");
let finishAll =document.querySelector(".finish-all");
let tasksArr=[];



addBtn.onclick =function (){
  
    if(input.value ===''){
       // console.log("no value");
        swal({
            title: 'Oops...',
            text: 'Pleas Enter a Task',
            icon: 'error'
        }
        );
        
    }

    else{
       // tasksArr.push(input.value);
        localStorage.setItem(input.value,"task");
        let noTaskMassage =document.querySelector(".no-tasks-massage");
        create(input.value,0);
        console.log( localStorage.getItem(input.valueb));
       
        
        if(document.body.contains(document.querySelector('.no-tasks-massage'))){
            //removing no task msg
            noTaskMassage.remove();
        }
        //creating the task box and give it the input value
        
     
        if(taskContainer.childElementCount>0){
            deleteAll.style.display='block';
            finishAll.style.display='block';
        }
       
       

         //add all to task container
         
         // empting the input
         input.value='';
         input.focus();
         creatTasksCount();
        

    }
};
    
  document.addEventListener('keypress',function(e){
            if(e.key==='Enter'){
                addBtn.click();
            }
        });
    

deleteAll.onclick=function () {
    let toDoArray= document.querySelectorAll('.tasks .task-box');
    toDoArray.forEach(toDo=>{
    let txt=toDo.textContent.slice(0,-6);

  //  console.log(txt);
     toDo.remove();
     deleteAll.style.display='none';
     finishAll.style.display='none';
     localStorage.removeItem(txt);
    }); 
    creatnoTaskmsg();
 };
 finishAll.onclick=function () {
    let toArray= document.querySelectorAll('.tasks .task-box');
    toArray.forEach(toDo=>{
    toDo.classList.add('finished');

    }); 
 };
 
 
 
 
 
 
 

     document.addEventListener('click',function (e){
    if(e.target.className =='delet'){
       
       let textt= e.target.parentNode.textContent;
       textt=textt.slice(0,-6);
        console.log(textt);
        localStorage.removeItem(textt);
     e.target.parentNode.remove();
     
     if(taskContainer.childElementCount==0){
        creatnoTaskmsg();
        deleteAll.style.display='none';
        finishAll.style.display='none';
       
       
     }
    }
    if(e.target.classList.contains('task-box')){
        e.target.classList.toggle("finished");
        console.log(e.target.className);
        localStorage.setItem(e.target.innerHTML.slice(0,-32),e.target.className)
    
       }
       creatTasksCount();


});




//-----------------------MY Functions--------------------------------------------------
function creatnoTaskmsg(){
    let noTaskMassageElement =document.createElement('span');
    let noTaskText=document.createTextNode('No Tasks to view');
    noTaskMassageElement.appendChild(noTaskText);
    noTaskMassageElement.className="no-tasks-massage";
    taskContainer.appendChild(noTaskMassageElement);

}
 function creatTasksCount(){
    count.innerHTML=document.querySelectorAll('.tasks .task-box').length; 
    // console.log(document.querySelectorAll('.task-box').length); 
    comCount.innerHTML=document.querySelectorAll('.tasks .finished').length;  
}



function create(inputval,state){
    let taskBox=document.createElement('span');
    if(state==='task-box finished')taskBox.className='task-box finished';
    else taskBox.className='task-box';
    let text=document.createTextNode(inputval);
    taskBox.appendChild(text);
    //CREATING THE delet span and apend it to the main span
    let deletBtn =document.createElement('span');
    let deleteTxt =document.createTextNode('delete');
    deletBtn.appendChild(deleteTxt);
    taskBox.appendChild(deletBtn);
    //give delete a class
    deletBtn.className='delet';
    taskContainer.appendChild(taskBox);
}
function loadSave(){
    let arr=[];
    let arrState=[];
  //  localStorage.removeItem('task');
    if(localStorage.length>0){
    for(let [key,value] of Object.entries(localStorage)){
        if(value=="task"){
        arr.push(key);
        key=key+"<";
        arrState.push(localStorage.getItem(key));

       // console.log(arr.length);
        }

}     
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    console.log(arrState[i]);
    create(arr[i],arrState[i]);

   }
      
        if(arr.length){
        let noTaskMassage =document.querySelector(".no-tasks-massage");
        noTaskMassage.remove();
        deleteAll.style.display='block';
        finishAll.style.display='block';
        }
    }else console.log('hhh');
    
}
window.onload=function (){
    input.focus();
     loadSave();

};

//localStorage.clear();



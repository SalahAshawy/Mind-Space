let input =document.querySelector(".add-titel input");
let addBtn =document.querySelector(".plus");
let taskContainer =document.querySelector(".titels");
let deleteAll =document.querySelector(".delet-all");







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
       let inputvalue =" "+input.value;
       localStorage.setItem(inputvalue,"titel");
        let noTaskMassage =document.querySelector(".no-titels-massage");
        create(inputvalue);
       
       
        
        if(document.body.contains(document.querySelector('.no-titels-massage'))){
            //removing no task msg
            noTaskMassage.remove();
        }
        //creating the task box and give it the input value
        
     
        if(taskContainer.childElementCount>0){
            deleteAll.style.display='block';
            
        }
        
         
     // empting the input
     input.value='';
     input.focus();
        }
        
    };



    document.addEventListener('click',function (e){
        if(e.target.className =='delet'){
           
           let textt= e.target.parentNode.textContent;
           textt=textt.slice(0,-4);
             console.log(textt);
             localStorage.removeItem(textt);
         e.target.parentNode.remove();
         
         if(taskContainer.childElementCount===0){
            creatnoTaskmsg();
            deleteAll.style.display='none';
           
           
         }
        }
       
           
    
    
    });
    document.addEventListener('click',function (e){
        if(e.target.className =='inc'){
        //  console.log(e.target.parentNode.lastChild.innerHTML);  
          e.target.parentNode.lastChild.innerHTML++;
          localStorage.setItem(e.target.parentNode.innerHTML.slice(24,-112),e.target.parentNode.lastChild.innerHTML);

            console.log(e.target.parentNode.innerHTML.slice(24,-112));
        }else if(e.target.className =='dec'){
            
            if( e.target.parentNode.lastChild.innerHTML>0){
            e.target.parentNode.lastChild.innerHTML--;
            localStorage.setItem( e.target.parentNode.innerHTML.slice(24,-112),e.target.parentNode.lastChild.innerHTML);
             console.log(e.target.parentNode.innerHTML.slice(0,-110)); 
            // console.log(localStorage.getItem(e.target.parentNode.lastChild.innerHTML)); 

            
            }
              
          }
           
    
    
    });
    deleteAll.onclick=function () {
        let toDoArray= document.querySelectorAll('.titels .task-box');
        toDoArray.forEach(toDo=>{
         toDo.remove();
         deleteAll.style.display='none';
        // localStorage.clear();
        }); 
        creatnoTaskmsg();
     };




    document.addEventListener('keypress',function(e){
        if(e.key==='Enter'){
            addBtn.click();
        }
    });


    deleteAll.onclick=function () {
        let toDoArray= document.querySelectorAll('.titels .task-box');
        toDoArray.forEach(toDo=>{
        let txt=toDo.textContent.slice(0,-4);
    
       console.log(txt);
         toDo.remove();
         deleteAll.style.display='none';
         localStorage.removeItem(txt);
        }); 
        creatnoTaskmsg();
     };
    











//fuctions                    

    function create(inputval,numCount){
        if(numCount==null)numCount=0;
        let taskBox=document.createElement('span');
        taskBox.className='task-box';
        let taskContent =document.createElement('span');
        let text=document.createTextNode(inputval);
        taskContent.appendChild(text);
        taskContent.className="task-text";
        taskBox.appendChild(taskContent);
        //CREATING THE delet span and apend it to the main span
        let numBtn =document.createElement('span');
        let numTxt =document.createTextNode(numCount);
        let deletBtn =document.createElement('span');
        let deleteTxt =document.createTextNode('X');
        let incBtn =document.createElement('span');
        let incTxt =document.createTextNode('+');
        let decBtn =document.createElement('span');
        let decTxt =document.createTextNode('-');
        
        numBtn.appendChild(numTxt);
        deletBtn.appendChild(deleteTxt);
        incBtn.appendChild(incTxt);
        decBtn.appendChild(decTxt);
        
        
        taskBox.appendChild(deletBtn);
        taskBox.appendChild(incBtn);
        taskBox.appendChild(decBtn);
        taskBox.appendChild(numBtn);
       
        //give delete a class
        numBtn.className='num';
        deletBtn.className='delet';
        incBtn.className='inc';
        decBtn.className='dec';
       
        taskContainer.appendChild(taskBox);
    }
      




    function creatnoTaskmsg(){
        let noTaskMassageElement =document.createElement('span');
        let noTaskText=document.createTextNode('No Titels to view');
        noTaskMassageElement.appendChild(noTaskText);
        noTaskMassageElement.className="no-titels-massage";
        noTaskMassageElement.style.color="#888";
        taskContainer.appendChild(noTaskMassageElement);
    
    }


    
    function loadSave(){
        let arr=[];
        let arrNums=[];
      //  localStorage.removeItem('task');
        if(localStorage.length>0){
        for(let [key,value] of Object.entries(localStorage)){
            if(value=="titel"){
            arr.push(key);
            key=key+"<";
            arrNums.push(localStorage.getItem(key));
          //  console.log(arr.length);
            }
            
    }
           for(let i=0;i<arr.length;i++){
            create(arr[i],arrNums[i]);

           }
            if(arr.length){
            let noTaskMassage =document.querySelector(".no-titels-massage");
            noTaskMassage.remove();
            deleteAll.style.display='block';
            }
           
        }else console.log('hhh');
        
    }
    

    window.onload=function (){
        input.focus();
         loadSave();
    
    };
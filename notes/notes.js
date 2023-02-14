let input =document.querySelector(".add-titel input");
let addBtn =document.querySelector(".plus");
let taskContainer =document.querySelector(".titels");
let deleteAll =document.querySelector(".delet-all");
let  noteBody =document.querySelector(".note-body");







addBtn.onclick =function (){
  
    if(noteBody.value ==''){
       // console.log("no value");
        swal({
            title: 'Oops...',
            text: 'Pleas Enter a Note',
            icon: 'error'
        }
        );
        
    }

    else{
        
       // tasksArr.push(input.value);
       let inputvalue ="  "+input.value;
       if(inputvalue.length>35){
        inputvalue=inputvalue.slice(0,35);
       }
       
      // noteBody.value=noteBody.value.replaceAll("\n","<br>\r\n");
       localStorage.setItem(inputvalue,noteBody.value);
       
        let noTaskMassage =document.querySelector(".no-titels-massage");
        create(inputvalue,noteBody.value);
       
       
        
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
     noteBody.value="";
     input.focus();
        }
        
    };



    document.addEventListener('click',function (e){
        if(e.target.classList.contains('fa-trash')){
           let textt= e.target.parentNode.firstChild.textContent;
          
             console.log(textt);
             localStorage.removeItem(textt);
         e.target.parentNode.remove();
         
         if(taskContainer.childElementCount===0){
            creatnoTaskmsg();
            deleteAll.style.display='none';
           
           
         }
        }
       
           
    
    
    });
   
    
    

  




    document.addEventListener('keypress',function(e){
        if(e.key==='Enter'){
          document.querySelector(".note-body").focus();   
           // addBtn.click();
        }
    });


    deleteAll.onclick=function () {
        let toDoArray= document.querySelectorAll('.titels .task-box');
        toDoArray.forEach(toDo=>{
        let txt=toDo.firstChild.textContent;
    
        console.log(txt);
         toDo.remove();
         deleteAll.style.display='none';
         localStorage.removeItem(txt);
        }); 
        creatnoTaskmsg();
     };
    











//fuctions                    

    function create(inputval,noteBody){
        if(inputval===null)inputval="";
        let taskBox=document.createElement('span');
        let noteTitel=document.createElement('span');
        taskBox.className='task-box';
        let text=document.createTextNode(inputval);
        noteTitel.appendChild(text);
        taskBox.appendChild(noteTitel);
        //CREATING THE delet span and apend it to the main span
        let noteElement =document.createElement('span');
        let noteElementTxt =document.createTextNode(noteBody);
        noteElement.appendChild(noteElementTxt);
        let deletBtn =document.createElement('span');
        let deleteTxt =document.createTextNode('');
        
        
        
        deletBtn.appendChild(deleteTxt);
       
        
        
        taskBox.appendChild(noteElement);
        taskBox.appendChild(deletBtn);
       
       
        //give delete a class
       
        deletBtn.className='fa-solid fa-trash';
        noteTitel.className='note-titel-cotent';
        noteElement.className='note-body-content';
        deletBtn.classList.add("delet");
       
       
        taskContainer.appendChild(taskBox);
    }
      




    function creatnoTaskmsg(){
        let noTaskMassageElement =document.createElement('span');
        let noTaskText=document.createTextNode('No Notes to view');
        noTaskMassageElement.appendChild(noTaskText);
        noTaskMassageElement.className="no-titels-massage";
        noTaskMassageElement.style.color="#888";
        taskContainer.appendChild(noTaskMassageElement);
    
    }


    
    function loadSave(){
        let arr=[];
        let arrBody=[];
      //  localStorage.removeItem('task');
        if(localStorage.length>0){
        for(let [key,value] of Object.entries(localStorage)){
            if(key.charAt(1)==" "){
            arr.push(key);
            arrBody.push(localStorage.getItem(key));
          //  console.log(arr.length);
            }
            
    }
           for(let i=0;i<arr.length;i++){
            create(arr[i],arrBody[i]);

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
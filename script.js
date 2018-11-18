const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-countSpan')
const uncheckedCountSpan = document.getElementById('unchecked-countSpan')
const container = document.getElementById("container")
const te = document.getElementById("test")

 

 let count = 0
 let uncheckedSpan = 0
 

 function newTodo() {
  const toDo =prompt(" " , "walk the dog")
    if(toDo != null) {
	   
	
	   var li= document.createElement('li');
	   list.appendChild(li);
	   const ID = "number" + count
       li.setAttribute("id",ID)
       li.innerHTML = " " + toDo + " "
	   count++
	   itemCountSpan.innerHTML =count;
	   uncheckedSpan++
	   uncheckedCountSpan.innerHTML = uncheckedSpan;
	    uncheck(ID)
	} else {
		prompt(" " , "enter vaild value ")
	    
   }
 }
  
   
   
   function uncheck(Id) {
   
     
        var done = false 
        const task = document.getElementById(Id).textContent
		const taskID = document.getElementById(Id)
		
	    taskID.onclick = function () {
	                             if( done === false){
	                             var string = String(task)
		                         var result = string.strike()
		                         taskID.innerHTML = result
								 uncheckedSpan--
								 uncheckedCountSpan.innerHTML = uncheckedSpan;
								 done = true
								 } else {
									 list.removeChild(taskID)
									 count--
									 itemCountSpan.innerHTML =count;
                                 }
		
       } 
	 
	}
   

		
		
		
		
		
		
		
		
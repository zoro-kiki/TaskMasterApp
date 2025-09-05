// console.log("Hello from your new brain,Zaara!");

let tasks =[];
const addTaskButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');



console.log(addTaskButton);
console.log(taskInput);

function addNewTask() {
     if (taskInput.value.trim() === "") {
        return; // Stop if the input is empty
    }

    tasks.push({ text: taskInput.value, completed: false });
    taskInput.value = "";
    // console.log(tasks);
    saveTasks();
    renderTasks();
    // const taskText = taskInput.value;
    // const newListItem = document.createElement('li');

    

    // const checkbox = document.createElement('input');
    // checkbox.type = 'checkbox';

    // const taskTextSpan = document.createElement('span');
    // taskTextSpan.textContent = taskText;

    // const deleteButton = document.createElement('button');
    // deleteButton.textContent ='Delete';
    // deleteButton.className = 'delete-btn'; 

    // // newListItem.textContent = taskText;

    // newListItem.appendChild(checkbox);
    // newListItem.appendChild(taskTextSpan);
    //  newListItem.appendChild(deleteButton);

    // checkbox.addEventListener('change',function(){
    //     if(this.checked){
    //         newListItem.classList.add('completed');
    //     }else{
    //        newListItem.classList.remove('completed');
    //     }
    // });
    
    // deleteButton.addEventListener('click', function () {
    //     newListItem.remove();
    // });
    
    
    // taskList.appendChild(newListItem);
    
    //   console.log(taskInput.value);
    //   const list = document.createElement('li');
    //   console.log(list);
    //   console.log(list.textContent);
    //   console.log(list.appendChild);
}
 function saveTasks(){
    const tasksString= JSON.stringify(tasks);
    localStorage.setItem('myTasks',tasksString);
 }

function renderTasks() {
   taskList.innerHTML = "";

   tasks.forEach(function(taskObject,index){
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskObject.text;
   
    const newListItem = document.createElement('li');
    const checkbox = document.createElement('input');
    
     const deleteButton = document.createElement('button');

     checkbox.type = 'checkbox';
    
    deleteButton.textContent ='Delete';
    deleteButton.className = 'delete-btn'; 
     

     if (taskObject.completed === true) {
    newListItem.classList.add('completed');
    checkbox.checked = true;
}

checkbox.addEventListener('change',function(){
        // if(this.checked){
        //     newListItem.classList.add('completed');
        // }else{
        //    newListItem.classList.remove('completed');
        // }
         tasks[index].completed=this.checked;
         saveTasks();
         renderTasks();
    });

     deleteButton.addEventListener('click', function () {
        // newListItem.remove();
        tasks.splice(index,1);
        saveTasks();
        renderTasks();
    });
    // newListItem.textContent = taskText;

    newListItem.appendChild(checkbox);
    newListItem.appendChild(taskTextSpan);
     newListItem.appendChild(deleteButton);

    
    
   
    
    
    taskList.appendChild(newListItem);
   });
}

addTaskButton.addEventListener('click', addNewTask);




taskInput.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        addNewTask();
    }
});



 const savedTasks = localStorage.getItem('myTasks');

 if(savedTasks){
    tasks = JSON.parse(savedTasks);
 }

 renderTasks();



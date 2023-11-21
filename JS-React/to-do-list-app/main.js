//ref link : https://stackoverflow.com/questions/71539703/how-to-put-the-edited-contents-on-to-do-list
//plz check : todo-app.with-localStorage.html in the directory

let taskInput = document.getElementById("task-text");
let taskListUL = document.querySelector(".list-task ul");
let arrayItem = localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [];

function addTask(e){
    e.preventDefault();

    let inputValue= taskInput.value;
    if(!inputValue){
        alert('Please enter a valid task');
        return
    }
    arrayItem.push(taskInput.value);
    localStorage.setItem('taskList', JSON.stringify(arrayItem));

    showNewTask(inputValue);
    taskInput.value = "";
}

function showNewTask(taskText){
    //console.log(taskText);
    let newLiTag = document.createElement("li");

    //tasktext
    let newSpan = document.createElement("span");
    newSpan.innerHTML = taskText;
    newLiTag.appendChild(newSpan);
  
    //edit button
    let editButton = document.createElement("button");
    editButton.className ="edit";
    editButton.innerHTML = "Edit";
    newLiTag.appendChild(editButton);

    //delete button
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "Delete";
    newLiTag.appendChild(deleteButton);

    deleteButton.addEventListener("click", function() {
        //this.parentElement.remove();
        deleteTask(deleteButton);
    })

    //li append UL
    taskListUL.appendChild(newLiTag);
}

document.getElementById("add-task-form").addEventListener("submit", addTask);

function deleteTask(param){
    console.log(param, 'param');
    let selectTask = param.closest("li");
    taskListUL.removeChild(selectTask);
}

//edit
taskListUL.addEventListener("click", function(e){
    //console.log(e.target.classList.contains('edit'));
    let editTask = e.target.classList.contains('edit');
    let updateTask = e.target.classList.contains("update");
    let deleteTask = e.target.classList.contains("delete");

    if(editTask){
        let val = e.target.parentElement.firstChild.innerHTML;
        e.target.parentElement.innerHTML = `
        <input type="text" value=${val} name="task">
        <button type="sbumit" class="update">Update</button>
        `
    }

    if(updateTask){
        let val = e.target.previousElementSibling.value;
        e.target.parentElement.innerHTML = `
          <span>${val}</span>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        `
    }

    if(deleteTask){
        e.target.parentElement.remove();
        let removeItem = arrayItem.filter((item) => {
            //console.log(item, e.target.parentElement.firstChild.innerHTML)
            return item !== e.target.parentElement.firstChild.innerHTML
        });
        localStorage.setItem("taskList", JSON.stringify(removeItem));
    }
})

function getExistingTask(){
   let taskAvailable = JSON.parse(localStorage.getItem('taskList')) || [];
   taskAvailable.forEach(element => {
    showNewTask(element);
   }); 
}
getExistingTask();
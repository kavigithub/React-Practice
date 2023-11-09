let listName = ['kaisudoia', 90];

localStorage.setItem('user', JSON.stringify(listName));

let showName = document.querySelector('.to-do-list');

showName.innerHTML = JSON.parse(localStorage.getItem('user'));


const ul = document.querySelector('ul');
const input = document.getElementById('item');

let arrayItem = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function addTask(param){
    const li = document.createElement('li');
    li.innerHTML = `<p>${param} <button class="delete">X</button></p>`;
    ul.appendChild(li);
}

//arrayItem.forEach(element => add(element))
arrayItem.forEach(addTask);
//let delSingleItem = document.querySelectorAll('.delete');


function deleteTaks(){
    const deleteButtons = document.querySelectorAll('.delete'); // Get all delete buttons

    deleteButtons.forEach((item) => {
        item.addEventListener('click', (event)=>{
            event.preventDefault();
                console.log(event.target, 'event.target');
                let match = event.target.parentElement.firstChild.textContent.trim();
               /*  const index = arrayItem.indexOf(match);
                console.log(index);
                //if(arrayItem.includes(match)){
                if (index > -1) {    
                    event.target.parentElement.parentElement.remove();
                    arrayItem.splice(index, 1);
                    localStorage.setItem('items', JSON.stringify(arrayItem));
                    console.log(arrayItem);
                } */

                //ECMAScript 6 code
                event.target.parentElement.parentElement.remove();
                arrayItem = arrayItem.filter((item) => item !== match)
                localStorage.setItem('items', JSON.stringify(arrayItem));

            })
    })
}

deleteTaks();

function add(){
    if (input.value !== '') {
        //console.log(input.value)
        arrayItem.push(input.value);
        localStorage.setItem('items', JSON.stringify(arrayItem));
        addTask(input.value);
        deleteTaks();
        input.value='';
        } else{
            alert("Please enter a task");
        }
     
        console.log(arrayItem);
}

function del(){
    localStorage.clear();
    ul.innerHTML = '';
    arrayItem = [];
}
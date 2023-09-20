let inputVal = document.querySelector('.input-item');
let addItemBtn = document.getElementById('add-item-btn');
let filterVal = document.querySelector('.fliter-item');
let listSection = document.querySelector('.item-list-section');
let clearBtn = document.querySelector('.clear-all-btn');

function getInputVal() {
    let shoppingTxt = inputVal.value; 
    let createDiv = document.createElement('p');
    createDiv.classList.add("shopping-item");
    createDiv.innerHTML=`${shoppingTxt} <button class="delete">X</button>`;
    listSection.append(createDiv);
    inputVal.value = '';
}

addItemBtn.addEventListener('click', getInputVal);

function filterShoppingList(e) {
    let filterInputVal = e.target.value;
    let list = document.querySelectorAll('.shopping-item');
    list.forEach((item) => {
        let itemName = item.firstChild.textContent;
       /*  console.log(itemName.indexOf(filterInputVal)); */
        if(itemName.indexOf(filterInputVal) != -1){
            console.log(true)
            item.style.display = 'block'
        } else{
            console.log(false)
            item.style.display = 'none';
        }
    })
}

filterVal.addEventListener('input', filterShoppingList);

//clear list
function clearList(){
    if(document.querySelectorAll('.shopping-item').length > 0){
        document.querySelectorAll('.shopping-item').forEach((item) => {
         return  item.remove();
        })
    }
}
clearBtn.addEventListener('click',clearList);

//delete Item;  
document.addEventListener("click", function(e){
    const target = e.target; 
    const hasClass = target.classList.contains('delete');
   if(hasClass){
        let parentNode = target.parentNode;
        listSection.removeChild(parentNode);
    }
  });




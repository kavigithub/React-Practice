let apiURL = 'https://random-data-api.com/api/v2/users';
let loadUserBtn = document.getElementById('generate');
let spinner = document.querySelector('.spinner');

function loadRadomUser() {
   try {
        spinner.classList.remove("hidden");
        fetch(apiURL).then((response) =>  response.json()).then((data) => {
            spinner.classList.add('hidden');
            displayUser(data);
        });
   } catch (error) {
    throw new Error('data now found');
   }
}

function currentAge(year) {
    let spiltBirthDate = year.split('-');
    let getYear = spiltBirthDate[0];
    let getDate = new Date();
    let curYear = getDate.getFullYear().toString();
    let getAge = curYear - getYear;
    console.log(getAge);
    return getAge;
}

function displayUser(param) {
    console.log(param);
   let getUser = document.querySelector('#user');
   getUser.innerHTML = `<div class="flex justify-between">
   <div class="flex">
     <img
       class="w-48 h-48 rounded-full mr-8"
       src='${param.avatar}'
     />
     <div class="space-y-3">
       <p class="text-xl">
         <span class="font-bold">Name: </span>${param.first_name} ${param.last_name}
       </p>
       <p class="text-xl">
         <span class="font-bold">Email: </span> ${param.email}
       </p>
       <p class="text-xl">
         <span class="font-bold">Phone: </span>${param.phone_number}
       </p>
       <p class="text-xl">
         <span class="font-bold">Location: </span> ${param.address.city}
       </p>
       <p class="text-xl"><span class="font-bold">Age: </span>${currentAge(param.date_of_birth
        )}</p>
     </div>
   </div>
 </div>`;
 
}

loadUserBtn.addEventListener('click', loadRadomUser);
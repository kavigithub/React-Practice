const Base_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json';

const amoutInput = document.querySelector('.amount input');
const dropdowns = document.querySelectorAll('.dropdown select');

for(let select of dropdowns){
    //console.log(select);
    for(let currency in countryList){
       let newOption = document.createElement('option');
       newOption.value = currency;
       newOption.textContent = currency;
        if(select.name === 'from' && currency === 'USD'){
            newOption.selected = "selected";
        } else if(select.name === 'to' && currency === 'INR'){
            newOption.selected = "selected";
        }
        select.appendChild(newOption)
    }

    select.addEventListener('change', function(event){
        updateFlag(event.target)
    });
}

function updateFlag(element){
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let imgElm = element.parentElement.querySelector('img');
    imgElm.src = newSrc;
}
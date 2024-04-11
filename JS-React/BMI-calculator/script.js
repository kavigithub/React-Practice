const form = document.querySelector('form');
console.log(form);

form.addEventListener("submit", bmiForm);

function bmiForm(e){
    e.preventDefault();

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('results');

    if( height === "" || isNaN(height) || height < 0){
        result.innerHTML = "please enter valid height in numbers"
    }else if(weight === "" || isNaN(weight) || weight < 0){
        result.innerHTML = "please enter valid weight in numbers"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let typeOfWeight = '';
        if(bmi < 18.6){
            typeOfWeight += 'Under Weight'
        } else if(bmi > 18.6 && bmi < 24.9) {
            typeOfWeight += "Normal Range"
        } else if(bmi <= 24.9){
            typeOfWeight += "Overweight "
        }

        result.innerHTML = `<span>${bmi}</span> <span>your body is in ${typeOfWeight}</span>`
    }
}
let buttons = document.querySelectorAll('.button');
let bodyPg = document.getElementsByTagName("BODY")[0];

buttons.forEach((button) => {
    button.addEventListener("click", changeColor);
})

function changeColor(e) {
    console.log(e.target.id);
    switch (e.target.id) {
        case "blue":
            bodyPg.style.backgroundColor = e.target.id;
            break;
        case "red":
            bodyPg.style.backgroundColor = e.target.id;
            break;
        case "yellow":
            bodyPg.style.backgroundColor = e.target.id;
            break;
        case "grey":
            bodyPg.style.backgroundColor = e.target.id;
            break;
        default:
            bodyPg.style.backgroundColor = "white";
    }
}
let quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris",
    type: "radio",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
    type: "radio",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
    type: "radio",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1912", "1905", "1923", "1931"],
    correctAnswer: "1912",
    type: "radio",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
    type: "radio",
  },
  {
    question: "Choose the web development tools.",
    options: ["Visual Studio Code", "Photoshop", "Sublime Text", "Eclipse"],
    correctAnswers: ["Visual Studio Code", "Sublime Text"],
    type: "checkbox",
  },
  {
    question: "Which programming languages are dynamically typed?",
    options: ["JavaScript", "Python", "Java", "C++"],
    correctAnswers: ["JavaScript", "Python"],
    type: "checkbox",
  },
  {
    question: "Water boils at 100 degrees Celsius.",
    options: [true, false],
    correctAnswers: true,
    type: "radio",
  },
  {
    question: "Cats are mammals?",
    options: [true, false],
    correctAnswers: true,
    type: "radio",
  },
  {
    question: "The Earth is flat?",
    options: [true, false],
    correctAnswers: false,
    type: "radio",
  },
];

let questionSection = document.getElementById("questions");
let optionBox = document.querySelector(".option-section");
let pointPlaceholder = document.querySelector('.points');
let count = 0;
let points = 0;
let checkInput;

//for initial print UI
/* questionSection.innerHTML = `<h4>${quizQuestions[0].question}</h4>`;
let options = quizQuestions[0].options;
for (const element of options) {
  let formCheck = document.createElement("div");
  formCheck.classList.add("form-check", "mb-2");
  formCheck.innerHTML = `<input id=${element} name="${quizQuestions[0].type}-name" type=${quizQuestions[0].type} class="form-check-input ${quizQuestions[0].type}-input" value=${element}>
  <label class="form-check-label" for=${element}>
      ${element}
  </label>`;
  optionBox.appendChild(formCheck);
}
 */
showHTML(0);
//getSelectedInput(0);

//this will create and show the question and ans option on UI
function showHTML(arrIndex) {
  optionBox.innerHTML = "";
  questionSection.innerHTML = `<h4>${quizQuestions[arrIndex].question}</h4>`;
  let options = quizQuestions[arrIndex].options;
  for (const element of options) {
    let formCheck = document.createElement("div");
    formCheck.classList.add("form-check", "mb-2");
    formCheck.innerHTML = `<input id="${element}" name="${quizQuestions[arrIndex].type}-name" type="${quizQuestions[arrIndex].type}" value="${element}" class="form-check-input ${quizQuestions[arrIndex].type}-input">
    <label class="form-check-label" for="${element}">
        ${element}
    </label>`;
    optionBox.appendChild(formCheck);
  }

  // Add change event listeners to all radio buttons
  getSelectedInput(arrIndex);
}

function getSelectedInput(arrIndex) {
  let radioInputs = document.querySelectorAll(
    `.${quizQuestions[arrIndex].type}-input`
  );
  radioInputs.forEach((input) => {
    input.addEventListener("change", () => {
      checkInput = document.querySelector(
        `.${quizQuestions[arrIndex].type}-input:checked`
      );
      console.log(`Checked Value : ${checkInput.value}`);

      return `${checkInput.value}`
     /*  if (checkInput !== null) {
        console.log(`Checked Value : ${checkInput.value}`);
      } else {
        console.log("you have not selected any value");
      } */
    });
  });
}

//track the right answer
function rightAnswer(arrIndex) {
console.log(checkInput.value, 'selected value');
  console.log(quizQuestions[arrIndex].correctAnswer, 'right answer');
  if(checkInput.value === quizQuestions[arrIndex].correctAnswer){
    points += 10;
  } else {
    if(points <= 0){
      points = 0;
    } else {
      points -= 10;
    }

  }
}


////submit answer
function submitAnswer(e) {
  e.preventDefault();
  if (count === quizQuestions.length - 1) {
    document.write("End Game");
  } else {
    rightAnswer(count);
    showHTML(++count);
    console.log(count, 'after submit')
    pointPlaceholder.innerHTML = `Your score is ${points} out of ${quizQuestions.length * 10}`;

  }
}
document.getElementById("quizForm").addEventListener("submit", submitAnswer);

/* let numb = [100, 200, 400, 700, 900];
document.querySelector('.result').innerHTML = numb[0];

function submitAnswer(e){
  e.preventDefault();
  document.querySelector('.result').innerHTML = `${numb[count]}`;
  count++;
  console.log(count);
}
document.getElementById('quizForm').addEventListener('submit', submitAnswer); */

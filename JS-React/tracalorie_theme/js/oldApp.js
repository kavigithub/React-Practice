class CalorieTracker {
    constructor() {
      ///initial level when page load
      this._calorieLimit = 2800;
      this._totolCalories = 0;
      this._meals = [];
      this._workouts = [];
  
      this._displayCalorieLimit(); //want to show on initial level and only when user change in form not called in render
      this._displayCaloriesTotal();
      this._displayCalorieConsumed();
      this._displayCalarieBurned();
      this._displayCalariesRemaining();
      this._displayCaloriesProgress();
    }
  
    //Public Method...Public API which you can use outside of the class
    addMeals(meal) {
      this._totolCalories += meal.calories;
      this._meals.push(meal);
      this._render();
    }
  
    addWorkout(workout) {
      this._totolCalories -= workout.calories;
      this._workouts.push(workout);
      this._render();
    }
  
    //Private methods
    _displayCaloriesTotal() {
      const totalCaloryElm = document.getElementById("calories-total");
      totalCaloryElm.innerHTML = this._totolCalories;
    }
  
    _displayCalorieLimit() {
      const colorieLimitElm = document.getElementById("calories-limit");
      colorieLimitElm.innerHTML = this._calorieLimit;
    }
  
    _displayCalorieConsumed() {
      const calaryConsumeElm = document.getElementById("calories-consumed");
  
      let calaryConsumeTotal = this._meals.reduce((previousVal, currentVal) => {
        return previousVal + currentVal.calories;
      }, 0);
      calaryConsumeElm.innerHTML = calaryConsumeTotal;
    }
  
    _displayCalarieBurned() {
      const calaryBurnElm = document.getElementById("calories-burned");
      let calaryBurnTotal = this._workouts.reduce((prevVal, curVal) => {
        return curVal.calories - prevVal;
      }, 0);
      calaryBurnElm.innerHTML = calaryBurnTotal;
    }
  
    _displayCalariesRemaining() {
      const calaryRemainingElm = document.getElementById("calories-remaining");
      let calorieRemainTotal = this._calorieLimit - this._totolCalories;
      const progressElm = document.getElementById("calorie-progress");
  
      calaryRemainingElm.innerHTML = calorieRemainTotal;
  
      if (calorieRemainTotal <= 0) {
        calaryRemainingElm.parentElement.parentElement.classList.remove(
          "bg-light"
        );
        calaryRemainingElm.parentElement.parentElement.classList.add("bg-danger");
        progressElm.classList.add("bg-danger");
        progressElm.classList.remove("bg-success");
      } else {
        calaryRemainingElm.parentElement.parentElement.classList.add("bg-light");
        calaryRemainingElm.parentElement.parentElement.classList.remove(
          "bg-danger"
        );
        progressElm.classList.remove("bg-danger");
        progressElm.classList.add("bg-success");
      }
    }
  
    _displayCaloriesProgress() {
      const progressElm = document.getElementById("calorie-progress");
      const percetage = (this._totolCalories / this._calorieLimit) * 100;
      const width = Math.min(percetage, 100);
      progressElm.style.width = `${width}%`;
    }
  
    _render() {
      //its while change the value after you fill the form and add in dom
      this._displayCaloriesTotal();
      this._displayCalorieConsumed();
      this._displayCalarieBurned();
      this._displayCalariesRemaining();
      this._displayCaloriesProgress();
    }
  }
  
  class Meal {
    constructor(name, calories) {
      this.name = name;
      this.calories = calories;
      this.id = Math.random().toString(16).slice(2); //this will create Math.random().toString(16)
    }
  }
  
  class Workout {
    constructor(name, calories) {
      this.name = name;
      this.calories = calories;
      this.id = Math.random().toString(16).slice(2);
    }
  }
  
  /* let tracker1 = new CalorieTracker();
  console.log("Before adding any meals or workouts");
  const afternoonMeal = new Meal('Roti', 300);
  const afternoonLunch = new Meal('green vegitable', 150);
  tracker1.addMeals(afternoonMeal);
  tracker1.addMeals(afternoonLunch);
  
  const workoutWalk = new Workout('Walk', 200);
  tracker1.addWorkout(workoutWalk);
  
  console.log(`Total Calories: ${tracker1._totolCalories}`);
  console.log(tracker1); */
  
  class App {
    constructor() {
      this._tracker = new CalorieTracker();
      console.log(this);
      document.getElementById("meal-form").addEventListener("submit", this._newMeal.bind(this));
      document.getElementById("workout-form").addEventListener("submit", this._newWorkout.bind(this))
    }
  
    _newMeal(e) {
      e.preventDefault();
      const name = document.getElementById("meal-name");
      const calories = document.getElementById("meal-calories");
  
      if (name.value === "" || calories.value === "") {
        alert("All fields are required!");
        //why do we return statement over here?
        /* The return statement in this code is used to stop the execution of the function if the user does not enter a value for the name or calories field. This prevents the function from continuing to execute and potentially causing an error.
          By returning from the function early, the code can avoid performing unnecessary operations and ensure that the user is prompted to enter a value for both fields. This helps to ensure that the data entered by the user is valid and complete. */
        return;
      }
  
      const meal = new Meal(name.value, +calories.value);
      this._tracker.addMeals(meal);
  
      name.value = "";
      calories.value = "";
      
      const collapseMeal = document.getElementById("collapse-meal");
      const bsCollapse = new bootstrap.Collapse(collapseMeal, {
          toggle: false
        });
    }
  
    _newWorkout(e) {
      e.preventDefault();
      const workoutName = document.getElementById('workout-name');
      const workoutCalories = document.getElementById('workout-calories');
      if(workoutName.value === "" || workoutCalories.value === "") {
          alert ("Please fill in all the details");
          return;
      }
      const workout = new Workout(workoutName.value, +workoutCalories.value);
      this._tracker.addWorkout(workout);
      workoutName.value = "";
      workoutCalories.value = "";
  
      const collapseWorkout = document.getElementById("collapse-workout");
      const bsCollapse = new bootstrap.Collapse(collapseWorkout, {
          toggle: false
        })
    }
  }
  
  const app = new App(); //will run the consturctor of App
  
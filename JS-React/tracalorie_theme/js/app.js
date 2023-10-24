class CalorieTracker {
  constructor() {
    ///initial level when page load
    this._calorieLimit = Storage.getCaloryLimit();
    this._totolCalories = Storage.getTotalCalory();
    this._meals = Storage.getMeal();
    this._workouts = Storage.getWorkout();

    this._displayCalorieLimit(); //want to show on initial level (by default)and only when user change in form not called in render
    this._displayCaloriesTotal();
    this._displayCalorieConsumed();
    this._displayCalarieBurned();
    this._displayCalariesRemaining();
    this._displayCaloriesProgress();

    document.getElementById('limit').value = this._calorieLimit;
  }

  //Public Method...Public API which you can use outside of the class
  addMeals(meal) {
    this._totolCalories += meal.calories;
    this._meals.push(meal);
    console.log(this._meals);
    Storage.updateTotalCalories(this._totolCalories)
    Storage.setMeal(meal);
    this._displayNewMeal(meal);
    this._render();
  }

  addWorkout(workout) {
    this._totolCalories -= workout.calories;
    this._workouts.push(workout);
    Storage.updateTotalCalories(this._totolCalories);
    Storage.setWorkout(workout);
    this._displayNewWorkout(workout);
    this._render();
  }

  removeMeal(id){
     const index = this._meals.findIndex((meal) => meal.id === id);
      if(index !== -1){
        const meal = this._meals[index];
        this._totolCalories -= meal.calories;
        Storage.updateTotalCalories(this._totolCalories);
        this._meals.splice(index, 1)
        Storage.removeMeal(id)
        this._render();
      }
     console.log(this._meals);
  }

  removeWorkout(id){
    const index = this._workouts.findIndex((workout) => workout.id === id);
    if(index !== -1){
      const workout = this._workouts[index];
      this._totolCalories += workout.calories;
      //delete
      this._workouts.splice(index, 1);
      this._render();
    }
  }

  resetTrackcolorie(){
    this._totolCalories = 0;
    this._meals = [];
    this._workouts = [];
    Storage.clearItem();
    this._render();
  }

  displayDailyLimitSet(limit){
    this._calorieLimit = limit;
    Storage.setCaloriesLimit(limit);
    this._displayCalorieLimit();
    this._render();
  }

  loadItem(){
    this._meals.forEach((item) => this._displayNewMeal(item));
    this._workouts.forEach((workout) => this._displayNewWorkout(workout));
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

  _displayNewMeal(meal){
    const mealCard = document.getElementById('meal-items');
    const createMealCard = document.createElement('div');
    createMealCard.classList.add('card', 'my-2');
    createMealCard.setAttribute('data-id', meal.id);
    createMealCard.innerHTML = `<div class="card-body">
    <div class="d-flex align-items-center justify-content-between">
      <h4 class="mx-1">${meal.name}</h4>
      <div
        class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5"
      >
      ${meal.calories}
      </div>
      <button class="delete btn btn-danger btn-sm mx-2">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </div>`;
  mealCard.appendChild(createMealCard);
  }

  _displayNewWorkout(workout){
    const workoutCard = document.getElementById('workout-items');
    const createWorkoutCard = document.createElement('div');
    createWorkoutCard.classList.add('card','my-2');
    createWorkoutCard.setAttribute('data-id', workout.id);
    createWorkoutCard.innerHTML = `<div class="card-body">
    <div class="d-flex align-items-center justify-content-between">
      <h4 class="mx-1"> ${workout.name}</h4>
      <div
        class="fs-1 bg-secondary text-white text-center rounded-2 px-2 px-sm-5"
      >
        ${workout.calories}
      </div>
      <button class="delete btn btn-danger btn-sm mx-2">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </div>`;
  workoutCard.appendChild(createWorkoutCard);
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

class Storage {
  static getCaloryLimit(defaultCalorieLimit = 2500) {
      let calaryLimit;
      if(localStorage.getItem('calaryLimit') === null){
        calaryLimit = +defaultCalorieLimit;
      } else {
        calaryLimit = JSON.parse(+localStorage.getItem('calaryLimit'))
      }
      return calaryLimit;
  }

  static setCaloriesLimit(defaultCalory){
    localStorage.setItem('calaryLimit', defaultCalory);
  }

  static getTotalCalory(defaultTotalCalorie = 0){
    let calaryTotal;
    if(localStorage.getItem('calaryTotal') === null){
      calaryTotal = +defaultTotalCalorie;
    } else {
      calaryTotal = JSON.parse(+localStorage.getItem('calaryTotal'))
    }
    return calaryTotal;
  }

  static updateTotalCalories(calorie){
    localStorage.setItem('calaryTotal', calorie)
  }

  static getMeal(){
    let meals;
    if(localStorage.getItem('meals') === null){
      meals = [];
    } else {
      meals = JSON.parse(localStorage.getItem('meals'))
    }
    return meals
  }

  static setMeal(meal){
    console.log(meal);
    let getMeals = this.getMeal();
    getMeals.push(meal);
    localStorage.setItem('meals', JSON.stringify(getMeals))
  }

  static removeMeal(id){
    let getMealList = this.getMeal();
    getMealList.forEach((item, index) => {
      if(item.id === id){
        getMealList.splice(index, 1)
      }
    })
    localStorage.setItem("meals", JSON.stringify(getMealList));
  }

  static getWorkout(){
    let workout;
    if(localStorage.getItem('workout') === null){
      workout = [];
    } else {
      workout = JSON.parse(localStorage.getItem('workout'));
    }
    return workout;
  }

  static setWorkout(workout){
    const getWorkouts = this.getWorkout();
    getWorkouts.push(workout);
    localStorage.setItem('workout', JSON.stringify(getWorkouts));
  }

  static removeWorkout(id){
    let getWorkoutList = this.getWorkout();
    getWorkoutList.forEach((item, index) => {
      if(item.id === id){
        getWorkoutList.splice(index, 1);
      }
    });
    localStorage.setItem('workout', JSON.stringify(getWorkoutList));
  }

  static clearItem(){
    localStorage.clear();

    /* localStorage.removeItem('meals');
    localStorage.removeItem('workout');
    localStorage.removeItem('calaryTotal'); */
  }

}

class App {
  constructor() {
    this._tracker = new CalorieTracker();
    console.log(this);
    this._addEventListner();
    this._tracker.loadItem();
  }

  _addEventListner(){
    document.getElementById("meal-form").addEventListener("submit", this._newItem.bind(this, 'meal'));
    document.getElementById("workout-form").addEventListener("submit", this._newItem.bind(this, 'workout'));
    document.getElementById("meal-items").addEventListener("click", this._removeItem.bind(this, 'meal'));
    document.getElementById("workout-items").addEventListener('click', this._removeItem.bind(this, 'workout'));
    document.getElementById("filter-meals").addEventListener("keyup", this._filterItems.bind(this, 'meal'));
    document.getElementById("filter-workouts").addEventListener("keyup", this._filterItems.bind(this, 'workout'));
    document.getElementById("reset").addEventListener('click', this._reset.bind(this));
    document.getElementById("limit-form").addEventListener("submit", this._setDailyLimit.bind(this));
  }

  _newItem(type, e) {
    e.preventDefault();
    const name = document.getElementById(`${type}-name`);
    const calories = document.getElementById(`${type}-calories`);

    if (name.value === "" || calories.value === "") {
      alert("All fields are required!");
      //why do we return statement over here?
      /* The return statement in this code is used to stop the execution of the function if the user does not enter a value for the name or calories field. This prevents the function from continuing to execute and potentially causing an error.
        By returning from the function early, the code can avoid performing unnecessary operations and ensure that the user is prompted to enter a value for both fields. This helps to ensure that the data entered by the user is valid and complete. */
      return;
    }

    if(type === 'meal'){
        const meal = new Meal(name.value, +calories.value);
        this._tracker.addMeals(meal);
    } else {
        const workout = new Workout(name.value, +calories.value);
        this._tracker.addWorkout(workout);
    }
    
    name.value = "";
    calories.value = "";
    
    const collapseItem = document.getElementById(`collapse-${type}`);
    const bsCollapse = new bootstrap.Collapse(collapseItem, {
        toggle: false
      });
  }

  _removeItem(type, e){
    if(e.target.classList.contains('delete') || e.target.classList.contains('fa-xmark')){
     if( confirm('Are you sure you want to delete it?')){
      //console.log(e.target.closest('.card').getAttribute('data-id'));
      const id = e.target.closest('.card').getAttribute('data-id');
      type === 'meal' ? this._tracker.removeMeal(id) : this._tracker.removeWorkout(id)
      e.target.closest('.card').remove();
     }
    }
  }

  _filterItems(type, e){
    const value = e.target.value.toLowerCase();
    console.log(value);
    document.querySelectorAll(`#${type}-items .card`).forEach((item) => {
      console.log(item.firstElementChild.firstElementChild.firstElementChild.textContent);
      const name = item.firstElementChild.firstElementChild.firstElementChild.textContent;
      if(name.toLowerCase().indexOf(value) !== -1){
        item.style.display = 'block';
       } else {
        item.style.display = 'none';
       } 
    })
  }

  _reset(){
    document.getElementById("meal-items").innerHTML = "";
    document.getElementById("workout-items").innerHTML = "";
    document.getElementById("filter-meals").value = "";
    document.getElementById("filter-workouts").value = "";
    this._tracker.resetTrackcolorie();
  }

  _setDailyLimit(e){
    e.preventDefault();
    const limit = document.getElementById('limit');
    if(limit.value === "") {
      alert('Please add daliy calories limit number');
      return;
    }
    this._tracker.displayDailyLimitSet(+limit.value);
    limit.value = "";

    const modelEl = document.getElementById("limit-modal");
    const model = bootstrap.Modal.getInstance(modelEl);
    model.hide();
  }

}

const app = new App(); //will run the consturctor of App

//console.log(app, 'app')

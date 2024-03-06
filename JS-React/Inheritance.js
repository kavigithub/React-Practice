const me = {
    name: 'Krish',
    age: 30,
    job: 'Engineer',
    talk(){
        return `${this.name} is talking`
    }
}

console.log(me.talk()); //repeate code

const you = {
    name: 'John',
    age: 30,
    job: 'Engineer',
    talk() {
        return `${this.name} is talking`
    }
}

console.log(you.talk());//repeate code

/*Solution for This is*/
class Person {
    constructor(name, age, job){
        this.name = name,
        this.age = age;
        this.job = job
    }
    talk(){
        return `${this.name} is talking`
    }
}

let person1 = new Person('Sauris', 30, 'Doctor');
let person2 = new Person('Kevin', 89, 'Coropati');
console.log(person1.talk())
console.log(person2.talk())

//How you doing this by prototype inheritance
Person.prototype.howYouDoing = function (param) {
    return `I am feeling ${param}`
}

console.log(person1.howYouDoing('good'))
console.log(person2.howYouDoing('terrible'))

//extends
class Developer extends Person {
    constructor(name, age, job, skill) {
        super(name, age, job);
        this.skill= skill
    }
    coding() {
       return `${this.name} ${this.skill}` 
    }
}

let abhukew = new Developer('abjik', 82, 'closet', 'furniture refining')
console.log(abhukew.coding())
//console.log(Person.coding) //not finding this method

//anotther methos is Object.create(object name)

const personObj = {
    talk(){
        return 'talkig yo person'
    }
}

const mePerson = Object.create(personObj);
console.log(mePerson.talk());
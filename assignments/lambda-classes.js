class Person {
  constructor(attr) {
    this.name = attr.name;
    this.location = attr.location;
    this.age = attr.age;
    this.gender = attr.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLangiage = attr.favLangiage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  // Modified for stretch
  grade(student, subject) {
    let score = Math.random() * 100 // A number between 0 and 100
    console.log(`${student.name} receives a score of ${score} on ${subject}`);

    //Avreage of this score and students original score
    let newGrade = (score + student.grade) / 2;
    student.grade = newGrade;
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = Math.random() * 100;
  }

  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate (){
    if(this.grade >= 70){
      console.log(`Congratulations! ${this.name} has graduated lambda school with a grade of ${this.grade}!`);
    } else {
      console.log(`${this.name} was unable to graduate because their grade was too low. Keep grinding!`);
    }
  }
}

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel time for a standy boi!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}
function Person(name,age){
    this.name = name;
    this.age = age;
}

const obj = new Person("Avinash",20);

console.log(obj.name + " " + obj.age);

function add() {
    let sum = 0;
    for (const item of arguments) {
      sum += item;
    }
    return sum;
}

  console.log(add(2, 3, 4, 5));

  function avg() {
    let sum = 0;
    for (const item of arguments) {
      sum += item;
    }
    return sum / arguments.length;
  }
  
  console.log(avg(2, 3, 4, 5));

  function avgs(...args) {
    let sum = 0;
    for (const item of args) {
      sum += item;
    }
    return sum / args.length;
  }
  
  console.log(avgs(2, 3, 4, 5));


  function validate(age){
      if(age > 18)
        return true;
    return false;
  }

  function student(name,age,func){
      this.name = name;
      this.age = age;
      if(func(age)){
          console.log("valid user " + name);
      }else
        console.log("invalid user " + name);
  }

  const obj1 = new student("Avinash",20,validate);


  let addition = function(num1,num2){
      return num1+num2;
  }

  let res = addition(1,2);
  console.log(res);


let greet = (user) => {
    return "hello "+ user;
}

console.log(greet("Avinash"))
function validate(age){
    if(age > 18)
      return true;
  return false;
}

function student(name,age,func){
    if(func(age)){
        console.log("valid user " + name);
    }else
      console.log("invalid user " + name);
}

const obj = new student("Avinash",20,validate);

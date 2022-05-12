class makePerson {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    fullName() {
        return this.first + " " + this.last;
    }
}

const s = new makePerson("Avinash","vardhan");

console.log(s.fullName());

const s1 = new makePerson("jhony","lee");

console.log(s1.fullName());


function personFullName(s3) {
    return s3.first + ' ' + s3.last;
  }
  function personFullNameReversed() {
    return this.last + ', ' + this.first;
  }
  function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = personFullName(this);
    this.fullNameReversed = personFullNameReversed();
  }

  const s2 = new Person('Simon', 'Willison');
  console.log(s2.fullName);

  // closures

  function makeAdder(a) {
    return function(b) {
      return a + b;
    };
  }
  const add5 = makeAdder(5);
  const add20 = makeAdder(20);
  console.log(add5(6)); // ?
  console.log(add20(7)); // ?
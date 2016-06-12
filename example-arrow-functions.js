var names = ['Andrew', 'Julie', 'Jen'];

names.forEach(function(name, i) {
  console.log('forEach', name);
});

names.forEach( name => {
  console.log('forEach Arrow', name);
});

names.forEach( name => console.log(name) );

var returnMe = (name) => name + "!";
console.log(returnMe('Apple'));

var person = {
  name: 'Adrian',
  greet: function() {
    names.forEach(function (name) {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}

person.greet();

var person2 = {
  name: 'Adrian',
  greet: function () {
    names.forEach((name)=> {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}
person2.greet();

// Challenge

function add (a, b) {
  return a + b;
}

// Add Statement



// Add expression
let addExpression = (a, b) => a + b;
console.log(addStatement(2,3));

console.log(add(1,3));
console.log(add(9,0));

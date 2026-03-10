const person1 = {
  firstName: "Mann",
  lastName: "Badreshiya",
  fullname: function(a, b) {
    const name = `${this.firstName} ${this.lastName}`;
    const full = `${a ? a + " " : ""}${name}${b ? " " + b : ""}`;
    console.log(full);
  }
};

const person2 = {
  firstName: "Ayush",
  lastName: "Panchasara"
};


person1.fullname.call(person2, "Ms.", "PhD"); 

person1.fullname.apply(person2, ["Dr.", "MBA"]); 

const boundFullname = person1.fullname.bind(person2, "Mrs.", "MD");
boundFullname(); 

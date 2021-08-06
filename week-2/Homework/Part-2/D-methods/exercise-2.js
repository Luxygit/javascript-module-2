/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/
let newAddress = "Barcelona"
let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function addressFnc(newAddress) {
       return this.currentAddress = newAddress;
    },
    celebrateBirthday: function ageFnc (){
        return this.age = this.age + 1;
    },
};

console.log(person.changeAddress(newAddress));
console.log(person.celebrateBirthday());

console.log(person.currentAddress);
console.log(person.age);
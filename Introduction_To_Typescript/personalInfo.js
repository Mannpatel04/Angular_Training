var personalInfo = {
    firstName: "Mann",
    lastName: "Badreshiya",
    age: 21,
    address: {
        street: "15, Niharika BUnglows",
        pinCode: 380015,
        city: "Ahmedabad",
    },
    contactNumber: [9998851041, 8160180501],
    displayFullAddress: function () {
        return "".concat(this.address.street || '', ", ").concat(this.address.city || '', ", ").concat(this.address.pinCode || '');
    },
    displayFullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    }
};
function displayPersonalInfo() {
    console.log("\nFull Name: ".concat(personalInfo.displayFullName()));
    console.log("Age: ".concat(personalInfo.age));
    console.log("Contact Number: ".concat(personalInfo.contactNumber.join(', ')));
    console.log("Full Address: ".concat(personalInfo.displayFullAddress(), "\n"));
}
console.log(displayPersonalInfo());

interface PersonalInfo {
    firstName: string; 
    lastName: string; 
    age: number;
    address: Address;
    contactNumber: number[];
    displayFullAddress: () => string;
    displayFullName: () => string;
}

interface Address{
    street: string;
    city: string;
    pinCode: number; 
}

let  personalInfo: PersonalInfo =
{
   firstName : "Mann",
   lastName: "Badreshiya",
   age : 21,
   address: {
       street: "15, Niharika BUnglows",
       pinCode: 380015,
       city: "Ahmedabad",
   },
   contactNumber: [9998851041, 8160180501],
   displayFullAddress: function() 
   {
    return  `${this.address.street || ''}, ${this.address.city || ''}, ${this.address.pinCode || ''}`;    
   },
   displayFullName: function()
   {
    return `${this.firstName} ${this.lastName}`;
   }
 
}

function displayPersonalInfo() : void
{
    
    console.log(`\nFull Name: ${personalInfo.displayFullName()}`);
    console.log(`Age: ${personalInfo.age}`);
    console.log(`Contact Number: ${personalInfo.contactNumber.join(', ')}`); 
    console.log(`Full Address: ${personalInfo.displayFullAddress()}\n`);
}


displayPersonalInfo();







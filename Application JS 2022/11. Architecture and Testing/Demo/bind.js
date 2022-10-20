const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
        // return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
console.log(fullName());


"use strict";
exports.__esModule = true;
function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, phoneNumber, state, zipcode, occupation, hourlyWage, hoursWorked) {
        this.certifications = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipcode = zipcode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        this.hoursWorked = hoursWorked;
    }
    //Getters
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    Employee.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    Employee.prototype.getState = function () {
        return this.state;
    };
    Employee.prototype.getZipcode = function () {
        return this.zipcode;
    };
    Employee.prototype.getOccupation = function () {
        return this.occupation;
    };
    Employee.prototype.getHourlyWage = function () {
        return this.hourlyWage;
    };
    //Setters
    Employee.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Employee.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Employee.prototype.setAge = function (age) {
        this.age = age;
    };
    Employee.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Employee.prototype.setState = function (state) {
        this.state = state;
    };
    Employee.prototype.setZipcode = function (zipcode) {
        this.zipcode = zipcode;
    };
    Employee.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    Employee.prototype.setHourlywage = function (hourlyWage) {
        this.hourlyWage = hourlyWage;
    };
    // Combination methods
    Employee.prototype.fullName = function () {
        return this.firstName = " " + this.lastName + " ";
    };
    Employee.prototype.employeeLocation = function () {
        return this.firstName + " " + "is located in" + this.state;
    };
    Employee.prototype.contactEmployee = function () {
        return this.firstName + "'s" + "telephone number is" + this.phoneNumber.toString();
    };
    // wage calculator
    Employee.prototype.wageCalc = function () {
        if (this.hoursWorked) {
            this.hoursWorked = this.hoursWorked;
        }
        else {
            this.hoursWorked = 40;
        }
        var weeklyWage = this.hourlyWage * this.hoursWorked;
        return ("My name is " + this.firstName + this.lastName + ", and I make $" + weeklyWage + " weekly");
    };
    return Employee;
}());
var employee1 = new Employee("Kim", "Rogers", 35, 8287708238, "NC", 28601, "Data entry clerk", 18, 40);
var employee2 = new Employee("Keith", "Edwards", 22, 7045550321, "NC", 28602, "Mailman", 25, 65);
var employee3 = new Employee("Aisha", "Heard", 29, 8282280623, "NC", 28601, "Web developer", 65, 60);
//OUTPUT
document.getElementById("worker1").innerHTML = employee1.fullName();
document.getElementById("worker2").innerHTML = employee2.employeeLocation();
document.getElementById("worker3").innerHTML = employee3.wageCalc();

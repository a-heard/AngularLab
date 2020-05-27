import { RouteReuseStrategy } from "@angular/router";
import { timingSafeEqual } from 'crypto';
import { gunzipSync } from 'zlib';

function sayHello(person: string): string {
    return "Hello, " + person;
    }
    var user = "Super Student";
    document.getElementById("para").innerHTML = sayHello(user);

    

    class Employee {
        private firstName: string;
        private lastName: string;
        private age: number;
        private phoneNumber: number;
        private state: string;
        private zipcode: number;
        private occupation: string;
        private hourlyWage: number;
        private hoursWorked: number;
        private certs: string[] = [];
        
        
        
        
        constructor(firstName: string, lastName: string, age?:  number, phoneNumber?: number, state?: string, zipcode?: number, occupation?: string, hourlyWage?: number, hoursWorked?: number) { 

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
        getFirstName(): string {
            return this.firstName;
        }
        getLastName(): string {
            return this.lastName;
        }
        getAge(): number{
            return this.age;
        }
        getPhoneNumber(): number {
            return this.phoneNumber;
        }
        getState(): string {
            return this.state;
        }
        getZipcode(): number {
            return this.zipcode;
        }
        getOccupation(): string {
            return this.occupation;
        }
        getHourlyWage(): number {
            return this.hourlyWage;
        }
        getCerts(): string [] {
            return this.certs;
        }

        //Setters
        setFirstName(firstName: string): void {
            this.firstName = firstName;
        }
        setLastName(lastName: string): void {
            this.lastName = lastName;
        }
        setAge(age: number): void {
            this.age = age;
        }
        setPhoneNumber(phoneNumber: number): void {
            this.phoneNumber = phoneNumber;
        }
        setState(state: string): void {
            this.state = state;
        }
        setZipcode(zipcode: number): void {
            this.zipcode = zipcode;
        }
        setOccupation(occupation: string): void {
            this.occupation = occupation;
        }
        setHourlywage(hourlyWage: number): void {
            this.hourlyWage = hourlyWage;
        }

        // Combination methods
        fullName(): string {
            return this.firstName = " " + this.lastName + " "
        }

        employeeLocation(): string {
            return this.firstName + " " + "is located in" + this.state
        }

        contactEmployee(): string {
            return this.firstName + "'s" + "telephone number is" + this.phoneNumber.toString()
        }

    


    // wage calculator
    wageCalc(): string {    
         if (this.hoursWorked) {      
              this.hoursWorked = this.hoursWorked;    
             } else {      
                  this.hoursWorked = 40;   
                  }     let weeklyWage = this.hourlyWage * this.hoursWorked;
                  return ("My name is " + this.firstName + this.lastName + ", and I make $" + weeklyWage + " weekly");  
                 }
            
    // Certifications
    addCerts(...certs: string[]): void {
        for (let cert in certs) 
        { certs.push(cert);}
         this.certs = certs;}   
         static createEmployee(options: EmployeeOptions): Employee {
        return new Employee(options.firstName, options.lastName);
         }
    }
    
    interface EmployeeOptions {
        firstName: string;
        lastName: string;
        age?: number;
        phoneNumber?: number;
        state?: string;
        zipcode?: number;
        occupation?: string;
        hourlyWage?: number;
        hours?: number; 
    }      


    let employee1 = new Employee("Kim", "Rogers", 35, 8287708238, "NC", 28601, "Data entry clerk", 18, 40);

    let employee2 = new Employee("Keith", "Edwards", 22, 7045550321, "NC", 28602, "Mailman", 25, 65);

    let employee3 = new Employee("Aisha", "Heard", 29, 8282280623, "NC", 28601, "Web developer", 65, 60);

        //OUTPUT
        document.getElementById("worker1").innerHTML = employee1.fullName();

        document.getElementById("worker2").innerHTML = employee2.employeeLocation();

        document.getElementById("worker3").innerHTML = employee3.wageCalc();

        document.getElementById("worker4").innerHTML = Employee.createEmployee({   firstName: "Whinnie",   lastName: "The Pooh", }).getFirstName()


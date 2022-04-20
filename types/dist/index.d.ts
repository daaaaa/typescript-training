declare class Person {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
}
declare class Employee extends Person {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare class Customer extends Person {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
}
declare class Supplier extends Person {
    readonly id: string;
    name: string;
    city: string;
    CompanyName: string;
    constructor(id: string, name: string, city: string, CompanyName: string);
}
declare const salesEmployee: Employee;
declare const data: (Employee | Customer)[];

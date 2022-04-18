declare const enum Feature {
    Waterproof = 0,
    Insulated = 1
}
declare type Product = {
    id: number;
    name: string;
    price?: number;
};
declare type Person = {
    id: string;
    name: string;
    city: string;
    contact: number;
};
declare type Employee = {
    id: string;
    company: string;
    dept: string;
    contact: string;
};
declare type EmployedPerson = Person & Employee;
declare let typeTest: never;
declare function isPerson(testObj: any): testObj is Person;
declare function writePerson(per: Person): void;
declare function writeEmployee(emp: Employee): void;

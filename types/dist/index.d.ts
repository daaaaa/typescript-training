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
};
declare type Employee = {
    id: string;
    company: string;
    dept: string;
};
declare type EmployedPerson = Person & Employee;
declare function correlateData(peopleData: Person[], staff: Employee[]): EmployedPerson[];
declare const people: Person[];
declare const employees: Employee[];
declare const dataItems: EmployedPerson[];
declare function isPerson(testObj: any): testObj is Person;

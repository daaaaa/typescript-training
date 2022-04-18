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
    contact: {
        phone: number;
    };
    getContact(field: string): string;
};
declare type Employee = {
    id: string;
    company: string;
    dept: string;
    contact: {
        name: string;
    };
    getContact(field: number): number;
};
declare type EmployedPerson = Person & Employee;
declare const person: EmployedPerson;
declare const typeTest: ((field: string) => string) & ((field: number) => number);
declare const stringParamTypeTest: string;
declare const numberParamTypeTest: number;

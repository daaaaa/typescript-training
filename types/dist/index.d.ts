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
    company: string;
    dept: string;
};
declare const bob: {
    id: string;
    name: string;
    city: string;
    company: string;
    dept: string;
};
declare const dataItems: (Person & Employee)[];
declare function isPerson(testObj: any): testObj is Person;

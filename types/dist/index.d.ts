declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare enum Product {
    Hat = 0,
    Gloves = 20,
    Umbrella = 21
}
declare const productValue: Product;
declare const unionValue: number | Product;
declare enum City {
    London = "London",
    Paris = "Paris",
    NY = "New York",
    Gorgonzola = "Gorgonzola"
}
declare const enum Colors {
    Red = 0,
    Green = 1,
    Blue = 2
}
declare const restrictedValue: 1 | 2 | 3;
declare function calculatePrice(quantity: 1 | 2, price: number): number;
declare const total: number;
declare type numVals = 1 | 2 | 3 | 4;
declare function getRandomValue(): numVals;
declare function getMixedValue(input: 1): 1;
declare function getMixedValue(input: 2 | 3): "Hello" | true;
declare function getMixedValue(input: 4): City.London;
declare const first: 1;
declare const second: true | "Hello";
declare const third: true | "Hello";
declare type Cities = "London" | "Paris" | "Chicago";
declare type CityResponse = `City: ${Cities}`;
declare function getCityString(city: Cities): CityResponse;
declare let stringCity: "City: London" | "City: Paris" | "City: Chicago";

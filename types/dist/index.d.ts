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
declare const restrictedValueNotAllowed: 1 | 2 | 3;

declare const enum Feature {
    Waterproof = 0,
    Insulated = 1
}
declare type Product = {
    name: string;
    price?: number;
    hasFeature?(Feature: any): boolean;
};
declare const hat: {
    name: string;
    price: number;
};
declare const gloves: {
    name: string;
    price: number;
};
declare const umbrella: {
    name: string;
    price: number;
    waterproof: boolean;
    hasFeature: (feature: Feature) => boolean;
};
declare const mirrorShades: {
    name: string;
    price: number;
    finish: string;
};
declare const darkShades: Product;
declare const products: Product[];

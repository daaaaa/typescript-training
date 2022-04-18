declare const enum Feature {
    Waterproof = 0,
    Insulated = 1
}
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
declare const products: {
    name: string;
    price?: number;
    hasFeature?(Feature: any): boolean;
}[];

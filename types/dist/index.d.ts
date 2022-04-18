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
declare type UnionType = {
    id: number | string;
    name: string;
};
declare const hat: {
    id: number;
    name: string;
    price: number;
};
declare const gloves: {
    id: number;
    name: string;
    price: number;
};
declare const umbrella: {
    id: number;
    name: string;
    price: number;
};
declare const bob: {
    id: string;
    name: string;
    city: string;
};
declare const dataItems: UnionType[];

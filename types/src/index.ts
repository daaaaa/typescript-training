import { City, Person, Product, Employee } from "./dataTypes"

type resultType<T extends boolean> = T extends true ? string : number

const firstVal: resultType<true> = "String Value"
const secondVal: resultType<false> = 100

const mismatchCheck: resultType<false> = "String Value"

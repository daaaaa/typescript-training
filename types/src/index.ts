import { City, Person, Product, Employee } from "./dataTypes"

type resultType<T extends boolean> = T extends true ? string : number

type reference = "London" | "Bob" | "Kayak"

type nestedType <T extends reference> = T extends "London" ? City : T extends "Bob" ? Person : Product

const firstVal: nestedType<"London"> = new City("London", 8136000)
const secondVal: nestedType<"Bob"> = new Person("Bob", "London")
const thirdVal: nestedType<"Kayak"> = new Product("Kayak", 275)

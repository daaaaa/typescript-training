import { sum } from "./calc"

test("chech result value", () => {
    const result = sum(10, 20, 30)
    expect(result).toBe(60)
})
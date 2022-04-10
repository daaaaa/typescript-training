import { TodoItem } from "./todoItem"
import { TodoCollection } from "./todoCollection"

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers for Erika"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Scuolapercani", true),
]

let collection: TodoCollection = new TodoCollection("Davide", todos)

console.clear()
console.log(`${collection.userName}'s Todo List`)

let newId: number = collection.addTodo("Go for run")
let todoItem: TodoItem = collection.getTodoById(newId)

// collection.addTodo(todoItem)
collection.removeComplete()
collection.getTodoItems(true).forEach(
    item => item.printDetails()
)
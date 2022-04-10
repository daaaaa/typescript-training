import * as inquirer from 'inquirer'

import { TodoItem } from "./todoItem"
import { TodoCollection } from "./todoCollection"

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers for Erika"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Scuolapercani", true),
]

let collection: TodoCollection = new TodoCollection("Davide", todos)

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List`)
    console.log(`${collection.getItemCounts().incomplete} items to do on ${collection.getItemCounts().total}`)
    collection.getTodoItems(true).forEach(
        item => item.printDetails()
    )
}

enum Commands {
    Quit = "Quit",
    Dummy = "Dummy",
}

function promptUser(): void {
    console.clear()
    displayTodoList()
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    })
    .then(answers => {
        if (answers["command"] !== Commands.Quit) {
            promptUser()
        }
    })
}

promptUser()
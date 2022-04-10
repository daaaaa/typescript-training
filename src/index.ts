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
let showCompleted = true

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List`)
    console.log(`${collection.getItemCounts().incomplete} items to do on ${collection.getItemCounts().total}`)
    collection.getTodoItems(showCompleted).forEach(
        item => item.printDetails()
    )
}

enum Commands {
    Add = "Add New Task",
    Toggle = "Toggle",
    Quit = "Quit",
}

function promptAdd(): void {
    console.clear()
    inquirer
    .prompt({ type: "input", name: "add", message: "Enter task:" })
    .then(answers => {
        if (answers["add"] !== "") {
            collection.addTodo(answers["add"])
        }
        promptUser()
    })
}

function promptUser(): void {
    console.clear()
    displayTodoList()
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
    })
    .then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted
                promptUser()
                break;

            case Commands.Add:
                promptAdd()
                break;
        }
    })
}

promptUser()
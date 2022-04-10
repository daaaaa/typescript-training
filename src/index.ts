import * as inquirer from 'inquirer'

import { TodoItem } from "./todoItem"
import { TodoCollection } from "./todoCollection"
import { JsonTodoCollection } from "./jsonTodoCollection"

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers for Erika"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Scuolapercani", true),
]

// let collection: TodoCollection = new TodoCollection("Davide", todos)
let collection: TodoCollection = new JsonTodoCollection("Davide", todos)
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
    Complete = "Complete Task",
    Toggle = "Toggle",
    Purge = "Remove Completed Tasks",
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

function promptComplete(): void {
    console.clear()
    inquirer
    .prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted).map(
            item => ({ name: item.task, value: item.id, checked: item.complete })
        ),
    })
    .then(answer => {
        let completedTask = answer["complete"] as number[]
        collection.getTodoItems(true).forEach(item => {
            let foundItemId = completedTask.find(id => id === item.id)
            collection.markComplete(item.id, foundItemId !== undefined)
        })
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

            case Commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete()    
                } else {
                    promptUser()
                }
                break;
            
            case Commands.Purge:
                collection.removeComplete()
                promptUser()
                break;
        }
    })
}

promptUser()
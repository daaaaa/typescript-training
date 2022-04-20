class Person {
    constructor(
        public id: string,
        public name: string,
        public city: string
    ) {}
}

class Employee extends Person {
    constructor(
        public readonly id: string,
        public name: string,
        private dept: string,
        public city: string) {
            super(id, name, city)
        }

    writeDept() {
        console.log(`${this.name} works in ${this.dept}`)
    }
}
 

const salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris")
salesEmployee.writeDept()
// salesEmployee.id = "fidel"

const data: (Person | Employee)[] = [
    new Person("bsmith", "Bob Smith", "London"),
    salesEmployee,
]

data.forEach(item => {
    console.log(`${item.id} ${item.name}, ${item.city}`)
    if (item instanceof Employee) {
        item.writeDept()
    }
})
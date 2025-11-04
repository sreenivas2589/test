// JavaScript source code
class New{
    constructor(place,name) {
        this.place = "world"
        this.name = "New Class";
    }
    greet() {
        return (`Hello from ${this.name}`)
    }

}

class Poiu {

    constructor(hello, name) {
        this.hello = hello
        this.name = name


    }
    greet() {
        return this.name
    }
}

const chi = new Poiu("nwe", "sreenivas")

console.log(chi.hello)

class child extends New {
    constructor() {
        super()

    }
    greet() {
        return (`Hello from ${this.name} ${this.place}`)
    }

}

//for(let i = 0; i < 10; i++) {
//    setTimeout(() => {
//        console.log(i)


//    },2000)
//}

let count = 0


//for (let i = 0; i < 10; i++) {
//    setTimeout(() => {
//        console.log(i)
//    }, 2000)
//}

console.log(count)

const hello = new New

console.log(hello.greet())

const childHello = new child

console.log(childHello.greet())
console.log(childHello.place)


//let students = document.querySelector('button[type="submit:]')

function foo() {
    console.log(this)

}

class Helloworld{
    constructor(name, place, area) {
        this.name = name
        this.place = place
        this.area = area
    }

    hello() {
        return this.name
    }


}


foo()

const obj = new Helloworld("hello", "world", "something")

const hello12 = "hello"

console.log(obj.place)

const obj1 = {name:"sreen",place:"hindupur"}

const obj2 = Object.create(obj)

console.log(obj1)
console.log(obj2)

//const element = document.createElement(<p>Hello</p>)

console.log(1 ? (Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2)) : 2)

const hellow = false + false + 1 


const newstring = "hellow world"
console.log(newstring.slice(1, 5))

console.log(typeof ({"boot":1}))

// stack = adding from last, removing from last, last value is accesible


let stack = []

stack.push(1)
stack.push(2)
stack.push(3)

stack.pop()

console.log(stack)
stack.push(4)
stack.push(5)
stack.push(6)

let top = stack[stack.length - 1]

console.log(top)

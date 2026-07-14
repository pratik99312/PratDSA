// adding element and removing 1st element from front - access to front q[0]

let q = []

q.push(1) // enqueue
q.push(2)
q.push(3)
q.push(4)
q.push(5)
q.push(6)

console.log(q)

q.shift(); // dequeue
q.shift(); // dequeue
q.shift();  // dequeue

let front = q[0]

// NEVER DO THIS  - q.pop(), q[3] - because Invalid Queue Operations

console.log(q);
console.log(front)





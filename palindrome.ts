export class Stack<T> {
  stackList: T[] = [];
  constructor() {}
  push(item: T) {
    return this.stackList.push(item);
  }
  pop() {
    return this.stackList.pop();
  }
  show() {
    return this.stackList;
  }
}

export class Queue<T> {
  queueList: T[] = [];
  constructor() {}
  enqueue(item: T) {
    return this.queueList.push(item);
  }
  dequeue() {
    return this.queueList.shift();
  }
  show() {
    return this.queueList;
  }
}

let stack = new Stack();
stack.push("m");
stack.push("a");
stack.push("d");
stack.push("a");
stack.push("m");
console.log(stack.show());

let queue = new Queue();
queue.enqueue("m");
queue.enqueue("a");
queue.enqueue("d");
queue.enqueue("a");
queue.enqueue("m");
console.log(queue.show());

function compareItems(a: any, b: any) {
  let functionCheck = false;
  for (let i = 0; i < a.show().length; i++) {
    if (a.pop() === b.dequeue()) {
      functionCheck = true;
    } else {
      functionCheck = false;
      break;
    }
  }
  if (functionCheck) {
    console.log(`This is a Palindrome string!`);
  } else {
    console.log(`This isn't a Palindrome string!`);
  }
}

compareItems(stack, queue);

let stack1 = new Stack();
stack1.push("D");
stack1.push("E");
stack1.push("M");
stack1.push("O");
console.log(stack1.show());

let queue1 = new Queue();
queue1.enqueue("D");
queue1.enqueue("E");
queue1.enqueue("M");
queue1.enqueue("O");
console.log(queue1.show());

compareItems(stack1, queue1);

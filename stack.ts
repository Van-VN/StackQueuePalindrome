export class Stack<T> {
  list: T[] = [];
  size: number;

  constructor() {
    this.size = 0;
  }

  push(data: T) {
    this.size++;
    return this.list.push(data);
  }

  pop() {
    this.size--;
    return this.list.pop();
  }
  getSize() {
    return this.size;
  }

  show() {
    return this.list;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(10);
stack.pop();
console.log(stack.show());
console.log(stack.getSize());

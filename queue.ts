export class Queue<T> {
  list: T[] = [];
  constructor() {}
  enqueue(item: T) {
    return this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
  size() {
    return this.list.length;
  }
  show() {
    return this.list;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(60);
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.show());

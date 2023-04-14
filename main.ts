import {Queue} from "./Queue";

let queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.size());
console.log(queue.container);

queue.dequeue();
queue.dequeue();
console.log(queue.size());
console.log(queue.container);

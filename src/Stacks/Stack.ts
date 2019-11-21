class StackNode<T> {
  item: T;
  next: StackNode<T> | null;

  constructor(item: T) {
    this.item = item;
    this.next = null;
  }
}

class Stack<T> {
  private first: StackNode<T> | null;
  private stackSize = 0;

  constructor() {
    this.first = null;
  }
  push(item: T) {
    const newElement = new StackNode(item);
    newElement.next = this.first;
    this.first = newElement;
    this.stackSize++;
  }
  pop() {
    if (this.first !== null) {
      const oldElement = this.first;
      this.first = this.first.next;
      this.stackSize--;
      return oldElement;
    } else return this.first;
  }
  isEmpty() {
    return this.stackSize === 0;
  }
  size() {
    return this.stackSize;
  }
}

export default Stack;

class BagNode<T> {
  item: T;
  next: BagNode<T> | null;

  constructor(item: T) {
    this.item = item;
    this.next = null;
  }
}

class Bag<T> {
  private first: BagNode<T> | null;
  private bagSize = 0;

  constructor() {
    this.first = null;
  }
  add(item: T) {
    const b = new BagNode(item);
    b.next = this.first;
    this.first = b;
    this.bagSize++;
  }

  isEmpty(): boolean {
    return this.first === null;
  }
  size(): number {
    return this.bagSize;
    // for (let i = 0; this.first !== null; i++) {
    //     this.first = this.first.next;
    //     return i;
    // }
  }

  *[Symbol.iterator]() {
    for (let itr = this.first; itr !== null; itr = itr.next) {
      yield itr.item;
    }
  }

  forEach(cb: (elem: T) => void) {
    // let itr = this.first;
    // while (itr !== null) {
    //   cb(itr.item);
    //   itr = itr.next;
    // }

    for (let itr = this.first; itr !== null; itr = itr.next) {
      cb(itr.item);
    }
  }
}
export default Bag;

/*
https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html
*/

const myBag = new Bag<number>();

for (let i = 0; i < 10; i++) {
  myBag.add(i);
}

myBag.forEach(elem => {
  if (elem === 5) return true;
});

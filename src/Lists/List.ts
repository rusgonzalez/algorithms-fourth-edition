// class ListNode<T> {
//   value: T;
//   next: ListNode<T> | null;
//   prev: ListNode<T> | null;

//   constructor(value: T) {}
// }

// class List<T> {
//   private sentinel: ListNode<T>;

//   constructor() {
//     this.sentinel = new ListNode({} as T);
//     this.sentinel.next = this.sentinel;
//     this.sentinel.prev = this.sentinel;
//   }

//   isEmpty() {
//     return this.sentinel.next === this.sentinel;
//   }

//   insertFirst(value: T) {}

//   insertLast(value: T) {}

//   private remove(node: ListNode<T>) {}

//   removeFirst() {}

//   removeLast() {}

//   getFirst(): T {
//     return {} as T;
//   }

//   getLast() {}

//   *[Symbol.iterator]() {}

//   forEach(cb: (elem: T) => void) {}
// }
// export default List;

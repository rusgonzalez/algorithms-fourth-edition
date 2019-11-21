class StackArray<T> {
  private sArray: T[];
  constructor() {
    this.sArray = [];
  }
  push(item: T) {
    this.sArray.push(item);
  }
  pop() {
    return this.sArray.pop();
  }
  isEmpty() {
    return this.sArray.length === 0;
  }
  size() {
    return this.sArray.length;
  }
}
export default StackArray;

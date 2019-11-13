class BagArray<T> {
  private bArray: T[];
  constructor() {
    this.bArray = [];
  }
  add(item: T) {
    this.bArray.push(item);
  }
  isEmpty(): boolean {
    return this.bArray.length === 0;
  }
  size(): number {
    return this.bArray.length;
  }
}
export default BagArray;

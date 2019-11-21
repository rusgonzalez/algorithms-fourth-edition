import StackArray from "../Stacks/StackArray";

describe("Testing StackArrays", () => {
  test("size", () => {
    const myStackArray = new StackArray<number>();
    expect(myStackArray.size()).toEqual(0);
    myStackArray.push(33);
    expect(myStackArray.size()).toEqual(1);
    myStackArray.pop();
    expect(myStackArray.size()).toEqual(0);
  });
  test("isEmpty", () => {
    const myStackArray = new StackArray<number>();
    expect(myStackArray.isEmpty()).toBe(true);
    myStackArray.push(1);
    expect(myStackArray.isEmpty()).toBe(false);
    myStackArray.pop();
    expect(myStackArray.isEmpty()).toBe(true);
  });
});

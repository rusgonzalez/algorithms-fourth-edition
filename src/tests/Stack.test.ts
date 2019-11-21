import Stack from "../Stacks/Stack";

describe("Testing Stacks", () => {
  test("size", () => {
    const myStack = new Stack<number>();
    expect(myStack.size()).toEqual(0);
    for (let i = 1; i < 15; i++) {
      myStack.push(i);
      expect(myStack.size()).toEqual(i);
    }
    for (let j = 1; j < 15; j++) {
      myStack.pop();
      expect(myStack.size()).toEqual(14 - j);
    }
  });

  test("isEmpty", () => {
    const myStack = new Stack<number>();
    expect(myStack.isEmpty()).toBe(true);
    myStack.push(1);
    expect(myStack.isEmpty()).toBe(false);
    myStack.pop();
    expect(myStack.isEmpty()).toBe(true);
  });
});

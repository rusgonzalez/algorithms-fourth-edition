import BagArray from "../Bags/BagArray";

describe("Testing Bags", () => {
  test("size", () => {
    const myBag = new BagArray<number>();
    expect(myBag.size()).toEqual(0);
    myBag.add(22);
    expect(myBag.size()).toEqual(1);
  });
  test("isEmpty", () => {
    const myBag = new BagArray<number>();
    expect(myBag.isEmpty()).toBe(true);
    myBag.add(1);
    expect(myBag.isEmpty()).toBe(false);
  });
});

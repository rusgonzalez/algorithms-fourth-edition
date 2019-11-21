import Bag from "../Bags/Bag";
//import bagSize from "../Bags/Bag";

describe("Testing Bags", () => {
  test("size", () => {
    const myBag = new Bag<number>();
    expect(myBag.size()).toEqual(0);
    for (let i = 1; i < 10; i++) {
      myBag.add(i);
      expect(myBag.size()).toEqual(i);
    }
  });

  // test("size vs bagSize", () => {
  //   const myBag = new Bag<number>();
  //   expect(myBag.size()).toEqual(bagSize);
  // });

  test("isEmpty", () => {
    const myBag = new Bag<number>();
    expect(myBag.isEmpty()).toBe(true);
    myBag.add(1);
    expect(myBag.isEmpty()).toBe(false);
  });

  test("verify add and size", () => {
    const myBag = new Bag<number>();
    expect(myBag.size()).toBe(0);

    const array = [1, 2, 3, 4, 5];
    for (let elem of myBag) {
      expect(array.includes(elem)).toBeTruthy;
    }
  });
});

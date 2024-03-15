const chai = require("chai");
const expect = chai.expect;
const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree", function () {
  it("should return number three", function () {
    expect(returnsThree()).to.equal(3);
  });
});
describe("reciprocal", function () {
  context("valid arguments", () => {
    it("should return reciprocal of n", function () {
      expect(reciprocal(1)).to.equal(1);
      expect(reciprocal(5)).to.equal(0.2);
      // expect(reciprocal(1001)).to.equal(0.000999000999000999);
    });
  });
  context("invalid arguments", () => {
    it("should return range error if less than 1", function () {
      expect(reciprocal(0)).to.throw(RangeError);
    });
    it("should return range error if greater than a 1000", function () {
      expect(reciprocal(1001)).to.throw(RangeError);
    });
  });
});

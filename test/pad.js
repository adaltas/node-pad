import pad from "../lib/index.js";

describe("pad", function () {
  it("should pad right", function () {
    pad("abc", 6).should.eql("abc   ");
  });

  it("should pad left", function () {
    pad(6, "abc").should.eql("   abc");
  });

  it("accept length inferior to text", function () {
    pad(0, "foo").should.eql("foo");
  });
});

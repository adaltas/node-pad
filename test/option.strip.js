import pad from "../lib/index.js";

describe("option.strip", function () {
  it("strip if text longer than length", function () {
    pad(2, "abcdef", { strip: true }).should.eql("ef");
  });

  it("strip if text longer than length", function () {
    pad("abcdef", 2, { strip: true }).should.eql("ab");
  });
});

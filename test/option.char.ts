import pad from "../src/index.js";

describe("option.char", function () {
  it("should pad right", function () {
    pad("yeah", 6, "-").should.eql("yeah--");
    pad("yeah", 6, { char: "-" }).should.eql("yeah--");
  });

  it("should pad left", function () {
    pad(6, "234", "0").should.eql("000234");
    pad(6, "234", { char: "0" }).should.eql("000234");
  });
});

const pad = require("../lib/index.js");

describe("option.colors", function () {
  it("should pad right", function () {
    pad("\u001b[33mabc\u001b[39m", 6, { colors: true }).should.eql(
      "\u001b[33mabc\u001b[39m   ",
    );
  });

  it("should pad left with an additional option", function () {
    pad(6, "\u001b[33mabc\u001b[39m", { char: "-", colors: true }).should.eql(
      "---\u001b[33mabc\u001b[39m",
    );
  });
});

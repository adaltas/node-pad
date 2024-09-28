import pad from "../lib/index.js";

describe("option.fixed_width", function () {
  it("characters with more than one column", function () {
    // 2 chinese characters
    const chars = Buffer.from("e6938de4bd9c", "hex").toString();
    pad(6, chars).length.should.eql(4);
    pad(6, chars, { fixed_width: true }).length.should.eql(6);
  });
});

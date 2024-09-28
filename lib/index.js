import wcwidth from "wcwidth";

const pad = function (text, length, options = {}) {
  const invert = typeof text === "number";
  if (invert) {
    [length, text] = [text, length];
  }
  if (typeof options === "string") {
    options = { char: options };
  }
  if (!options.char) {
    options.char = " ";
  }
  if (!options.strip) {
    options.strip = false;
  }
  if (!typeof text === "string") {
    text = text.toString();
  }
  let textnocolors = null;
  let pad = "";
  if (options.colors) {
    const escapecolor = /\x1B\[(?:[0-9]{1,2}(?:;[0-9]{1,2})?)?[m|K]/g;
    textnocolors = text.replace(escapecolor, "");
  }
  const padlength =
    options.fixed_width === true ?
      length - (textnocolors || text).length
    : length - wcwidth.config(options.wcwidth_options)(textnocolors || text);
  if (padlength < 0) {
    if (options.strip) {
      return invert ? text.substr(length * -1) : text.substr(0, length);
    }
    return text;
  }
  pad += options.char.repeat(padlength);
  return invert ? pad + text : text + pad;
};

export default pad;
export { pad };

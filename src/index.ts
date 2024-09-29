/// <reference types='../types/wcwidth.d.ts' />
import wcwidth from "wcwidth";

interface WCWidthOptions {
  control?: number;
  nul?: number;
}

interface Options {
  /**
   * The character used to fill the gap.
   */
  char?: string;
  /**
   * Adjust to hidden terminal color characters.
   */
  colors?: boolean;
  /**
   * Remove characters from text if length smaller than text length, default to "false".
   */
  strip?: boolean;
  /**
   * An optimization option to disable the usage of the wcwidth package to handle the discovery of characters using more than one column for display.
   */
  fixed_width?: boolean;
  /**
   * Options passed to the wcwidth package used to calculate the display width of characters using more than one column.
   */
  wcwidth_options?: WCWidthOptions;
}

function pad(
  length: number,
  text: string | Buffer,
  options?: string | Options,
): string;
function pad(
  text: string | Buffer,
  length: number,
  options?: string | Options,
): string;
function pad(
  arg1: string | Buffer | number,
  arg2: string | Buffer | number,
  options: string | Options = {},
) {
  const invert = typeof arg1 === "number";
  let text = invert ? (arg2 as string | Buffer) : arg1;
  const length = invert ? arg1 : (arg2 as number);
  if (typeof options === "string") {
    options = { char: options };
  }
  if (!options.char) {
    options.char = " ";
  }
  if (!options.strip) {
    options.strip = false;
  }
  if (typeof text !== "string") {
    text = text.toString();
  }
  let textnocolors = null;
  let pad = "";
  if (options.colors) {
    // eslint-disable-next-line no-control-regex
    const escapecolor = /\x1B\[(?:[0-9]{1,2}(?:;[0-9]{1,2})?)?[m|K]/g;
    textnocolors = text.replace(escapecolor, "");
  }
  const padlength =
    options.fixed_width === true ?
      length - (textnocolors || text).length
    : length -
      wcwidth.config(options.wcwidth_options || {})(textnocolors || text);
  if (padlength < 0) {
    if (options.strip) {
      return invert ? text.substr(length * -1) : text.substr(0, length);
    }
    return text;
  }
  pad += options.char.repeat(padlength);
  return invert ? pad + text : text + pad;
}

export default pad;

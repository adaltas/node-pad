// Type definitions for pad 1.1
// Project: https://github.com/wdavidw/node-pad#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
//                 windware <https://github.com/windware>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default pad;
export { pad };

/** Left pad */
declare function pad(length: number, text: string, char?: string): string;
// tslint:disable-next-line unified-signatures
declare function pad(
  length: number,
  text: string,
  options?: pad.Options,
): string;
/** Right pad */
declare function pad(text: string, length: number, char?: string): string;
// tslint:disable-next-line unified-signatures
declare function pad(
  text: string,
  length: number,
  options?: pad.Options,
): string;

declare namespace pad {
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
    wcwidth_options?: pad.WCWidthOptions;
  }
}


declare module "wcwidth" {
  interface WCWidthOptions {
    control?: number;
    nul?: number;
  }
  type WcwidthNoOptions = (input: string) => number;
  type Wcwidth = {
    config: (options: WCWidthOptions) => WcwidthNoOptions;
    (input: string): number;
  };
  let wcwidth: Wcwidth;
  export default wcwidth;
  export { wcwidth };
}

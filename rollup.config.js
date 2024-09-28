import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "lib/index.js",
  output: [
    {
      file: `dist/pad.umd.js`,
      name: "mixme",
      format: "umd",
    },
    {
      file: `dist/pad.cjs.js`,
      format: "cjs",
    },
    {
      file: `dist/pad.esm.js`,
      format: "esm",
    },
  ],
  plugins: [
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        "node_modules/wcwidth/index.js": ["wcwidth"],
      },
    }),
    resolve(),
  ],
};

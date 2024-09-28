import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
const pkg = require("./package");

export default {
  input: "lib/index.js",
  output: [
    {
      file: `dist/${pkg.name}.umd.js`,
      name: "mixme",
      format: "umd",
    },
    {
      file: `dist/${pkg.name}.cjs.js`,
      format: "cjs",
    },
    {
      file: `dist/${pkg.name}.esm.js`,
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

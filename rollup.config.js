import terser from "@rollup/plugin-terser";
import typescript from "rollup-plugin-typescript2";
import { dts } from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
// Resolve wcwidth to be included in the bundle;
// Prevent "Unresolved dependencies" warning
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: `dist/cjs`,
        format: "cjs",
        sourcemap: true,
        entryFileNames: "[name].cjs",
      },
      {
        dir: `dist/esm`,
        format: "esm",
        sourcemap: true,
      },
    ],
    // external: ["mixme", "toposort"],
    plugins: [
      del({ targets: "dist/*" }),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: "tsconfig.src.json",
        useTsconfigDeclarationDir: true,
      }),
      terser(),
    ],
  },
  {
    input: "./dist/types/index.d.ts",
    output: [{ file: "dist/types/index.d.ts" }],
    plugins: [dts(), del({ targets: "dist/types", hook: "buildEnd" })],
  },
];

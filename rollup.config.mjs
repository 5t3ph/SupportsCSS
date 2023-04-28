import terser from "@rollup/plugin-terser";

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "es",
    },
    {
      file: "dist/bundle.umd.js",
      format: "umd",
      name: "SupportsCSS",
    },
    {
      file: "dist/bundle.min.js",
      format: "iife",
      name: "SupportsCSS",
      plugins: [terser()],
    },
  ],
};

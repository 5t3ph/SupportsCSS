const testSuite = [
  {
    name: "at-container",
    test: "`window.CSSContainerRule`",
  },
  {
    name: "at-container-style-properties",
    test: "* [See explanation](#atcontainerstyleproperties-test)",
  },
  {
    name: "at-counter-style",
    test: "`window.CSSCounterStyleRule`",
  },
  {
    name: "at-layer",
    test: "`window.CSSLayerBlockRule`",
  },
  {
    name: "at-property",
    test: "`window.CSSPropertyRule`",
  },
  {
    name: "at-scope",
    test: "`window.CSSScopeRule`",
  },
  {
    name: "anchor-positioning",
    test: "`CSS.supports('anchor-name: --a')`",
  },
  {
    name: "color-function",
    test: "`CSS.supports('color: color(srgb 0 0 1)')`",
  },
  {
    name: "color-mix",
    test: "`CSS.supports('color: color-mix(in lch, white, black)')`",
  },
  {
    name: "container-units",
    test: "`CSS.supports('width: 1cqi')`",
  },
  {
    name: "dynamic-viewport-units",
    test: "`CSS.supports('width: 1dvi')`",
  },
  {
    name: "has",
    test: "`CSS.supports('selector(:has(+ *))')` <br>(_Possible false positive in Firefox 112_)",
  },
  {
    name: "houdini-paint-api",
    test: "`window.CSS.paintWorklet`",
  },
  {
    name: "individual-transforms",
    test: "`CSS.supports('transform: scale(1)')`",
  },
  {
    name: "logical-properties",
    test: "`CSS.supports('border-start-start-radius: 1px')`",
  },
  {
    name: "media-range-syntax",
    test: "`window.matchMedia('(width >= 1px)')`",
  },
  {
    name: "nesting",
    test: "`CSS.supports('selector(& a)')`",
  },
  {
    name: "nth-of-s",
    test: "`CSS.supports('selector(:nth-child(1 of .a))')`",
  },
  {
    name: "overscroll-behavior",
    test: "`CSS.supports('overscroll-behavior: none')`",
  },
  {
    name: "relative-color-syntax",
    test: "`CSS.supports('color: rgb(from red r g b / 1%)')`",
  },
  {
    name: "scroll-timeline",
    test: "`CSS.supports('scroll-timeline-name: --a')`",
  },
  {
    name: "subgrid",
    test: "`CSS.supports('grid-template-rows: subgrid')`",
  },
  {
    name: "text-box-trim",
    test: "`CSS.supports('text-box-trim: both')`",
  },
  {
    name: "trigonometry",
    test: "`CSS.supports('width: calc(1px * cos(1deg))')`",
  },
  {
    name: "user-invalid",
    test: "`CSS.supports('selector(:user-invalid)')`",
  },
  {
    name: "user-valid",
    test: "`CSS.supports('selector(:user-valid)')`",
  },
  {
    name: "view-timeline",
    test: "`CSS.supports('view-timeline-name: --a'),`",
  },
  {
    name: "view-transitions",
    test: "`window.ViewTransition`",
  },
];

const registryName = (name) =>
  name
    .split("-")
    .map((part) => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("");

const supportTable = () => {
  let table =
    "| Feature Class | Global Name | Test Condition |\n|---|---|---|\n";

  for (const { name, test } of testSuite) {
    table += `| ${name} | ${registryName(name)} | ${test} |\n`;
  }

  return table;
};

module.exports = supportTable;

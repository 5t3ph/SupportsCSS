const defaults = {
  tests: [],
  supportsPrefix: "supports",
  unsupportedClasses: true,
};

let testSupportsPrefix = defaults.supportsPrefix;
let testUnsupportedClasses = defaults.unsupportedClasses;

const testEnvRules = {
  cqStyle: ":root { --a: b; } @container style(--a: b) { p { top: 1px; } }",
};

const testEnv = (styleBlock, el, prop, value) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const style = document.createElement("style");
  const svgEl = document.createElement(el);
  style.textContent = styleBlock;
  svg.appendChild(style);
  svg.appendChild(svgEl);
  document.body.appendChild(svg);
  const result = getComputedStyle(svgEl).getPropertyValue(prop) === value;
  svg.remove();
  return result;
};

let testSuite = [];

if (typeof window !== "undefined" && window.CSS) {
  testSuite = [
    {
      name: "at-container",
      test: window.CSSContainerRule,
    },
    {
      name: "at-container-style-properties",
      test: testEnv(testEnvRules.cqStyle, "p", "top", "1px"),
    },
    {
      name: "at-counter-style",
      test: window.CSSCounterStyleRule,
    },
    {
      name: "at-layer",
      test: window.CSSLayerBlockRule,
    },
    {
      name: "at-property",
      test: window.CSSPropertyRule,
    },
    {
      name: "at-scope",
      test: window.CSSScopeRule,
    },
    {
      name: "anchor",
      test: CSS.supports("left: anchor(center)"),
    },
    {
      name: "color-function",
      test: CSS.supports("color: color(srgb 0 0 1)"),
    },
    {
      name: "color-mix",
      test: CSS.supports("color: color-mix(in lch, white, black)"),
    },
    {
      name: "container-units",
      test: CSS.supports("width: 1cqi"),
    },
    {
      name: "dynamic-viewport-units",
      test: CSS.supports("width: 1dvi"),
    },
    {
      name: "has",
      test: CSS.supports("selector(:has(+ *))"),
    },
    {
      name: "houdini-paint-api",
      test: CSS.paintWorklet,
    },
    {
      name: "individual-transforms",
      test: CSS.supports("transform: scale(1)"),
    },
    {
      name: "logical-properties",
      test: CSS.supports("border-start-start-radius: 1px"),
    },
    {
      name: "media-range-syntax",
      test: window.matchMedia("(width >= 1px)"),
    },
    {
      name: "nesting",
      test: CSS.supports("selector(& a)"),
    },
    {
      name: "nth-of-s",
      test: CSS.supports("selector(:nth-child(1 of .a))"),
    },
    {
      name: "overscroll-behavior",
      test: CSS.supports("overscroll-behavior: none"),
    },
    {
      name: "relative-color-syntax",
      test: CSS.supports("color: rgb(from red r g b / 1%)"),
    },
    {
      name: "scroll-timeline",
      test: CSS.supports("scroll-timeline-name: a"),
    },
    {
      name: "subgrid",
      test: CSS.supports("grid-template-rows: subgrid"),
    },
    {
      name: "text-box-trim",
      test: CSS.supports("(leading-trim: both) or (text-box-trim: both)"),
    },
    {
      name: "trigonometry",
      test: CSS.supports("width: calc(1px * cos(1deg))"),
    },
    {
      name: "view-timeline",
      test: window.ViewTimeline,
    },
    {
      name: "view-transitions",
      test: window.ViewTransition,
    },
    {
      name: "focus-within",
      test: CSS.supports("selector(:focus-within)"),
    },
    {
      name: "focus-visible",
      test: CSS.supports("selector(:focus-visible)"),
    },
  ];
}

const addTest = (
  name,
  test,
  supportsPrefix = testSupportsPrefix,
  unsupportedClasses = testUnsupportedClasses
) => {
  const supported = supportsPrefix ? `${supportsPrefix}-${name}` : name;
  const unsupported = unsupportedClasses ? `no-${name}` : false;
  let className = !!test ? supported : unsupported;

  if (!!test || unsupportedClasses)
    document.documentElement.classList.add(className);

  // Update global record
  const registryName = name
    .split("-")
    .map((part) => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("");

  if (typeof window !== "undefined" && window.SupportsCSSTests) {
    SupportsCSSTests[registryName] = !!test;
    SupportsCSSTests.results = {
      ...SupportsCSSTests.results,
      ...{ [name]: !!test },
    };
  }
};

const init = (options) => {
  if (typeof window !== "undefined" && window.CSS && window.CSS.supports) {
    window.SupportsCSSTests = {};
    window.SupportsCSSTests.results = {};

    const { tests, supportsPrefix, unsupportedClasses } = {
      ...defaults,
      ...options,
    };

    testSupportsPrefix = supportsPrefix;
    testUnsupportedClasses = unsupportedClasses;

    const allTests = tests === "all";

    if (tests.length) {
      for (const { name, test } of testSuite) {
        if (allTests || tests.includes(name)) {
          addTest(name, test, supportsPrefix, unsupportedClasses);
        }
      }
    }
  }
};

export { init, addTest, testEnv };

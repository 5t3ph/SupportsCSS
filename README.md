# SupportsCSS

> Live, in-browser detection of modern CSS support for selectors, features, and at-rules. Applies support-based classes, exposes a results object, and allows custom tests.

Inspired by the legacy of [Modernizr](https://modernizr.com/), this script evaluates a user's browser for cutting-edge modern CSS support beyond the capabilities of `@supports`.

- Classes are added to `<html>` as either `supports-[feature]` or `no-[feature]`, allowing easier progressive enhancement and build strategies
- Checks for selectors like `:has()`, properties like `text-box-trim`, features like relative color syntax, and at-rules like `@layer` - [see full test suite](#test-suite)
- Allows adding custom tests
- Exposes a results object to iterate over detected support, as well as individual results for quick conditional checks in JS

> SupportsCSS is _not_ a polyfill, it is only feature detection. Continue using tools like [PostCSS](https://postcss.org/) or [LightningCSS](https://lightningcss.dev/) for prefixing and other features like syntax lowering. SupportsCSS is a layer on top of those tools.

## Installation & Usage

Review the full docs at [SupportsCSS.dev](https://supportscss.dev).

## Test Suite

| Feature Class | Global Name | Test Condition |
|---|---|---|
| at-container | AtContainer | `window.CSSContainerRule` |
| at-container-style-properties | AtContainerStyleProperties | * [See explanation](#atcontainerstyleproperties-test) |
| at-counter-style | AtCounterStyle | `window.CSSCounterStyleRule` |
| at-layer | AtLayer | `window.CSSLayerBlockRule` |
| at-property | AtProperty | `window.CSSPropertyRule` |
| at-scope | AtScope | `window.CSSScopeRule` |
| anchor-positioning | AnchorPositioning | `CSS.supports('anchor-name: --a')` |
| color-function | ColorFunction | `CSS.supports('color: color(srgb 0 0 1)')` |
| color-mix | ColorMix | `CSS.supports('color: color-mix(in lch, white, black)')` |
| container-units | ContainerUnits | `CSS.supports('width: 1cqi')` |
| dynamic-viewport-units | DynamicViewportUnits | `CSS.supports('width: 1dvi')` |
| has | Has | `CSS.supports('selector(:has(+ *))')` <br>(_Possible false positive in Firefox 112_) |
| houdini-paint-api | HoudiniPaintApi | `window.CSS.paintWorklet` |
| individual-transforms | IndividualTransforms | `CSS.supports('transform: scale(1)')` |
| logical-properties | LogicalProperties | `CSS.supports('border-start-start-radius: 1px')` |
| media-range-syntax | MediaRangeSyntax | `window.matchMedia('(width >= 1px)')` |
| nesting | Nesting | `CSS.supports('selector(& a)')` |
| nth-of-s | NthOfS | `CSS.supports('selector(:nth-child(1 of .a))')` |
| overscroll-behavior | OverscrollBehavior | `CSS.supports('overscroll-behavior: none')` |
| relative-color-syntax | RelativeColorSyntax | `CSS.supports('color: rgb(from red r g b / 1%)')` |
| scroll-timeline | ScrollTimeline | `CSS.supports('scroll-timeline-name: --a')` |
| subgrid | Subgrid | `CSS.supports('grid-template-rows: subgrid')` |
| text-box-trim | TextBoxTrim | `CSS.supports('text-box-trim: both')` |
| trigonometry | Trigonometry | `CSS.supports('width: calc(1px * cos(1deg))')` |
| user-invalid | UserInvalid | `CSS.supports('selector(:user-invalid)')` |
| user-valid | UserValid | `CSS.supports('selector(:user-valid)')` |
| view-timeline | ViewTimeline | `CSS.supports('view-timeline-name: --a'),` |
| view-transitions | ViewTransitions | `window.ViewTransition` |


### How were these features selected?

Features were selected based on:

- `@supports` limitations
- instability of the spec
- freshness to the language
- impact on CSS architecture
- impact on progressive enhancement

## Colophon

Created by [Stephanie Eckles](https://front-end.social/@5t3ph), author of [ModernCSS.dev](https://moderncss.dev), [SmolCSS.dev](https://smolcss.dev), and other [front-end dev resources](https://thinkdobecreate.com).
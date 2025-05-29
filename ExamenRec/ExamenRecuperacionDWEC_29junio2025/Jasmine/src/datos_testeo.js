const DATOS = [
  { kebabCase: "background-color", camelCase: "backgroundColor" },
  { kebabCase: "font-size", camelCase: "fontSize" },
  { kebabCase: "border-radius", camelCase: "borderRadius" },
  { kebabCase: "text-align", camelCase: "textAlign" },
  { kebabCase: "margin-top", camelCase: "marginTop" },
  { kebabCase: "padding-left", camelCase: "paddingLeft" },
  { kebabCase: "box-shadow", camelCase: "boxShadow" },
  { kebabCase: "line-height", camelCase: "lineHeight" },
  { kebabCase: "max-width", camelCase: "maxWidth" },
  { kebabCase: "min-height", camelCase: "minHeight" },
  { kebabCase: "grid-template-columns", camelCase: "gridTemplateColumns" },
  { kebabCase: "animation-duration", camelCase: "animationDuration" },
  { kebabCase: "flex-direction", camelCase: "flexDirection" },
  { kebabCase: "align-items", camelCase: "alignItems" },
  { kebabCase: "justify-content", camelCase: "justifyContent" },
  { kebabCase: "transition-timing-function", camelCase: "transitionTimingFunction" },
  { kebabCase: "scroll-behavior", camelCase: "scrollBehavior" },
  { kebabCase: "pointer-events", camelCase: "pointerEvents" },
  { kebabCase: "z-index", camelCase: "zIndex" },
  { kebabCase: "clip-path", camelCase: "clipPath" }
];

function kebabToCamel(kebabCase) {
  if (!kebabCase) {
    throw new Error ("La palabra/frase debe ser kebabCase")
  } else {
    return camelCase;
  }
}

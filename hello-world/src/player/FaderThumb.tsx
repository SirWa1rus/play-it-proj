import React from "react";

const grooveSpecs = [
  { top: 10, width: "70%" },  // shortest (top)
  { top: 15, width: "75%" },
  { top: 20, width: "80%" },
  { top: 25, width: "85%" },
  { top: 30, width: "90%" },
  { top: 35, width: "95%" },  // longest (center-top)
  { top: 40, width: "95%" }, // longest (center)
  { top: 45, width: "95%" },  // longest (center-bottom)
  { top: 50, width: "90%" },
  { top: 55, width: "85%" },
  { top: 60, width: "80%" },
  { top: 65, width: "75%" },
  { top: 70, width: "70%" },  // shortest (bottom)
];

const FaderThumb = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  ({ style, ...rest }, ref) => (
    <div
  ref={ref}
  style={{
    ...style,
    width: 50,
    height: 80,
    background: "linear-gradient(to bottom, #444 0%, #1a1a1a 100%)",
    borderRadius: "9px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)",
    position: "relative",
    zIndex: 5,
    opacity: 1,
  }}
  {...rest}
>
  {/* Grooves */}
  {grooveSpecs.map((spec, i) => (
    <div
      key={i}
      style={{
        position: "absolute",
        left: `calc(50% - ${parseInt(spec.width) / 2}%)`,
        width: spec.width,
        height: "3px",
        top: `${spec.top}px`,
        background: "#000000",
        borderRadius: "2px",
        opacity: 1,
      }}
    />
  ))}
</div>
  )
);

export default FaderThumb;
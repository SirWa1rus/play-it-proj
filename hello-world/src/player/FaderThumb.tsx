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
    marginLeft: '-9px',
    background: "linear-gradient(to bottom, #191717 0%, #444 100%)",
    borderRadius: "9px",
    boxShadow: "2px 0 12px #0008",
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
        opacity: 0.7,
      }}
    />
  ))}
  {/* Outline ring */}
  <svg
    width={50}
    height={80}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      zIndex: 3,
    }}
  >
    <polyline
      fill="none"
      stroke="#1f1c1c"
      strokeWidth="2"
      points={
        grooveSpecs.map(spec => {
          const w = (parseInt(spec.width) / 100) * 50;
          const x = 25 - w / 2;
          return `${x},${spec.top}`;
        }).join(" ") +
        " " +
        grooveSpecs.slice().reverse().map(spec => {
          const w = (parseInt(spec.width) / 100) * 50;
          const x = 25 + w / 2;
          return `${x},${spec.top}`;
        }).join(" ")
      }
    />
  </svg>
</div>
  )
);

export default FaderThumb;
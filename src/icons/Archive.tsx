/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="32" y="48" width="192" height="48" rx="7.99999" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M208,96V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="104" y1="136" x2="152" y2="136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M208,96V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96Z" opacity="0.2"/>
  <rect x="32" y="48" width="192" height="48" rx="7.99999" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M208,96V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="104" y1="136" x2="152" y2="136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V88a16.01833,16.01833,0,0,0,16,16v96a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V104a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40ZM152,144H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64-56H40V56H216l.00977,32Z"/>
        </>
      )
    case "light":
      return (
        <>
          <rect x="32" y="48" width="192" height="48" rx="7.99999" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M208,96V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="104" y1="136" x2="152" y2="136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <rect x="32" y="48" width="192" height="48" rx="7.99999" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M208,96V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="104" y1="136" x2="152" y2="136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <rect x="32" y="48" width="192" height="48" rx="7.99999" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M208,96V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="104" y1="136" x2="152" y2="136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Archive = (props: any, ref: any)  => {
  const { color, size, weight, mirrored, children, ...restProps } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...restContext
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...restContext}
      {...restProps}
    >
      {children}
      <rect width="256" height="256" fill="none"/>
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
};


export default Archive;

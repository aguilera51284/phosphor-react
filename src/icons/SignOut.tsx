/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline points="174.029 86 216.029 128 174.029 170" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="104" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M120,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polyline points="174.029 86 216.029 128 174.029 170" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="104" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M120,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <g>
    <path d="M221.68652,122.34277l-42-42a8.00018,8.00018,0,0,0-11.31347,11.31446L196.71582,120H104a8,8,0,0,0,0,16h92.71582l-28.34277,28.34277a8.00018,8.00018,0,0,0,11.31347,11.31446l42-42A8.0012,8.0012,0,0,0,221.68652,122.34277Z"/>
    <path d="M120,208H48V48h72a8,8,0,0,0,0-16H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16h72a8,8,0,0,0,0-16Z"/>
  </g>
        </>
      )
    case "light":
      return (
        <>
          <polyline points="174.029 86 216.029 128 174.029 170" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="104" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M120,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polyline points="174.029 86 216.029 128 174.029 170" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="104" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M120,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polyline points="174.029 86 216.029 128 174.029 170" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="104" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M120,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SignOut = (props: any, ref: any)  => {
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


export default SignOut;

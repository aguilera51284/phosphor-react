/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="92" y1="92" x2="196" y2="92" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="92" y1="128" x2="196" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="92" y1="164" x2="196" y2="164" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M32,208H216a20,20,0,0,0,20-20V56a8,8,0,0,0-8-8H60a8,8,0,0,0-8,8V188a20,20,0,0,1-40,0V80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M32,208a16,16,0,0,0,16-16V56a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a16,16,0,0,1-16,16Z" opacity="0.2"/>
  <line x1="88" y1="96" x2="192" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="128" x2="192" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="160" x2="192" y2="160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M32,208a16,16,0,0,0,16-16V56a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a16,16,0,0,1-16,16Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M32,208a16,16,0,0,1-16-16V80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M224,40H56A16.01833,16.01833,0,0,0,40,56V192a8,8,0,0,1-16,0V80A8,8,0,0,0,8,80V192.10645A24.02715,24.02715,0,0,0,32,216H216a24.0275,24.0275,0,0,0,24-24V56A16.01833,16.01833,0,0,0,224,40ZM192,168H88a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="88" y1="96" x2="192" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="88" y1="128" x2="192" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="88" y1="160" x2="192" y2="160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M32,208a16,16,0,0,0,16-16V56a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a16,16,0,0,1-16,16Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M32,208a16,16,0,0,1-16-16V80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="88" y1="96" x2="192" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="88" y1="128" x2="192" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="88" y1="160" x2="192" y2="160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M32,208a16,16,0,0,0,16-16V56a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a16,16,0,0,1-16,16Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M32,208a16,16,0,0,1-16-16V80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="88" y1="96" x2="192" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="128" x2="192" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="160" x2="192" y2="160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M32,208a16,16,0,0,0,16-16V56a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a16,16,0,0,1-16,16Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M32,208a16,16,0,0,1-16-16V80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Newspaper = (props: any, ref: any)  => {
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


export default Newspaper;

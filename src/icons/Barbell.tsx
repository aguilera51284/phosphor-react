/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="52" y="56" width="40" height="144" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="164" y="56" width="40" height="144" rx="8" stroke-width="24" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M48,176H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="92" y1="128" x2="164" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="48" y="56" width="40" height="144" rx="8" opacity="0.2"/>
  <rect x="168" y="56" width="40" height="144" rx="8" opacity="0.2"/>
  <rect x="48" y="56" width="40" height="144" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="168" y="56" width="40" height="144" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48,176H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M232,72H216V64a16.01833,16.01833,0,0,0-16-16H176a16.01833,16.01833,0,0,0-16,16v56H96V64A16.01833,16.01833,0,0,0,80,48H56A16.01833,16.01833,0,0,0,40,64v8H24A16.01833,16.01833,0,0,0,8,88v80a16.01833,16.01833,0,0,0,16,16H40v8a16.01833,16.01833,0,0,0,16,16H80a16.01833,16.01833,0,0,0,16-16V136h64v56a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16v-8h16a16.01833,16.01833,0,0,0,16-16V88A16.01833,16.01833,0,0,0,232,72ZM24,168V88H40v80Zm208,0H216V88h16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <rect x="48" y="56" width="40" height="144" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="168" y="56" width="40" height="144" rx="8" stroke-width="12" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M48,176H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <rect x="48" y="56" width="40" height="144" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="168" y="56" width="40" height="144" rx="8" stroke-width="8" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M48,176H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <rect x="48" y="56" width="40" height="144" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="168" y="56" width="40" height="144" rx="8" stroke-width="16" stroke={color} stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M208,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H208" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M48,176H24a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Barbell = (props: any, ref: any)  => {
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


export default Barbell;

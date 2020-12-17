/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="31.99995" y="48.00781" width="192" height="160" rx="8" transform="translate(256.00777 0.00786) rotate(90)" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="92" y1="76" x2="164" y2="76" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="104" cy="128" r="16"/>
  <circle cx="152" cy="128" r="16"/>
  <circle cx="104" cy="176" r="16"/>
  <circle cx="152" cy="176" r="16"/>
        </>
      )
    case "duotone":
      return (
        <>
          <rect x="80" y="64" width="96" height="48" opacity="0.2"/>
  <rect x="80" y="64" width="96" height="48" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="31.99995" y="48.00781" width="192" height="160" rx="8" transform="translate(256.00777 0.00786) rotate(90)" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="88" cy="148" r="12"/>
  <circle cx="128" cy="148" r="12"/>
  <circle cx="168" cy="148" r="12"/>
  <circle cx="88" cy="188" r="12"/>
  <circle cx="128" cy="188" r="12"/>
  <circle cx="168" cy="188" r="12"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M200,24.00781H56a16.01833,16.01833,0,0,0-16,16v176a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16v-176A16.01833,16.01833,0,0,0,200,24.00781ZM88,200a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,88,200Zm0-40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,88,160Zm40,40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,128,200Zm0-40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,128,160Zm40,40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,168,200Zm0-40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,168,160Zm16-56a7.99977,7.99977,0,0,1-8,8H80a7.99977,7.99977,0,0,1-8-8V64a7.99977,7.99977,0,0,1,8-8h96a7.99977,7.99977,0,0,1,8,8Z"/>
        </>
      )
    case "light":
      return (
        <>
          <rect x="80" y="64" width="96" height="48" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="31.99995" y="48.00781" width="192" height="160" rx="8" transform="translate(256.00777 0.00786) rotate(90)" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="88" cy="148" r="10"/>
  <circle cx="128" cy="148" r="10"/>
  <circle cx="168" cy="148" r="10"/>
  <circle cx="88" cy="188" r="10"/>
  <circle cx="128" cy="188" r="10"/>
  <circle cx="168" cy="188" r="10"/>
        </>
      )
    case "thin":
      return (
        <>
          <rect x="80" y="64" width="96" height="48" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="31.99995" y="48.00781" width="192" height="160" rx="8" transform="translate(256.00777 0.00786) rotate(90)" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="88" cy="148" r="8"/>
  <circle cx="128" cy="148" r="8"/>
  <circle cx="168" cy="148" r="8"/>
  <circle cx="88" cy="188" r="8"/>
  <circle cx="128" cy="188" r="8"/>
  <circle cx="168" cy="188" r="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <rect x="80" y="64" width="96" height="48" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="31.99995" y="48.00781" width="192" height="160" rx="8" transform="translate(256.00777 0.00786) rotate(90)" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="88" cy="148" r="12"/>
  <circle cx="128" cy="148" r="12"/>
  <circle cx="168" cy="148" r="12"/>
  <circle cx="88" cy="188" r="12"/>
  <circle cx="128" cy="188" r="12"/>
  <circle cx="168" cy="188" r="12"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Calculator = (props: any, ref: any)  => {
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


export default Calculator;

/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline points="94 170 136 128 94 86" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <line x1="23.97056" y1="128" x2="135.97056" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M120,40h72a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polyline points="94 170 136 128 94 86" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="23.97056" y1="128" x2="135.97056" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M120,40h72a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <g>
    <path d="M141.65674,122.34277l-42-42A8.00018,8.00018,0,0,0,88.34326,91.65723L116.686,120H23.9707a8,8,0,1,0,0,16H116.686L88.34326,164.34277a8.00018,8.00018,0,0,0,11.31348,11.31446l42-42A8.00034,8.00034,0,0,0,141.65674,122.34277Z"/>
    <path d="M192,32H120a8,8,0,0,0,0,16h72V208H120a8,8,0,0,0,0,16h72a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,192,32Z"/>
  </g>
        </>
      )
    case "light":
      return (
        <>
          <polyline points="94 170 136 128 94 86" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <line x1="23.97056" y1="128" x2="135.97056" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M120,40h72a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polyline points="94 170 136 128 94 86" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <line x1="23.97056" y1="128" x2="135.97056" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M120,40h72a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polyline points="94 170 136 128 94 86" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <line x1="23.97056" y1="128" x2="135.97056" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M120,40h72a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H120" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SignIn = (props: any, ref: any)  => {
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


export default SignIn;

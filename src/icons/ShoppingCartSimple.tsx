/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M40,64H214.41528a8,8,0,0,1,7.8711,9.43029l-16.71771,92A8,8,0,0,1,197.69756,172H66.38913a8,8,0,0,1-7.87021-6.56482L33.92441,30.56482A8,8,0,0,0,26.0542,24H12" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <circle cx="72" cy="220" r="20"/>
  <circle cx="192" cy="220" r="20"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M40,64H214.41528a8,8,0,0,1,7.8711,9.43029l-17.44457,96A8,8,0,0,1,196.97071,176H67.11856a8,8,0,0,1-7.87022-6.56481Z" opacity="0.2"/>
  <path d="M40,64H214.41528a8,8,0,0,1,7.8711,9.43029l-17.44457,96A8,8,0,0,1,196.97071,176H67.11856a8,8,0,0,1-7.87022-6.56481L33.92441,30.56482A8,8,0,0,0,26.0542,24H8" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="72" cy="216" r="16"/>
  <circle cx="192" cy="216" r="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <g>
    <circle cx="72" cy="216" r="16"/>
    <circle cx="192" cy="216" r="16"/>
    <path d="M226.69922,61.74805A15.95974,15.95974,0,0,0,214.415,56H46.69531L41.79492,29.12988A15.995,15.995,0,0,0,26.05371,16H8A8,8,0,0,0,8,32H26.05469L32.044,64.84717a8.04283,8.04283,0,0,0,.21679,1.18554L51.37793,170.87012A15.994,15.994,0,0,0,67.11816,184H196.9707a15.99217,15.99217,0,0,0,15.74219-13.13965l17.44434-95.99951A15.957,15.957,0,0,0,226.69922,61.74805Z"/>
  </g>
        </>
      )
    case "light":
      return (
        <>
          <path d="M40,64H214.41528a8,8,0,0,1,7.8711,9.43029l-17.44457,96A8,8,0,0,1,196.97071,176H67.11856a8,8,0,0,1-7.87022-6.56481L33.92441,30.56482A8,8,0,0,0,26.0542,24H8" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <circle cx="72" cy="216" r="14"/>
  <circle cx="192" cy="216" r="14"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M40,64H214.41528a8,8,0,0,1,7.8711,9.43029l-17.44457,96A8,8,0,0,1,196.97071,176H67.11856a8,8,0,0,1-7.87022-6.56481L33.92441,30.56482A8,8,0,0,0,26.0542,24H8" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <circle cx="72" cy="216" r="12"/>
  <circle cx="192" cy="216" r="12"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M40,64H214.41528a8,8,0,0,1,7.8711,9.43029l-17.44457,96A8,8,0,0,1,196.97071,176H67.11856a8,8,0,0,1-7.87022-6.56481L33.92441,30.56482A8,8,0,0,0,26.0542,24H8" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <circle cx="72" cy="216" r="16"/>
  <circle cx="192" cy="216" r="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ShoppingCartSimple = (props: any, ref: any)  => {
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


export default ShoppingCartSimple;

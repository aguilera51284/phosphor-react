/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z" opacity="0.2"/>
  <path d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M216,152a88,88,0,0,1-176,0c0-23.2168,7.68311-47.043,22.83545-70.81738a7.99928,7.99928,0,0,1,11.62842-2.03711l25.75537,19.84277,28.26221-77.72266a7.99985,7.99985,0,0,1,12.43017-3.58007C143.97754,20.06934,216,76.9502,216,152Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Fire = (props: any, ref: any)  => {
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


export default Fire;

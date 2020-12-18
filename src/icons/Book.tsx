/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline points="48 224 48 232 192 232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M48,224a32,32,0,0,1,32-32H208V32H72A24,24,0,0,0,48,56V224" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" opacity="0.2"/>
  <path d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="48 224 48 232 192 232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M207.99414,23.9971h-136a32.03667,32.03667,0,0,0-32,32v176a7.9954,7.9954,0,0,0,8,8h144a8,8,0,0,0,0-16h-136a16.01583,16.01583,0,0,1,16-16h136a7.99539,7.99539,0,0,0,8-8v-168A7.9954,7.9954,0,0,0,207.99414,23.9971Z"/>
        </>
      )
    case "light":
      return (
        <>
          <path d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="48 224 48 232 192 232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <path d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="48 224 48 232 192 232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <path d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="48 224 48 232 192 232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Book = (props: any, ref: any)  => {
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


export default Book;

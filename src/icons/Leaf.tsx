/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="160" y1="96" x2="24" y2="232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" opacity="0.2"/>
  <line x1="160" y1="96" x2="24" y2="232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <g>
    <path d="M39.209,211.792q-.80968-2.382-1.5249-4.78991L18.34326,226.34277a8.00018,8.00018,0,0,0,11.31348,11.31446L48.99805,218.3158q-2.40619-.71943-4.78955-1.52478A8.00059,8.00059,0,0,1,39.209,211.792Z"/>
    <path d="M216.791,44.2085A7.99794,7.99794,0,0,0,211.7915,39.209,135.76626,135.76626,0,0,0,168,32C93.00928,32,32,93.00928,32,168a135.916,135.916,0,0,0,5.68408,39.00208L154.34326,90.34326a7.99984,7.99984,0,0,1,11.31348,11.31348L48.99805,218.3158A135.92719,135.92719,0,0,0,88,224c74.99072,0,136-61.00977,136-136A135.76626,135.76626,0,0,0,216.791,44.2085Z"/>
  </g>
        </>
      )
    case "light":
      return (
        <>
          <line x1="160" y1="96" x2="24" y2="232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="160" y1="96" x2="24" y2="232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="160" y1="96" x2="24" y2="232" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <path d="M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Leaf = (props: any, ref: any)  => {
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


export default Leaf;

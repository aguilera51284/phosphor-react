/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line x1="216" y1="128" x2="40" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polyline points="112 56 40 128 112 200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <line x1="216" y1="128" x2="40" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="112 56 40 128 112 200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M117.65723,205.65674a8.00182,8.00182,0,0,0,0-11.31348L59.31348,136H216a8,8,0,0,0,0-16H59.31348l58.34375-58.34326a8.00018,8.00018,0,0,0-11.31446-11.31348l-72,72c-.02612.02588-.0476.05469-.07324.08106-.158.16211-.31128.32861-.45508.50341-.08032.09766-.15039.20118-.22534.30176-.081.1084-.16528.21485-.241.32764-.07788.11621-.1455.2373-.21679.35693-.06226.10449-.12793.20655-.18579.31446-.06421.12011-.1189.24414-.17676.36669-.054.11426-.11084.22657-.15942.34327-.04883.11816-.08838.23925-.13135.35937-.04541.126-.09375.251-.13282.37988-.03613.11963-.06274.24122-.09326.36231-.0332.13183-.07031.26269-.09692.397-.02759.13965-.04419.28028-.06421.42041-.01685.11817-.03931.23389-.051.353C32.01392,127.47314,32,127.73633,32,128s.01392.52686.03979.78955c.01172.11914.03418.23486.051.353.02.14013.03662.28076.06421.42041.02661.13428.06372.26513.09692.397.03052.12109.05713.24268.09326.36231.03907.1289.08741.2539.13282.37988.043.12012.08252.24121.13135.35937.04858.1167.10546.229.15942.34327.05786.12255.11255.24658.17676.36669.05786.10791.12353.21.18579.31446.07129.11963.13891.24072.21679.35693.07569.11279.15992.21924.241.32764.075.10058.145.2041.22534.30176.14624.17822.30225.34765.46338.51269.02271.023.04175.04883.06494.07178l72,72A8.00034,8.00034,0,0,0,117.65723,205.65674Z"/>
        </>
      )
    case "light":
      return (
        <>
          <line x1="216" y1="128" x2="40" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polyline points="112 56 40 128 112 200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <line x1="216" y1="128" x2="40" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polyline points="112 56 40 128 112 200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <line x1="216" y1="128" x2="40" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="112 56 40 128 112 200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowLeft = (props: any, ref: any)  => {
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


export default ArrowLeft;

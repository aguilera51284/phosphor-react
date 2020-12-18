/* GENERATED FILE */
import  { useContext  } from "solid-js";
import { IconContext } from "../lib";

const renderPathFor = (weight: string, color: string) => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline points="128 96 80 48 32 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
  <polyline points="224 192 80 192 80 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
        </>
      )
    case "duotone":
      return (
        <>
          <polyline points="128 96 80 48 32 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="224 192 80 192 80 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    case "fill":
      return (
        <>
          <path d="M224,184H88V67.3136l34.34277,34.34314a8.00018,8.00018,0,0,0,11.31446-11.31348l-48-48c-.01612-.01611-.03418-.02936-.0503-.04529-.17138-.16882-.34912-.33123-.53564-.48413-.09375-.07715-.19287-.14428-.28955-.21655-.11279-.08423-.22266-.17145-.33985-.24976-.11279-.07568-.23046-.14123-.34668-.21051-.10791-.06463-.21386-.1325-.32519-.1922-.1167-.06237-.23682-.11523-.356-.17144-.11767-.05579-.2334-.11444-.35449-.16455-.11377-.047-.22949-.08478-.34473-.12629-.13134-.04736-.26074-.09747-.395-.13806-.11377-.03436-.22949-.05938-.34423-.08862-.1377-.035-.27442-.07336-.41455-.10114-.13038-.02581-.26221-.04077-.39356-.06-.12695-.01862-.25195-.04236-.38086-.05494-.23193-.02282-.46484-.03271-.69824-.03527C80.05859,40.00415,80.02979,40,80,40s-.05859.00415-.08838.00446c-.2334.00256-.46631.01245-.69824.03527-.12891.01258-.25391.03632-.38086.05494-.13135.01928-.26318.03424-.39356.06-.14013.02778-.27685.06611-.41455.10114-.11474.02924-.23046.05426-.34423.08862-.13428.04059-.26368.0907-.395.13806-.11524.04151-.231.07929-.34473.12629-.12109.05011-.23682.10876-.35449.16455-.11914.05621-.23926.10907-.356.17144-.11133.0597-.21728.12757-.32519.1922-.11622.06928-.23389.13483-.34668.21051-.11719.07831-.22706.16553-.33985.24976-.09668.07227-.1958.1394-.28955.21655-.18652.1529-.36426.31531-.53564.48413-.01612.01593-.03418.02918-.0503.04529l-48,48a8.00018,8.00018,0,0,0,11.31446,11.31348L72,67.3136V192a8.00008,8.00008,0,0,0,8,8H224a8,8,0,0,0,0-16Z"/>
        </>
      )
    case "light":
      return (
        <>
          <polyline points="128 96 80 48 32 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
  <polyline points="224 192 80 192 80 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>
        </>
      )
    case "thin":
      return (
        <>
          <polyline points="128 96 80 48 32 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
  <polyline points="224 192 80 192 80 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
        </>
      )
    case "regular":
      return (
        <>
          <polyline points="128 96 80 48 32 96" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
  <polyline points="224 192 80 192 80 48" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </>
      )
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowElbowLeftUp = (props: any, ref: any)  => {
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


export default ArrowElbowLeftUp;

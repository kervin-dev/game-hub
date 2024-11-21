import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaNeos,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { SiAtari, SiCommodore, SiSega, SiWeb3Dotjs } from "react-icons/si";

interface Props {
  slug: string;
  color: string;
}

const PlatformIcon = ({ slug, color }: Props) => {
  return (
    <>
      {slug === "pc" && <FaWindows color={color} />}
      {slug === "playstation" && <FaPlaystation color={color} />}
      {slug === "xbox" && <FaXbox color={color} />}
      {slug === "mac" && <FaApple color={color} />}
      {slug === "linux" && <FaLinux color={color} />}
      {slug === "android" && <FaAndroid color={color} />}
      {slug === "ios" && <MdPhoneIphone color={color} />}
      {slug === "nintendo" && <BsNintendoSwitch color={color} />}
      {slug === "web" && <BsGlobe color={color} />}
      {slug === "atari" && <SiAtari color={color} />}
      {slug === "sega" && <SiSega color={color} />}
      {slug === "commodore-amiga" && <SiCommodore color={color} />}
      {slug === "neo-geo" && <FaNeos color={color} />}
      {slug === "3do" && <SiWeb3Dotjs color={color} />}
    </>
  );
};

export default PlatformIcon;

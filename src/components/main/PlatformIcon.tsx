import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";

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
    </>
  );
};

export default PlatformIcon;

import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import usePlatforms, { Platform } from "../../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "../ui/button";

const PlatformSelector = () => {
  const { data } = usePlatforms();

  return (
    <MenuRoot>
      {/* @ts-ignore */}
      <MenuTrigger asChild>
        <Button variant="subtle" size="sm">
          Platform
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      {/* @ts-ignore */}
      <MenuContent>
        {data.map((platform) => (
          // @ts-ignore
          <MenuItem key={platform.id} value={platform.slug}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;

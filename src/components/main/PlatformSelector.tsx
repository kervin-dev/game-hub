import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import usePlatforms, { Platform } from "../../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "../ui/button";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  setSelectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, setSelectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <MenuRoot>
      {/* @ts-ignore */}
      <MenuTrigger asChild>
        <Button variant="subtle" size="sm">
          {setSelectedPlatform?.name || "Platform"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      {/* @ts-ignore */}
      <MenuContent>
        {data.map((platform) => (
          // @ts-ignore
          <MenuItem
            key={platform.id}
            value={platform.slug}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;

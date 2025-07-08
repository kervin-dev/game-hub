import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../../hooks/usePlatforms";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { Button } from "../ui/button";
import usePlatformLookup from "../../hooks/usePlatformLookup";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatformLookup(selectedPlatformId);
  if (error) return null;
  return (
    <MenuRoot>
      {/* @ts-ignore */}
      <MenuTrigger asChild>
        <Button variant="subtle" size="sm">
          {selectedPlatform?.name || "Platform"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      {/* @ts-ignore */}
      <MenuContent>
        {data?.results.map((platform) => (
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

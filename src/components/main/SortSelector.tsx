import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (ordering: SortOrder) => void;
  sortOrder: SortOrder | null;
}

export interface SortOrder {
  id: number;
  name: string;
  slug: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders: SortOrder[] = [
    {
      id: 1,
      name: "Relevance",
      slug: "",
    },
    {
      id: 2,
      name: "Date added",
      slug: "-added",
    },
    {
      id: 3,
      name: "Name",
      slug: "name",
    },
    {
      id: 4,
      name: "Release date",
      slug: "-released",
    },
    {
      id: 5,
      name: "Popularity",
      slug: "-metacritic",
    },
    {
      id: 6,
      name: "Average rating",
      slug: "-rating",
    },
  ];
  return (
    <MenuRoot>
      {/* @ts-ignore */}
      <MenuTrigger asChild>
        <Button variant="subtle" size="sm">
          Order by: {sortOrder?.name || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      {/* @ts-ignore */}
      <MenuContent>
        {sortOrders.map((order) => (
          // @ts-ignore
          <MenuItem
            key={order.id}
            value={order.slug}
            onClick={() => onSelectSortOrder(order)}
          >
            {order.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;

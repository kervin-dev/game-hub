import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup flex="1" startElement={<BsSearch />} width={"100%"}>
        <Input
          ref={ref}
          placeholder="Search contacts"
          borderRadius="20px"
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

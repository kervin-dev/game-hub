import React from "react";
import { InputGroup } from "../ui/input-group";
import { LuSearch } from "react-icons/lu";
import { Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<BsSearch />}>
      <Input
        placeholder="Search contacts"
        borderRadius="20px"
        variant="subtle"
      />
    </InputGroup>
  );
};

export default SearchInput;

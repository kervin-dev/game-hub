import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";
import { Text } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";

const GenreList = () => {
  const { genres, error } = useGenre();

  return (
    <>
      {error && <Text className="text-danger"></Text>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;

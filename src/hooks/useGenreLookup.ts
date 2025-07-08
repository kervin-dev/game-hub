import useGenres from "./useGenres";

const useGenreLookup = (id?: number) => {
  const { data: fetchedGenres } = useGenres();
  return fetchedGenres?.results.find((genre) => genre.id === id);
};

export default useGenreLookup;

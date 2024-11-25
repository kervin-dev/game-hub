import usePlatforms from "./usePlatforms";

const usePlatformLookup = (id?: number) => {
  const { data: fetchedPlatforms } = usePlatforms();
  return fetchedPlatforms?.results.find((platform) => platform.id === id);
};

export default usePlatformLookup;

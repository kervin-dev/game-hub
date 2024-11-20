import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  const listSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;
  // For spinner loading animation
  // if (isLoading) return <Spinner size="lg" borderWidth={4} />;
  return (
    <>
      <List.Root variant={"plain"}>
        {/* For skeleton loading animation */}
        {isLoading &&
          listSkeleton.map((ls) => (
            <List.Item key={ls} paddingY={2}>
              <GenreListSkeleton />
            </List.Item>
          ))}
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={4}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};
{
}
export default GenreList;

import { Heading, HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { Button } from "../ui/button";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();
  const listSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;
  // For spinner loading animation
  // if (isLoading) return <Spinner size="lg" borderWidth={4} />;
  return (
    <>
      <Heading size="2xl" marginBottom={2} marginTop={5}>
        Genres
      </Heading>
      <List.Root variant={"plain"}>
        {/* For skeleton loading animation */}
        {isLoading &&
          listSkeleton.map((ls) => (
            <List.Item key={ls} paddingY={2}>
              <GenreListSkeleton />
            </List.Item>
          ))}
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={4}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit={"cover"}
              />
              <Button
                fontSize={selectedGenreId === genre.id ? "xl" : "lg"}
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                variant={"plain"}
                paddingX={"-1.5"}
                onClick={() => onSelectGenre(genre)}
                whiteSpace={"normal"}
                textAlign="left"
                maxWidth={"150px"}
              >
                {genre.name}
              </Button>
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

import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";

const GenreList = () => {
  const { data, error } = useGenre();

  return (
    <>
      {error && <Text className="text-danger"></Text>}
      <List.Root variant={"plain"}>
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

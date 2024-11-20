import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 80 ? "yellow" : "red";
  return (
    <Badge colorPalette={color} fontSize="md" paddingX={2} borderRadius={"sm"}>
      {score}
    </Badge>
  );
};

export default CriticScore;

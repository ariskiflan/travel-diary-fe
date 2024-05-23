import { Box, Image, Text } from "@chakra-ui/react";
import Candi from "../../assets/img/candi.png";
import { IArticle } from "../../types/app";
import BookmarkIcon from "../bookmark";

interface IArticleProps {
  item: IArticle;
}

const CardArticle: React.FC<IArticleProps> = ({ item }) => {
  return (
    <div>
      <Box bg={"#fff"} rounded={"10px"} pos={"relative"}>
        <Image src={Candi} width={"300px"}></Image>
        <Box p={"20px"}>
          <Box mb={"10px"}>
            <Text color={"000"} fontSize={"18px"} fontWeight={700}>
              {item.title}
            </Text>
            <Text color={"#BFBFBF"} fontSize={"14px"} fontWeight={400}>
              {item.createdAt}
            </Text>
          </Box>

          <Text
            color={"#6C6C6C"}
            fontSize={"14px"}
            fontWeight={400}
            textAlign={"justify"}
          >
            {item.content}
          </Text>
        </Box>

        <BookmarkIcon item={item} />
      </Box>
    </div>
  );
};

export default CardArticle;

import { Box, Text } from "@chakra-ui/react";
import Navbar from "../components/navbar/Index";
import CardArticle from "../components/cardArticle/Index";
import { useEffect, useState } from "react";
import { IArticle } from "../types/app";
import { getArticles } from "../libs/api/call/article";

const Bookmark = () => {
  const [articles, setarticles] = useState<IArticle[] | []>([]);
  console.log(articles);

  const getArticle = async () => {
    try {
      const res = await getArticles();

      setarticles(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div>
      <Box bgColor={"#EDEDED"} pb={"50px"}>
        <Navbar />

        <Box width={"1200px"} margin={"auto"} marginTop={"30px"}>
          <Text fontSize={"40px"} fontWeight={700}>
            Bookmark
          </Text>

          <Box
            display={"grid"}
            gridTemplateColumns={"repeat(4, 1fr)"}
            mt={"30px"}
            gap={"30px"}
          >
            {articles.map((item) => (
              <CardArticle key={item.id} item={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Bookmark;

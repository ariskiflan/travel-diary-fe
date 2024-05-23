import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import CardArticle from "../components/cardArticle/Index";

import Navbar from "../components/navbar/Index";
import { useEffect, useState } from "react";
import { getArticles } from "../libs/api/call/article";
import { IArticle } from "../types/app";

const Home = () => {
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
    <Box bgColor={"#EDEDED"} pb={"50px"}>
      <Navbar />

      <Box width={"1200px"} margin={"auto"} marginTop={"30px"}>
        <Text fontSize={"40px"} fontWeight={700}>
          Journey
        </Text>

        <Box width={"90%"} margin={"auto"} mt={"30px"}>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              placeholder="Find Journey"
              color={"#909090"}
              fontSize={"20px"}
              bg={"#FFFFFF"}
            />
            <InputRightElement width="4.5rem">
              <Button h="40px" w={"100%"} size="sm" bg={"#2E86DE"}>
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

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
  );
};

export default Home;

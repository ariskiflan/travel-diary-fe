import { Avatar, Box, Text } from "@chakra-ui/react";
import CardArticle from "../components/cardArticle/Index";
import Navbar from "../components/navbar/Index";
import Luffy from "../assets/img/luffy.jpg";
import { useEffect, useState } from "react";
import { getArticles } from "../libs/api/call/article";
import { IArticle } from "../types/app";

const Profile = () => {
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
            Profile
          </Text>
          <Box margin={"auto"} mt={"30px"} textAlign={"center"}>
            <Avatar src={Luffy} size={"xl"}></Avatar>
            <Text color={"#000"} fontSize={"20px"} fontWeight={"700"}>
              Luffy
            </Text>
            <Text color={"#6C6C6C"} fontSize={"14px"} fontWeight={"400"}>
              luffy@mail.com
            </Text>
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
    </div>
  );
};

export default Profile;

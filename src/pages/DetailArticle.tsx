import { Box, Image, Text } from "@chakra-ui/react";
import Navbar from "../components/navbar/Index";
import Candi from "../assets/img/candi.png";

const DetailArticle = () => {
  return (
    <div>
      <Box bgColor={"#EDEDED"} pb={"50px"}>
        <Navbar />

        <Box width={"1200px"} margin={"auto"} marginTop={"30px"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            mt={"30px"}
            alignItems={"center"}
          >
            <Text fontSize={"30px"} fontWeight={700}>
              Bersemayam di Tanah Dewata
            </Text>
            <Text color={"#000"} fontSize={"20px"} fontWeight={"600"}>
              Luffy
            </Text>
          </Box>

          <Text
            color={"#6C6C6C"}
            fontSize={"16px"}
            fontWeight={"400"}
            mb={"30px"}
          >
            17 October 2020
          </Text>

          <Box>
            <Image src={Candi} width={"100%"} objectFit={"cover"}></Image>
          </Box>

          <Box mt={"30px"}>
            <Text
              color={"#6C6C6C"}
              fontSize={"18px"}
              fontWeight={"400"}
              mb={"30px"}
            >
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>

            <Text
              color={"#000"}
              fontSize={"24px"}
              fontWeight={"700"}
              mb={"30px"}
            >
              Bersemayam Di Tanah Dewata Kedua
            </Text>

            <Text
              color={"#6C6C6C"}
              fontSize={"18px"}
              fontWeight={"400"}
              mb={"30px"}
            >
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>

            <Text color={"#6C6C6C"} fontSize={"18px"} fontWeight={"400"}>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default DetailArticle;

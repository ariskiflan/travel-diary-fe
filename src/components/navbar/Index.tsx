import { Box, Image, Text } from "@chakra-ui/react";
import Atlas from "../../assets/img/atlas 1.png";

import PopOver from "../popOver/Index";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box
        boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        height={"60px"}
        px={"80px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} gap={"5px"}>
          <Link to={"/home"}>
            <Text
              fontSize={"24px"}
              fontWeight={400}
              fontStyle={"italic"}
              color={"#000"}
            >
              The Journey
            </Text>
          </Link>
          <Image src={Atlas} width={"35px"} />
        </Box>
        <Box>
          <PopOver />
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;

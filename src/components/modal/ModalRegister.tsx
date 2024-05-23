import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Input,
  FormControl,
  Text,
  FormHelperText,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import Leaf from "../../assets/img/leaf 1.png";
import Maps from "../../assets/img/002   Book Maps.png";
import { ChangeEvent, useState } from "react";
import { IRegister } from "../../types/app";
import { register } from "../../libs/api/call/user";

const ModalRegister = () => {
  const [formInput, setFormInput] = useState<IRegister>({
    phone: "",
    password: "",
    email: "",
    fullname: "",
  });

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await register(formInput);
      console.log(res);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {" "}
      <Button
        onClick={onOpen}
        width={"120px"}
        height={"40px"}
        bg={"#2E86DE"}
        rounded={"10px"}
        color={"#FFFFFF"}
      >
        Register
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box my={"30px"}>
              <Box pos={"absolute"} top={"0"} right={"0"}>
                <Image src={Leaf} width={"90px"}></Image>
              </Box>

              <Box pos={"absolute"} top={"0"} left={"0"}>
                <Image src={Maps} width={"50px"}></Image>
              </Box>

              <Text
                color={"#000"}
                fontSize={"28px"}
                mb={"20px"}
                fontWeight={"700"}
                textAlign={"center"}
              >
                Register
              </Text>

              <form onSubmit={handleRegister}>
                <FormControl>
                  <Box display={"flex"} flexDir={"column"} gap={"10px"}>
                    <Box>
                      <FormLabel color={"#000"}>Fullname</FormLabel>
                      <Input
                        onChange={handleChange}
                        rounded={"md"}
                        color={"#000"}
                        bg={"#D2D2D2"}
                        px={"10px"}
                        height={"30px"}
                        placeholder="Fullname"
                        type="text"
                        name="fullname"
                      />
                    </Box>

                    <Box>
                      <FormLabel color={"#000"}>Email</FormLabel>
                      <Input
                        onChange={handleChange}
                        rounded={"md"}
                        color={"#000"}
                        bg={"#D2D2D2"}
                        px={"10px"}
                        height={"30px"}
                        placeholder="Email"
                        type="text"
                        name="email"
                      />
                    </Box>

                    <Box>
                      <FormLabel color={"#000"}>Password</FormLabel>
                      <Input
                        onChange={handleChange}
                        rounded={"md"}
                        color={"#000"}
                        bg={"#D2D2D2"}
                        px={"10px"}
                        height={"30px"}
                        placeholder="Password"
                        type="text"
                        name="password"
                      />
                    </Box>

                    <Box>
                      <FormLabel color={"#000"}>Phone</FormLabel>
                      <Input
                        onChange={handleChange}
                        rounded={"md"}
                        color={"#000"}
                        bg={"#D2D2D2"}
                        px={"10px"}
                        height={"30px"}
                        placeholder="Phone"
                        type="text"
                        name="phone"
                      />
                    </Box>

                    <Button
                      type="submit"
                      px={"3px"}
                      py={"4px"}
                      rounded={"full"}
                      width={"100%"}
                      height={"30px"}
                      fontSize={"18px"}
                      bg={"#2E86DE"}
                      color={"#fff"}
                      //   _hover={{ bg: "#fff", color: "#04A51E" }}
                    >
                      Register
                    </Button>

                    <Box display={"flex"} justifyContent={"center"}>
                      <FormHelperText
                        color={"#B1B1B1"}
                        fontSize={"18px"}
                        fontWeight={"400"}
                        cursor={"pointer"}
                      >
                        have an account? {""}
                      </FormHelperText>
                      <FormHelperText
                        color={"#B1B1B1"}
                        fontSize={"18px"}
                        fontWeight={"700"}
                        cursor={"pointer"}
                      >
                        Login
                      </FormHelperText>
                    </Box>
                  </Box>
                </FormControl>
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalRegister;

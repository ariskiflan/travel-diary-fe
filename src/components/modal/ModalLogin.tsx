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
import { ChangeEvent, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Leaf from "../../assets/img/leaf 1.png";
import Maps from "../../assets/img/002   Book Maps.png";
import { ILogin } from "../../types/app";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { loginAsync } from "../../store/async/auth";

const ModalLogin = () => {
  const [formInput, setFormInput] = useState<ILogin>({
    password: "",
    fullname: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = (await dispatch(loginAsync(formInput))).payload;

      navigate("/home");

      console.log(token);
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

  const [showPassword, setShowPassword] = useState(false);

  const togleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      {" "}
      <Button
        onClick={onOpen}
        width={"120px"}
        height={"40px"}
        bg={"transparent"}
        rounded={"10px"}
        color={"#FFFFFF"}
        boxShadow={"inset 0px 0px 0px 1px #FFFFFF"}
      >
        Login
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
                Login
              </Text>

              <form onSubmit={handleLogin}>
                <FormControl>
                  <Box display={"flex"} flexDir={"column"} gap={"20px"}>
                    <Box>
                      <FormLabel color={"#000"}>Email/fullname</FormLabel>
                      <Input
                        onChange={handleChange}
                        rounded={"md"}
                        color={"#000"}
                        bg={"#D2D2D2"}
                        px={"10px"}
                        height={"30px"}
                        placeholder="Email"
                        type="text"
                        name="fullname"
                      />
                    </Box>

                    <Box position={"relative"}>
                      <FormLabel color={"#000"}>Password</FormLabel>
                      <Input
                        onChange={handleChange}
                        rounded={"md"}
                        placeholder="Password*"
                        color={"#000"}
                        bg={"#D2D2D2"}
                        px={"10px"}
                        height={"30px"}
                        type={showPassword ? "text" : "password"}
                        name="password"
                      />

                      <Box
                        onClick={togleShowPassword}
                        position={"absolute"}
                        top={"32px"}
                        right={"10px"}
                        p={"5px"}
                        cursor={"pointer"}
                      >
                        {showPassword ? (
                          <FaRegEye size={"18px"} color={"#000"} />
                        ) : (
                          <FaRegEyeSlash size={"18px"} color={"#000"} />
                        )}
                      </Box>
                    </Box>

                    <Button
                      type="submit"
                      px={"3px"}
                      py={"4px"}
                      rounded={"full"}
                      width={"100%"}
                      height={"30px"}
                      fontSize={"24px"}
                      bg={"#2E86DE"}
                      color={"#fff"}
                      //   _hover={{ bg: "#fff", color: "#04A51E" }}
                    >
                      Login
                    </Button>

                    <Box display={"flex"} justifyContent={"center"}>
                      <FormHelperText
                        color={"#B1B1B1"}
                        fontSize={"18px"}
                        fontWeight={"400"}
                        cursor={"pointer"}
                      >
                        Don't have an account yet?
                      </FormHelperText>{" "}
                      <FormHelperText
                        color={"#B1B1B1"}
                        fontSize={"18px"}
                        fontWeight={"700"}
                        cursor={"pointer"}
                      >
                        Register
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

export default ModalLogin;

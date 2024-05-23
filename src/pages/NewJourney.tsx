import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Navbar from "../components/navbar/Index";
import "global";
import draftToHtml from "draftjs-to-html";

const NewJourney = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (newEditorState: any) => {
    setEditorState(newEditorState);
  };

  const onSaveClick = () => {
    // Mengonversi konten editor menjadi format JSON
    const content = convertToRaw(editorState.getCurrentContent());
    console.log(content);
    // Lakukan sesuatu dengan konten, seperti mengirim ke server
  };

  return (
    <>
      <Box bgColor={"#EDEDED"} pb={"50px"}>
        <Navbar />

        <Box width={"1200px"} margin={"auto"} marginTop={"30px"}>
          <Text fontSize={"40px"} fontWeight={700}>
            New Journey
          </Text>

          <Box>
            <Box my={"30px"}>
              <form>
                <FormControl>
                  <Box
                    display={"flex"}
                    flexDir={"column"}
                    gap={"20px"}
                    width={"1000px"}
                    margin={"auto"}
                  >
                    <Box>
                      <FormLabel color={"#000"} fontSize={"20px"}>
                        Image
                      </FormLabel>
                      <Input
                        type="file"
                        rounded={"md"}
                        color={"#000"}
                        bg={"#fff"}
                        px={"10px"}
                        height={"40px"}
                        name="image"
                      />
                    </Box>

                    <Box>
                      <FormLabel color={"#000"} fontSize={"20px"}>
                        Title
                      </FormLabel>
                      <Input
                        rounded={"md"}
                        color={"#000"}
                        bg={"#fff"}
                        px={"10px"}
                        height={"40px"}
                        type="text"
                        name="username"
                      />
                    </Box>

                    <Box bg={"#fff"} height={"200px"}>
                      <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                      />
                    </Box>

                    <Box
                      display={"flex"}
                      justifyContent={"flex-end"}
                      mt={"10px"}
                    >
                      <Button
                        onClick={onSaveClick}
                        px={"2px"}
                        py={"3px"}
                        rounded={"full"}
                        width={"106px"}
                        height={"40px"}
                        fontSize={"12px"}
                        bg={"#2E86DE"}
                        color={"#fff"}
                        borderColor={"#fff"}
                        border={"1px"}
                        // _hover={{ bg: "#fff", color: "#3f3f3f" }}
                      >
                        Post
                      </Button>
                    </Box>
                    {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                  </Box>
                </FormControl>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewJourney;

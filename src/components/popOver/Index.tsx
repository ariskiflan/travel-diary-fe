import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  Avatar,
  Text,
} from "@chakra-ui/react";
import Luffy from "../../assets/img/luffy.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { SET_LOGOUT } from "../../store/slice/auth";

const PopOver = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(SET_LOGOUT());
    navigate("/");
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Avatar src={Luffy} size={"md"}></Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            {" "}
            <Link to={"/profile"}>Profile</Link>!
          </PopoverHeader>
          <PopoverHeader>
            {" "}
            <Link to={"/newJourney"}>New Journey</Link>!
          </PopoverHeader>
          <PopoverHeader>
            {" "}
            <Link to={"/bookmark"}>Bookmark</Link>!
          </PopoverHeader>

          <PopoverHeader>
            {" "}
            <Text cursor={"pointer"} onClick={handleLogout}>
              Logout
            </Text>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PopOver;

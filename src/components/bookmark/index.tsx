import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import {
  createBookmark,
  getCurrentBookmarks,
} from "../../libs/api/call/bookmark";
import { IArticle } from "../../types/app";
import { FaBookmark } from "react-icons/fa6";

interface IBookmarProps {
  item: IArticle;
}

const BookmarkIcon: React.FC<IBookmarProps> = ({ item }) => {
  const [bookmark, setBookmark] = useState(false);

  const getCurrentBookmark = async () => {
    try {
      const res = await getCurrentBookmarks(item.id);
      console.log(res);

      setBookmark(res.data.data.bookmark === null ? false : true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBookmark = async () => {
    try {
      await createBookmark(item.id);

      await getCurrentBookmark();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentBookmark();
  }, []);

  return (
    <div>
      <Box
        onClick={() => handleBookmark()}
        pos={"absolute"}
        right={"10px"}
        top={"10px"}
        width={"40px"}
        height={"40px"}
        rounded={"100%"}
        bg={"#fff"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {bookmark ? <FaBookmark size={"24px"} /> : <CiBookmark size={"24px"} />}
      </Box>
    </div>
  );
};

export default BookmarkIcon;

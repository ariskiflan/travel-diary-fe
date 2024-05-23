import apiConfig from "..";

export const createBookmark = async (articleId: number) => {
  return await apiConfig.post(
    "bookmark",
    { articleId },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};

export const getCurrentBookmarks = async (articleId: number) => {
  return await apiConfig.get(`bookmark/${articleId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

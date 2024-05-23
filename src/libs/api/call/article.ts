import apiConfig from "..";

export const getArticles = async () => {
  return await apiConfig.get("articles");
};

export const createArticle = async () => {
  return await apiConfig.post("article");
};

// export const createThreads = async (body: {
//   content: string;
//   image: FileList | null;
//   threadId?: number;
// }) => {
//   const formData = new FormData();
//   formData.append("title", title);
//   formData.append("content", content);
//   formData.append("image", image);

//   return await apiConfig.post("thread", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
// };

export interface IRegister {
  email: string;
  fullname: string;
  phone: string;
  password: string;
}

export interface ILogin {
  fullname: string;
  password: string;
}

export interface IArticle {
  title: string;
  image: string;
  content: string;
  id: number;
  createdAt: string;
}

export interface IBookmark {
  articleId: number;
  userId: number;
}

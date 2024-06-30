// types.ts
export interface UserType {
  id: number;
  name: string;
}

export interface CommentType {
  id: number;
  text: string;
  userId: number;
  userName: string;
}

export interface PostType {
  id: number;
  title: string;
  description: string;
  likes: number;
  userId: number;
  userName: string;
  resumeLink: string;
  comments: CommentType[];
}

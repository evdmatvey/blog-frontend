export interface User {
  id: string;
  email: string;
  nickname: string;
  password: string;
  desc: string;
  avatar: string;
  role: 'user' | 'author' | 'admin';
  createdAt?: Date;
  updatedAt?: Date;
}

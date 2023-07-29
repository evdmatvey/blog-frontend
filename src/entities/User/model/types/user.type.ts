import { UserRole } from './user-role.type';

export interface User {
  id: string;
  email: string;
  nickname: string;
  password: string;
  desc: string;
  avatar: string;
  role: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
}

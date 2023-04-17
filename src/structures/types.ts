import { CreationCategory, Exception, Role } from '@/structures/enums';

export type ErrorResponse = {
  data: {
    status: number;
    message: Exception;
    error?: string;
  };
};

export type SignUpData = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type AccessTokenResponse = {
  accessToken: string;
};

export type User = {
  id: number;
  email: string;
  name: string;
  signUpDate: Date;
  isLock: boolean;
  roles: Role[];
  reviews?: Review[];
};

export type Creation = {
  id: number;
  title: string;
  category: CreationCategory;
  reviews?: Review[];
};

export type Review = {
  id: number;
  user?: User;
  userId: number;
  creation?: Creation;
  creationId: number;
  title: string;
  body: string;
  grade: number;
  createDate: Date;
};

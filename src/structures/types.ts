import { CreationCategory, Exception, Role } from '@/structures/enums';

export type ErrorMessage = {
  message: Exception;
};

export type ResponseError = {
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
  _count?: {
    reviews?: number;
  };
};

export type Creation = {
  id: number;
  title: string;
  description: string;
  category: CreationCategory;
  reviews?: Review[];
};

export type Tag = {
  id: number;
  name: string;
  reviews?: Review[];
};

export type ReviewImage = {
  id: number;
  reviewId: number;
  fileId: string;
  url: string;
  review?: Review;
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
  tags?: Tag[];
  images?: ReviewImage[];
};

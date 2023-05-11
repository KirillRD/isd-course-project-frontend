import { CreationCategory, Role } from '@/structures/enums';

export type User = {
  id: number;
  email: string;
  name: string;
  signUpDate: Date;
  isLock: boolean;
  roles: Role[];
  reviews?: Review[];
  reviewLikes?: Review[];
  creationRatings?: CreationRating[];
  reviewComments?: ReviewComment[];
  _count?: {
    reviews?: number;
    reviewLikes?: number;
  };
};

export type Creation = {
  id: number;
  title: string;
  description: string;
  imageId: string;
  imageUrl: string;
  category: CreationCategory;
  reviews?: Review[];
  ratings?: CreationRating[];
  _count?: {
    reviews?: number;
  };
  averageRating?: number;
};

export type Tag = {
  value: string | string[];
  id: number;
  name: string;
  reviews?: Review[];
  _count?: {
    reviews?: number;
  };
};

export type ReviewImage = {
  id: number;
  reviewId: number;
  fileId: string;
  url: string;
  review?: Review;
};

export type CreationRating = {
  creationId: number;
  userId: number;
  rating: number;
  creation?: Creation;
  user?: User;
};

export type ReviewComment = {
  id: number;
  reviewId: number;
  userId: number;
  comment: string;
  createDate: Date;
  review?: Review;
  user?: User;
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
  userLikes?: User[];
  comments?: ReviewComment[];
  _count?: {
    userLikes?: number;
    comments?: number;
  };
};

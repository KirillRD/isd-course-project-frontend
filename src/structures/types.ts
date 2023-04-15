import { Exception, Role } from '@/structures/enums';

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
  signupDate: Date;
  isLock: boolean;
  roles: Role[];
};

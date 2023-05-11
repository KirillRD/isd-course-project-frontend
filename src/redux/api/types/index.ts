import { Exception } from '@/structures/enums';

export type ErrorResponse = {
  data: {
    status: number;
    message: Exception;
    error?: string;
  };
};

export type AccessTokenResponse = {
  accessToken: string;
};

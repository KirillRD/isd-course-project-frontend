export enum Theme {
  LIGHT = '/themes/saga-blue/theme.css',
  DARK = '/themes/arya-blue/theme.css',
}

export enum Language {
  EN = 'en',
  RU = 'ru',
}

export enum PagePath {
  HOME = '/',
  LOGIN = '/login',
  SIGN_UP = '/sign-up',
  NOT_FOUND = '/not-found',
  PROFILE = '/profile',
  ACCESS_DENIED = '/access-denied',
  USERS = '/users',
  CREATE = '/create',
  UPDATE = '/update',
  SELECT = '/select',
  CREATIONS = '/creations',
  REVIEWS = '/reviews',

  ANY = '*',
}

export enum ApiEndpoint {
  SIGN_UP = 'auth/sign-up',
  LOGIN = 'auth/login',
  LOGOUT = 'auth/refresh-token/logout',
  PROFILE = 'auth/profile',
  CSRF_TOKEN = 'auth/csrf-token',
  REFRESH_TOKENS = 'auth/refresh-token/refresh-tokens',

  USERS = 'users',
  CREATIONS = 'creations',
  REVIEWS = 'reviews',
  TAGS = 'tags',
  LIKES = 'likes',
  CREATION_RATINGS = 'creation-ratings',
  REVIEW_COMMENTS = 'review-comments',
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum RoleColor {
  USER = 'bg-gray-300',
  ADMIN = 'bg-red-300',
}

export enum CreationCategory {
  MOVIES = 'MOVIES',
  TV = 'TV',
  BOOKS = 'BOOKS',
  MUSIC = 'MUSIC',
  GAMES = 'GAMES',
}

export enum Exception {
  USER_EMAIL_EXISTS = 'USER_EMAIL_EXISTS',
  USER_CREDENTIAL_INVALID = 'USER_CREDENTIAL_INVALID',
  USER_IS_LOCK = 'USER_IS_LOCK',
  USER_ROLE_ACCESS_DENIED = 'USER_ROLE_ACCESS_DENIED',

  CREATION_TITLE_AND_CATEGORY_EXISTS = 'CREATION_TITLE_AND_CATEGORY_EXISTS',

  REVIEW_GRADE_INVALID_FORMAT = 'REVIEW_GRADE_INVALID_FORMAT',

  JWT_ACCESS_TOKEN_EXPIRATION = 'JWT_ACCESS_TOKEN_EXPIRATION',
  JWT_ACCESS_TOKEN_INVALID = 'JWT_ACCESS_TOKEN_INVALID',
  JWT_REFRESH_TOKEN_EXPIRATION = 'JWT_REFRESH_TOKEN_EXPIRATION',
  JWT_REFRESH_TOKEN_INVALID = 'JWT_REFRESH_TOKEN_INVALID',
}

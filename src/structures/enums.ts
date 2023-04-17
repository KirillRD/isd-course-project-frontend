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
  ADMIN = '/admin',
  ACCESS_DENIED = '/access-denied',
  ANY = '*',
}

export enum ApiEndpoint {
  SIGN_UP = 'auth/sign-up',
  LOGIN = 'auth/login',
  LOGOUT = 'auth/refresh-token/logout',
  PROFILE = 'auth/profile',
  CSRF_TOKEN = 'auth/csrf-token',
  REFRESH_TOKENS = 'auth/refresh-token/refresh-tokens',

  USERS = 'users/',
}

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum CreationCategory {
  MOVIES = 'MOVIES',
  TV = 'TV',
  BOOKS = 'BOOKS',
  MUSIC = 'MUSIC',
  GAMES = 'GAMES',
}

export enum CreationCategoryColor {
  MOVIES = 'bg-blue-300',
  TV = 'bg-yellow-300',
  BOOKS = 'bg-green-300',
  MUSIC = 'bg-purple-300',
  GAMES = 'bg-red-300',
}

export enum Exception {
  USER_EMAIL_EXISTS = 'USER_EMAIL_EXISTS',
  USER_CREDENTIAL_INVALID = 'USER_CREDENTIAL_INVALID',
  USER_IS_LOCK = 'USER_IS_LOCK',
  USER_ROLE_ACCESS_DENIED = 'USER_ROLE_ACCESS_DENIED',

  JWT_ACCESS_TOKEN_EXPIRATION = 'JWT_ACCESS_TOKEN_EXPIRATION',
  JWT_ACCESS_TOKEN_INVALID = 'JWT_ACCESS_TOKEN_INVALID',
  JWT_REFRESH_TOKEN_EXPIRATION = 'JWT_REFRESH_TOKEN_EXPIRATION',
  JWT_REFRESH_TOKEN_INVALID = 'JWT_REFRESH_TOKEN_INVALID',
}

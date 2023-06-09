import {
  reviewOrderOptions,
  ReviewOrderOption,
  GetReviewCountParams,
  GetReviewsParams,
} from '@/redux/api/reviewApi';
import { CreationCategory } from '@/structures/enums';
import { POSITIVE_INTEGER_REGEX } from '@/utils/constants';
import queryString from 'query-string';

export const PAGE_ARG = 'page';
export const SIZE_ARG = 'size';
export const ORDER_ARG = 'order';
export const REVIEW_ARG = 'review';
export const CREATION_ARG = 'creation';
export const TAG_ARG = 'tag';
export const CREATION_CATEGORY_ARG = 'creation-category';

const INIT_PAGE = 1;
const INIT_PAGE_SIZE = 10;
const INIT_ORDER = reviewOrderOptions[0];

const pageParse = (value: string | null): number => {
  if (value !== null && POSITIVE_INTEGER_REGEX.test(value)) {
    return +value;
  }
  return INIT_PAGE;
};

const sizeParse = (value: string | null): number => {
  if (value !== null && POSITIVE_INTEGER_REGEX.test(value)) {
    return +value;
  }
  return INIT_PAGE_SIZE;
};

const orderParse = (value: string | null): ReviewOrderOption => {
  if (
    value !== null &&
    reviewOrderOptions.includes(value as ReviewOrderOption)
  ) {
    return value as ReviewOrderOption;
  }
  return INIT_ORDER;
};

const reviewTitleParse = (value: string | null): string | undefined => {
  if (value !== null) {
    return value;
  }
};

const creationIdParse = (value: string | null): number | undefined => {
  if (value !== null && POSITIVE_INTEGER_REGEX.test(value)) {
    return +value;
  }
};

const tagIdsParse = (value: string[]): number[] | undefined => {
  const tagIds = value
    .filter((tagId) => POSITIVE_INTEGER_REGEX.test(tagId))
    .map((tagId) => +tagId);
  if (tagIds.length) return tagIds;
};

const creationCategoriesParse = (
  value: string[]
): CreationCategory[] | undefined => {
  const creationCategories = value
    .filter((creationCategory) =>
      Object.keys(CreationCategory).includes(creationCategory)
    )
    .map(
      (creationCategory) =>
        CreationCategory[creationCategory as CreationCategory]
    );
  if (creationCategories.length) return creationCategories;
};

export const convertSearchParamsToReviewCountParams = (
  searchParams: URLSearchParams
): GetReviewCountParams => {
  return {
    review: reviewTitleParse(searchParams.get(REVIEW_ARG)),
    creation: creationIdParse(searchParams.get(CREATION_ARG)),
    tag: tagIdsParse(searchParams.getAll(TAG_ARG)),
    'creation-category': creationCategoriesParse(
      searchParams.getAll(CREATION_CATEGORY_ARG)
    ),
  };
};

export const convertSearchParamsToReviewsParams = (
  searchParams: URLSearchParams
): GetReviewsParams => {
  return {
    ...convertSearchParamsToReviewCountParams(searchParams),
    page: pageParse(searchParams.get(PAGE_ARG)),
    size: sizeParse(searchParams.get(SIZE_ARG)),
    order: orderParse(searchParams.get(ORDER_ARG)),
  };
};

export const convertReviewsParamsToSearchParams = (
  params: GetReviewsParams
): string => {
  return queryString.stringify(params, {
    skipEmptyString: true,
    skipNull: true,
  });
};

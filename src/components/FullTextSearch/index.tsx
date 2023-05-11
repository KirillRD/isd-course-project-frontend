import AlgoliaAutocomplete from '@/components/AlgoliaAutocomplete';
import algoliasearch from 'algoliasearch';
import { AutocompleteState, getAlgoliaResults } from '@algolia/autocomplete-js';
import { PagePath } from '@/structures/enums';
import { Review, ReviewComment } from '@/structures/types';

const appId = import.meta.env.VITE_ALGOLIA_APP_ID as string;
const apiKey = import.meta.env.VITE_ALGOLIA_API_KEY as string;
const searchClient = algoliasearch(appId, apiKey);

type ItemTemplate = {
  item: Review & ReviewComment;
  state: AutocompleteState<any>;
};

type FullTextSearchProps = {
  className?: string;
};

export default function FullTextSearch({ className }: FullTextSearchProps) {
  return (
    <AlgoliaAutocomplete
      className={className}
      getSources={({ query }) => [
        {
          sourceId: 'objectID',
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: 'review',
                  query,
                },
              ],
            });
          },
          templates: {
            item({ item }: ItemTemplate) {
              const reviewId = item.reviewId ?? item.id;
              const linkText = item.comment ?? item.title;
              return (
                <a
                  className="aa-ItemLink"
                  style={
                    !item.reviewId
                      ? {
                          color: 'rgba(var(--aa-primary-color-rgb),1)',
                        }
                      : {}
                  }
                  href={`${PagePath.REVIEWS}/${reviewId}`}
                >
                  <div className="aa-ItemIcon aa-ItemIcon--noBorder">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                  <div className="aa-ItemContent">
                    <div className="aa-ItemContentTitle">{linkText}</div>
                  </div>
                </a>
              );
            },
          },
        },
      ]}
    />
  );
}

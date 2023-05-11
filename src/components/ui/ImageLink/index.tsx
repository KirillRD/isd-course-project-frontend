import ImageContainer from '@/components/ui/ImageContainer';
import {
  Link,
  URLSearchParamsInit,
  createSearchParams,
} from 'react-router-dom';

type ImageLinkProps = {
  path: string;
  args?: URLSearchParamsInit;
  reloadDocument?: boolean;
  imageUrl: string;
  alt?: string;
};

export default function ImageLink({
  path,
  args,
  reloadDocument = false,
  imageUrl,
  alt,
}: ImageLinkProps) {
  return (
    <Link
      to={{
        pathname: path,
        search: createSearchParams(args).toString(),
      }}
      reloadDocument={reloadDocument}
      className="block border-round-md"
    >
      <ImageContainer url={imageUrl} alt={alt} selection />
    </Link>
  );
}

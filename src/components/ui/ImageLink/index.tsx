import ImageContainer from '@/components/ui/ImageContainer';
import { Link } from 'react-router-dom';

type ImageLinkProps = {
  path: string;
  imageUrl: string;
  alt?: string;
};

export default function ImageLink({ path, imageUrl, alt }: ImageLinkProps) {
  return (
    <Link to={path} className="block border-round-md">
      <ImageContainer url={imageUrl} alt={alt} selection />
    </Link>
  );
}

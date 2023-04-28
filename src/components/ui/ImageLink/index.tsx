import ImageContainer from '@/components/ui/ImageContainer';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

type ImageLinkProps = {
  path: string;
  imageUrl: string;
  alt?: string;
};

export default function ImageLink({ path, imageUrl, alt }: ImageLinkProps) {
  return (
    <Link to={path} className={`${styles.imageLink} border-round-md`}>
      <ImageContainer url={imageUrl} alt={alt} />
    </Link>
  );
}

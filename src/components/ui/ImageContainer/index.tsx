import { classNames } from 'primereact/utils';
import styles from './styles.module.scss';

type ImageContainerProps = {
  url: string;
  alt?: string;
  onClick?: () => void;
  selection?: boolean;
};

export default function ImageContainer({
  url,
  alt,
  onClick,
  selection = false,
}: ImageContainerProps) {
  return (
    <div
      className={classNames(
        `${styles.imageContainer} surface-200 border-round-md`,
        { [styles.imageSelection]: selection }
      )}
      onClick={onClick}
    >
      <img src={url} alt={alt} />
    </div>
  );
}

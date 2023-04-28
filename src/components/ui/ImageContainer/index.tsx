import styles from './styles.module.scss';

type ImageContainerProps = {
  url: string;
  alt?: string;
};

export default function ImageContainer({ url, alt }: ImageContainerProps) {
  return (
    <div className={`${styles.imageContainer} surface-200 border-round-md`}>
      <img src={url} alt={alt} />
    </div>
  );
}

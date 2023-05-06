import ImageContainer from '@/components/ui/ImageContainer';
import { ReviewImage } from '@/structures/types';
import { Galleria, GalleriaItemChangeEvent } from 'primereact/galleria';
import { useRef, useState } from 'react';

type ReviewImageGalleriaProps = {
  images: ReviewImage[];
};

export default function ReviewImageGalleria({
  images,
}: ReviewImageGalleriaProps) {
  const galleria = useRef<Galleria>(null);
  const [imageActiveIndex, setImageActiveIndex] = useState<number>(0);

  const itemTemplate = (image: ReviewImage) => {
    return <img src={image.url} className="max-w-screen max-h-screen" />;
  };

  const handleItemChange = (event: GalleriaItemChangeEvent) => {
    setImageActiveIndex(event.index);
  };

  const handleImageClick = (index: number) => {
    setImageActiveIndex(index);
    galleria.current?.show();
  };

  return (
    <>
      <Galleria
        ref={galleria}
        value={images}
        item={itemTemplate}
        fullScreen
        activeIndex={imageActiveIndex}
        onItemChange={handleItemChange}
        circular
        showItemNavigators
        showThumbnails={false}
      />
      <div className="grid">
        {images.length &&
          images.map((image, index) => (
            <div key={image.id} className="col-2">
              <ImageContainer
                url={image.url}
                onClick={() => handleImageClick(index)}
                selection
              />
            </div>
          ))}
      </div>
    </>
  );
}

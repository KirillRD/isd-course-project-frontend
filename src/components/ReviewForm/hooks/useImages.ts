import { ReviewImageBody } from '@/redux/api/reviewApi';
import { getBase64ByUrl, getBlobByUrl } from '@/utils';
import {
  FileUpload,
  FileUploadRemoveEvent,
  FileUploadSelectEvent,
} from 'primereact/fileupload';
import { useEffect, useRef, useState } from 'react';

export default function useImages(
  imagesValue: ReviewImageBody[],
  setFieldValue: (field: 'images', value: ReviewImageBody[]) => void
) {
  const reviewImages = useRef<FileUpload>(null);
  const [loadTrigger, setLoadTrigger] = useState<boolean>(false);

  const loadImagesValue = async () => {
    const imageFiles = reviewImages.current?.getFiles();
    const files: ReviewImageBody[] = await Promise.all(
      imageFiles!.map(async (file) => {
        const base64 = await getBase64ByUrl(
          (file as unknown as { objectURL: string }).objectURL
        );
        return { file: base64 };
      })
    );
    setFieldValue('images', files);
  };

  useEffect(() => {
    const loadInitImages = async () => {
      if (imagesValue) {
        reviewImages.current?.setFiles(
          await Promise.all(
            imagesValue.map(async (imageValue) => {
              const blob = await getBlobByUrl(imageValue.file);
              return {
                size: blob.size,
                type: blob.type,
                objectURL: imageValue.file,
              } as unknown as File;
            })
          )
        );
        setLoadTrigger((prev) => !prev);
      }
    };

    void loadInitImages();
  }, []);

  useEffect(() => {
    void loadImagesValue();
  }, [loadTrigger]);

  const handleImageSelect = (event: FileUploadSelectEvent) => {
    setLoadTrigger((prev) => !prev);
  };

  const handleImageRemove = (event: FileUploadRemoveEvent) => {
    setLoadTrigger((prev) => !prev);
  };

  return { reviewImages, handleImageSelect, handleImageRemove };
}

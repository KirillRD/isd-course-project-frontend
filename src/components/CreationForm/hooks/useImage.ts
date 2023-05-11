import { getBase64ByUrl } from '@/utils';
import {
  FileUpload,
  FileUploadRemoveEvent,
  FileUploadSelectEvent,
} from 'primereact/fileupload';
import { useEffect, useRef, useState } from 'react';

export default function useImage(
  setFieldValue: (field: 'imageFile', value: string) => void
) {
  const creationImage = useRef<FileUpload>(null);
  const [loadTrigger, setLoadTrigger] = useState<boolean>(false);

  const loadImageValue = async () => {
    const imageFile = creationImage.current?.getFiles()[0];
    let file = '';
    if (imageFile) {
      file = await getBase64ByUrl(
        (imageFile as unknown as { objectURL: string }).objectURL
      );
    }
    setFieldValue('imageFile', file);
  };

  useEffect(() => {
    void loadImageValue();
  }, [loadTrigger]);

  const handleImageSelect = (event: FileUploadSelectEvent) => {
    setLoadTrigger((prev) => !prev);
  };

  const handleImageRemove = (event: FileUploadRemoveEvent) => {
    setLoadTrigger((prev) => !prev);
  };

  return { creationImage, handleImageSelect, handleImageRemove };
}

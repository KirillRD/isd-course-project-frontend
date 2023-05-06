export const getFormattedDate = (value: Date | string): string => {
  const date = value instanceof Date ? value : new Date(value);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export const getBlobByUrl = async (url: string): Promise<Blob> => {
  const res = await fetch(url);
  const blob = await res.blob();
  return blob;
};

const blobToBase64 = async (blob: Blob): Promise<string> => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
};

export const getBase64ByUrl = async (url: string): Promise<string> => {
  const blob = await getBlobByUrl(url);
  const base64 = await blobToBase64(blob);
  return base64;
};

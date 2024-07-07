import { CSSProperties, ImgHTMLAttributes } from 'react';
import { IMAGES, Images } from '@/shared/assets';

export type IImageProps = {
  image: Images;
  width?: string;
  height?: string;
  testId?: string;
  widthAndHeight?: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;

export const Image = (props: IImageProps) => {
  const { image, height, width, widthAndHeight, testId, ...rest } = props;

  const getSize = (): CSSProperties => {
    const size: CSSProperties = {};
    if (height) size.height = height;
    if (width) size.width = width;
    return size;
  };

  const sizeStyle = widthAndHeight ? { width: widthAndHeight, height: widthAndHeight } : getSize();

  return (
    <img
      src={IMAGES[image]}
      alt={rest?.alt || image}
      data-testid={testId}
      style={{ ...sizeStyle }}
      {...rest}
    />
  );
};

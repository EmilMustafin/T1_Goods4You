import { useState } from 'react';
import s from './image-slider.module.css';

type ImageSliderProps = {
  images: string[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <section
      aria-label='Image Slider'
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <div className={s.main_previews}>
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={image}
            aria-hidden={imageIndex !== index}
            className={s.imgSliderImg}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className={s.previews}>
          {images.map((image, index) => (
            <div
              className={`${s.container_imgSliderDotBtn} ${
                imageIndex === index ? s.selectedImgSliderDotBtn : ''
              }`}
              onClick={() => setImageIndex(index)}
              key={image}
            >
              <img
                src={image}
                key={index}
                className={s.imgSliderDotBtn}
                aria-label={`View Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}
      <div id='after-image-slider-controls' />
    </section>
  );
}

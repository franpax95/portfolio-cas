import Image from 'next/image';
import './styles.scss';
import { Brand, brands } from './data';

export const Branding = () => {
  return (
    <div className="branding">
      {brands.map(({ src, alt, width, height }: Brand, index: number) => (
        <Image
          key={index}
          className="branding__brand"
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
};

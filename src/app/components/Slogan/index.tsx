'use client';

import Image from 'next/image';
import './styles.scss';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';

export const Slogan = () => {
  const [threshold, setThreshold] = useState<number>(0.85);
  const [animate, set] = useState<boolean>(false);
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    root: null,
    rootMargin: '0px',
    threshold
  });

  useEffect(() => {
    const updateThreshold = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        setThreshold(0.5);
      } else {
        setThreshold(0.85);
      }
    };

    window.addEventListener('resize', updateThreshold);

    updateThreshold();

    return () => {
      window.removeEventListener('resize', updateThreshold);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      set(true);
    }
  }, [isVisible]);

  return (
    <section className="slogan" ref={sectionRef}>
      <div className="slogan__content">
        <div className={`slogan__text-wrapper ${animate && 'slogan__text-wrapper--animated'}`}>
          <p className={`slogan__text ${animate && 'slogan__text--animatedfff'}`}>
            {`Immerse\nyourself in a\nvisual journey\nwhere\n`}
            <span className="slogan__purple">{`creativity\nmeets impact.`}</span>
          </p>
        </div>

        <div className={`slogan__gallery ${animate && 'slogan__gallery--animated'}`}>
          <div className="slogan__img-wrapper slogan__img-wrapper--first">
            <Image src="/slogan/1.png" alt="Slogan 1" width={240} height={300} />
          </div>

          <div className="slogan__img-wrapper slogan__img-wrapper--second">
            <Image src="/slogan/2.png" alt="Slogan 2" width={240} height={300} />
          </div>

          <div className="slogan__img-wrapper slogan__img-wrapper--third">
            <Image src="/slogan/3.png" alt="Slogan 3" width={240} height={300} />
          </div>

          <div className="slogan__img-wrapper slogan__img-wrapper--fourth">
            <Image src="/slogan/4.png" alt="Slogan 4" width={240} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

'use client';

import { wwwmArticles, WWWMArticle } from './data';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';
import './styles.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export const WhyWorkWithMe = () => {
  const transitionDelayCSSVar = '--transition-delay';

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
    <section className="why-work-with-me" ref={sectionRef}>
      <div className="why-work-with-me__content">
        <h1 className="why-work-with-me__title">Why choose to</h1>
        <h2 className="why-work-with-me__subtitle">work with me.</h2>

        <div className="why-work-with-me__articles">
          {wwwmArticles.map(({ id, title, content }: WWWMArticle, index: number) => (
            <div
              className={`why-work-with-me__article ${animate && 'why-work-with-me__article--animated'}`}
              style={{ [transitionDelayCSSVar]: `${index * 100}ms` } as React.CSSProperties}
              key={id}
            >
              <div className="why-work-with-me__article-title">
                <Image src="/icons/check.svg" alt="check" width={32} height={32} />
                <span>{title}</span>
              </div>

              <div className="why-work-with-me__article-paragraph">
                {content.map((part, index) => (
                  <span key={index} className={`why-work-with-me__${part.bold ? 'bold' : 'light'}`}>
                    {part.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

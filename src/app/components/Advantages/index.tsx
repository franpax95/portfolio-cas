'use client';

import Image from 'next/image';
import './styles.scss';
import { Button } from '../Button';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';
import { useEffect, useState } from 'react';

export const Advantages = () => {
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
    <section className="advantages" ref={sectionRef}>
      <div className="advantages__content">
        <div
          className={`advantages__img-wrapper ${animate && 'advantages__img-wrapper--animated'}`}
        >
          <Image
            src="/advantages/mock_advantages.png"
            alt="Advantages"
            width={1080}
            height={1350}
          />
        </div>

        <div className="advantages__article">
          <h1 className={`advantages__title ${animate && 'advantages__title--animated'}`}>
            <span>I am here to</span>
            <span className="advantages__purple">support you.</span>
          </h1>

          <ul className="advantages__list">
            <li className="advantages__list-el">
              <span className="advantages__uppercase">Fair pricing:</span> Competitive rates for
              impactful social media services.
            </li>

            <li className="advantages__list-el">
              <span className="advantages__uppercase">Transparency:</span> Clear insights to ensure
              you&apos;re informed every step of the way.
            </li>

            <li className="advantages__list-el">
              <span className="advantages__uppercase">Direct freelancer collaboration:</span> Work
              directly with a dedicated social media manager, bypassing traditional agency layers
              for a more personalised and efficient experience.
            </li>
          </ul>

          <Button>If you&apos;re a potential client, click here</Button>
          <Button>If you&apos;re an agency, download my portfolio here</Button>
        </div>
      </div>
    </section>
  );
};

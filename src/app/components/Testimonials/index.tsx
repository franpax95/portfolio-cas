'use client';

import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';
import './styles.scss';
import { useEffect, useState } from 'react';
import { Testimonial, testimonials } from './data';
import { Button } from '../Button';
import Image from 'next/image';

export const Testimonials = () => {
  const [animate, set] = useState<boolean>(false);
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    root: null,
    rootMargin: '0px',
    threshold: 0.85
  });

  useEffect(() => {
    if (isVisible) {
      set(true);
    }
  }, [isVisible]);

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="testimonials__content">
        <div
          className={`testimonials__quotes testimonials__quotes--initial ${animate && 'testimonials__quotes--animated'}`}
        >
          <Image src="/testimonials/quote_1.svg" alt="quote 1" width={80} height={80} />
        </div>

        <h1 className="testimonials__title">Testimonials</h1>

        <div className="testimonials__cards">
          {testimonials.map(({ id, opinion, owner }: Testimonial) => (
            <div className="testimonials__card" key={id}>
              <p className="testimonials__card-opinion">{opinion}</p>
              <span className="testimonials__card-owner">{owner}</span>
            </div>
          ))}
        </div>

        <Button light>To see more testimonials, click here</Button>

        <div
          className={`testimonials__quotes testimonials__quotes--end ${animate && 'testimonials__quotes--animated'}`}
        >
          <Image src="/testimonials/quote_2.svg" alt="quote 2" width={80} height={80} />
        </div>
      </div>
    </section>
  );
};

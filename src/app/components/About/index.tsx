'use client';

import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';
import './styles.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export const About = () => {
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
    <section className="about" ref={sectionRef}>
      <div className="about__content">
        <div className="about__image-wrapper">
          <Image
            className="about__image"
            src="/about/mock_about.png"
            alt="About me"
            width={1085}
            height={1600}
          />
        </div>

        <div className="about__header">
          <h1 className="about__title">Meet who&apos;s behind</h1>
          <h2 className="about__subtitle">Creative Attitude Studio</h2>
        </div>

        <div className={`about__animated-slogan ${animate && 'about__animated-slogan--animated'}`}>
          <span className="about__slogan">hey! I&apos;m Cas,</span>
        </div>

        <p className="about__paragraph about__paragraph--first">
          <span className="about__purple">
            a social media expert with a rich background spanning more than five years in the
            dynamic field of marketing.
          </span>
          Frustrated with the monotonous office grind and the shackles of the 0-to-5 routine, I took
          the plunge quitting my job (just in the nick of time before the pandemic unleashed its
          chaos...) and embarked on my freelance adventure in April 2020. Since then I had the
          privilege of working as a freelancer with awesome brands from all corners of the globe.
        </p>

        <p className="about__paragraph about__paragraph--second">
          I transcend the conventional boundaries of marketing-if I do say so myself-because for me,
          it&apos;s not merely about campaigns and strategies.
          <span className="about__purple">
            I am driven by the art of forging connections and creating meaningful ties between your
            brand and your audience.
          </span>
          It&apos;s not just about selling a product or service; it&apos;s about crafting an
          experience and building relationshi`s that resonate and endure.
        </p>

        <p className="about__paragraph about__paragraph--third">
          <span className="about__purple">
            Let&apos;s kickstart a conversation and delve into how we can not only elevate your
            brand&apos;s appearance and visibility but also cultivate lasting connections!
          </span>
        </p>
      </div>
    </section>
  );
};

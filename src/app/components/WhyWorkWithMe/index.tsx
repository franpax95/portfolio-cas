import { wwwmArticles, WWWMArticle } from './data';
import './styles.scss';
import Image from 'next/image';

export const WhyWorkWithMe = () => {
  return (
    <section className="why-work-with-me">
      <div className="why-work-with-me__content">
        <h1 className="why-work-with-me__title">Why choose to</h1>
        <h2 className="why-work-with-me__subtitle">work with me.</h2>

        <div className="why-work-with-me__articles">
          {wwwmArticles.map(({ id, title, content }: WWWMArticle) => (
            <div className="why-work-with-me__article" key={id}>
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

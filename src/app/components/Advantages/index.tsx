import Image from 'next/image';
import './styles.scss';
import { Button } from '../Button';

export const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantages__content">
        <div className="advantages__img-wrapper">
          <Image
            src="/advantages/mock_advantages.png"
            alt="Advantages"
            width={1080}
            height={1350}
          />
        </div>

        <div className="advantages__article">
          <h1 className="advantages__title">
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

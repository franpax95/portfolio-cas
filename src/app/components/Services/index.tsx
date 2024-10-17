'use client';

import { Button } from '../Button';
import { Service, services } from './data';
import './styles.scss';

export const Services = () => {
  const onClick = () => {
    console.log('Clicked!');
  };

  return (
    <section className="services">
      <h1 className="services__title">Services</h1>

      <div className="services__content">
        {services.map(({ id, title, content, src }: Service) => (
          <div key={id} className="services__service">
            <div className="services__service-image-wrapper">{src}</div>
            <h2 className="services__service-title">{title}</h2>
            <p className="services__service-paragraph">{content}</p>
          </div>
        ))}
      </div>

      <div className="services__footer">
        <Button onClick={onClick}>Click here for more info and pricing</Button>
      </div>
    </section>
  );
};

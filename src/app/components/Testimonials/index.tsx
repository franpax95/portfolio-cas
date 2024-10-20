import './styles.scss';
import { Testimonial, testimonials } from './data';
import { Button } from '../Button';

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__content">
        <div className="testimonials__quotes testimonials__quotes--initial">&quot;</div>

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

        <div className="testimonials__quotes testimonials__quotes--end">&quot;</div>
      </div>
    </section>
  );
};

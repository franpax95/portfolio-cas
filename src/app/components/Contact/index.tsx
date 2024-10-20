import Image from 'next/image';
import './styles.scss';

export const Contact = () => {
  return (
    <footer className="contact">
      <div className="contact__bg">
        <Image
          className="contact__bg-image"
          src="/contact/contact_bg.png"
          alt="Contact"
          width={1366}
          height={650}
        />
      </div>

      <div className="contact__content">
        <h1 className="contact__title">Get in touch now</h1>

        <div className="contact__social">
          <p className="contact__social-row">
            <span className="contact__uppercase">Whatsapp</span> +44 (0) 7754 007553
          </p>

          <p className="contact__social-row">
            <span className="contact__uppercase">Email</span> cas@creativeattitudestudio.com
          </p>

          <p className="contact__social-row">
            <span className="contact__uppercase">Instagram</span> @creativeattitudestudio
          </p>
        </div>

        <div className="contact__icons">
          <Image src="/icons/whatsapp.svg" alt="Whatsapp" width={48} height={48} />
          <Image src="/icons/email.svg" alt="Email" width={48} height={48} />
          <Image src="/icons/instagram.svg" alt="Instagram" width={48} height={48} />
        </div>
      </div>
    </footer>
  );
};

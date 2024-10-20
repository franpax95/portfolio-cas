import './styles.scss';

export const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__image-wrapper">{/** Imagen */}</div>

        <div className="about__article">
          <div className="about__header">
            <h1 className="about__title">Meet who&apos;s behind</h1>
            <h2 className="about__subtitle">Creative Attitude Studio</h2>
          </div>

          <div className="about__animated-slogan">
            <span className="about__slogan">hey! I&apos;m Cas,</span>
          </div>

          <p className="about__paragraph">
            <span className="about__purple">
              a social media expert with a rich background spanning more than five years in the
              dynamic field of marketing.
            </span>
            Frustrated with the monotonous office grind and the shackles of the 0-to-5 routine, I
            took the plunge quitting my job (just in the nick of time before the pandemic unleashed
            its chaos...) and embarked on my freelance adventure in April 2020. Since then I had the
            privilege of working as a freelancer with awesome brands from all corners of the globe.
          </p>

          <p className="about__paragraph">
            I transcend the conventional boundaries of marketing-if I do say so myself-because for
            me, it&apos;s not merely about campaigns and strategies.
            <span className="about__purple">
              I am driven by the art of forging connections and creating meaningful ties between
              your brand and your audience.
            </span>
            It&apos;s not just about selling a product or service; it&apos;s about crafting an
            experience and building relationshi`s that resonate and endure.
          </p>

          <p className="about__paragraph">
            <span className="about__purple">
              Let&apos;s kickstart a conversation and delve into how we can not only elevate your
              brand&apos;s appearance and visibility but also cultivate lasting connections!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

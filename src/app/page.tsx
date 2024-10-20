import './styles.scss';
import { Header } from './components/Header';
import { About } from './components/About';
import { HighlightedText } from './components/HighlightedText';
import { Services } from './components/Services';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Branding } from './components/Branding';
import { Testimonials } from './components/Testimonials';
import { Slogan } from './components/Slogan';
import { Advantages } from './components/Advantages';
import { Contact } from './components/Contact';

export default function Home() {
  return (
    <div className="home">
      <Header />

      <About />

      <div className="home__highlight">
        <HighlightedText>
          let&apos;s turn your brand into the next social media success!
        </HighlightedText>
      </div>

      <Services />

      <WhyWorkWithMe />

      <Branding />

      <Testimonials />

      <div className="home__highlight">
        <HighlightedText>crafting brilliance, one post at a time.</HighlightedText>
      </div>

      <Slogan />

      <Advantages />

      <div className="home__highlight home__highlight--mb">
        <HighlightedText>
          your brand has a story that matters; let&apos;s tell it together.
        </HighlightedText>
      </div>

      <Contact />
    </div>
  );
}

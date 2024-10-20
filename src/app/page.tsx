import './styles.scss';
import { Header } from './components/Header';
import { About } from './components/About';
import { HighlightedText } from './components/HighlightedText';
import { Services } from './components/Services';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Branding } from './components/Branding';
import { Testimonials } from './components/Testimonials';

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
    </div>
  );
}

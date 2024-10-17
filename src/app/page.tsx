import './styles.scss';
import { Header } from './components/Header';
import { About } from './components/About';
import { HighlightedText } from './components/HighlightedText';
import { Services } from './components/Services';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';

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
    </div>
  );
}

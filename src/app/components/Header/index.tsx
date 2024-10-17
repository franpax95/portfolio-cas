import Image from 'next/image';
import './styles.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__bg">
        <Image src="/header.png" alt="Cas' portfolio header" fill />
      </div>

      <span className="header__title">Social Media isn&apos;t just a tool;</span>
      <span className="header__subtitle">it&apos;s a game-changer.</span>
    </header>
  );
};

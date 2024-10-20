'use client';

import Link from 'next/link';
import './styles.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // If scroll surpasses 100vh
      if (scrollTop > windowHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled && 'navbar--solid'}`}>
      <div className="navbar__img-wrapper">
        <Image
          className="navbar__img"
          src="/logo.svg"
          alt="Cassandra B Neumann Portfolio"
          width={100}
          height={60}
        />
      </div>

      <div className="navbar__links">
        <Link className="navbar__link" href="/">
          About
        </Link>
        <Link className="navbar__link" href="/">
          Portfolio
        </Link>
        <Link className="navbar__link" href="/">
          Services
        </Link>
        <Link className="navbar__link" href="/">
          Packages
        </Link>
        <Link className="navbar__link" href="/">
          Contact
        </Link>
      </div>
    </div>
  );
};

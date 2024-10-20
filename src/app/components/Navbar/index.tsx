import Link from 'next/link';
import './styles.scss';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <div className="navbar">
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

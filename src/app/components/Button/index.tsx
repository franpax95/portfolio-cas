'use client';

import './styles.scss';

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  light?: boolean;
}

export const Button = ({ children, light, onClick }: ButtonProps) => {
  return (
    <button className={`button ${light && 'button--light'}`} onClick={onClick}>
      {children}
    </button>
  );
};

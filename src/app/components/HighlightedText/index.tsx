import './styles.scss';

export interface HighlightedTextProps {
  children: React.ReactNode;
}

export const HighlightedText = ({ children }: HighlightedTextProps) => {
  return <span className="highlight-text">{children}</span>;
};

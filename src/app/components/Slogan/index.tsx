import './styles.scss';

export const Slogan = () => {
  return (
    <div className="slogan">
      <p className="slogan__text">
        {`Immerse\nyourself in a\nvisual journey\nwhere\n`}
        <span className="slogan__purple">{`creativity\nmeets impact.`}</span>
      </p>

      <div className="slogan__gallery">
        <div className="slogan__img-wrapper slogan__img-wrapper--first"></div>
        <div className="slogan__img-wrapper slogan__img-wrapper--second"></div>
        <div className="slogan__img-wrapper slogan__img-wrapper--third"></div>
        <div className="slogan__img-wrapper slogan__img-wrapper--fourth"></div>
      </div>
    </div>
  );
};

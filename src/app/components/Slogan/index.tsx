import Image from 'next/image';
import './styles.scss';

export const Slogan = () => {
  return (
    <div className="slogan">
      <p className="slogan__text">
        {`Immerse\nyourself in a\nvisual journey\nwhere\n`}
        <span className="slogan__purple">{`creativity\nmeets impact.`}</span>
      </p>

      <div className="slogan__gallery">
        <div className="slogan__img-wrapper slogan__img-wrapper--first">
          <Image src="/slogan/1.png" alt="Slogan 1" width={240} height={300} />
        </div>

        <div className="slogan__img-wrapper slogan__img-wrapper--second">
          <Image src="/slogan/2.png" alt="Slogan 2" width={240} height={300} />
        </div>

        <div className="slogan__img-wrapper slogan__img-wrapper--third">
          <Image src="/slogan/3.png" alt="Slogan 3" width={240} height={300} />
        </div>

        <div className="slogan__img-wrapper slogan__img-wrapper--fourth">
          <Image src="/slogan/4.png" alt="Slogan 4" width={240} height={300} />
        </div>
      </div>
    </div>
  );
};

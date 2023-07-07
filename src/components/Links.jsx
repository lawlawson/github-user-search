import styles from './Links.module.css';
import location from '../assets/icon-location.svg';
import website from '../assets/icon-website.svg';
import twitter from '../assets/icon-twitter.svg';
import company from '../assets/icon-company.svg';

const Links = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['location']}>
        <img src={location} />
        <p>San Francisco</p>
      </div>
      <div className={styles['website']}>
        <img src={website} />
        <p>https://github.com/lawlawson</p>
      </div>
      <div className={styles['twitter']}>
        <img src={twitter} />
        <p>http://twitter.com/lawlawson</p>
      </div>
      <div className={styles['company']}>
        <img src={company} />
        <p>@github</p>
      </div>
    </div>
  );
};

export default Links;

import styles from './Card.module.css';
import profileImage from '../assets/octocat.svg';
import Stats from './Stats';

const Card = () => {
  return (
    <div className={styles['card']}>
      <div className={styles['social-info']}>
        <div className={styles['profile-pic']}>
          <img src={profileImage} />
        </div>
        <div className={styles['profile-info']}>
          <h2>The Octocat</h2>
          <h3>@Something</h3>
          <h4>Joined 25 Jan 2011</h4>
        </div>
      </div>
      <div>
        <p className={styles['profile-details']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          iure sequi facilis harum.
        </p>
      </div>
      <div>
        <Stats />
      </div>
    </div>
  );
};

export default Card;

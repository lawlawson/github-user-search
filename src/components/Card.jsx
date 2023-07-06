import styles from './Card.module.css';
import profileImage from '../assets/octocat.svg';

const Card = () => {
  return (
    <div className={styles['card']}>
      <div className={styles['social-info']}>
        <div className={styles['profile-pic']}>
          <img src={profileImage} />
        </div>
        <div className={styles['profile-info']}>
          <p>The Octocat</p>
          <p>@Something</p>
          <p>Joined 25 Jan 2011</p>
        </div>
      </div>
      <div>
        <p className={styles['profile-details']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          iure sequi facilis harum.
        </p>
      </div>
    </div>
  );
};

export default Card;

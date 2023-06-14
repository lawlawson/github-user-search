import styles from './Card.module.css';
import profileImage from '../assets/octocat.svg';

const Card = () => {
  return (
    <div>
      <div className={styles['profile-pic']}>
        <img src={profileImage} />
      </div>
      <div className='profile-info'>
        <h1>The Octocat</h1>
        <p>@Something</p>
        <p>Joined 25 Jan 2011</p>
      </div>
    </div>
  );
};

export default Card;

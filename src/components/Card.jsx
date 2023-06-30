import styles from './Card.module.css';
import profileImage from '../assets/octocat.svg';

const Card = () => {
  return (
    <div className={styles['card']}>
      <div className={styles['profile-pic']}>
        <img src={profileImage} />
      </div>
      <div className='profile-info'>
        <h1>The Octocat</h1>
        <p>@Something</p>
        <p>Joined 25 Jan 2011</p>
      </div>
      <div className='profile-details'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          iure sequi facilis harum.
        </p>
      </div>
      <div className='social-info-section'>
        <div className='social-info-section-1'>
          <p>Repos</p>
          <p>8</p>
        </div>
        <div>
          <p>Followers</p>
          <p>3938</p>
        </div>
        <div>
          <p>Following</p>
          <p>9</p>
        </div>
      </div>
      <div className='socials-section'>
        <div className='link-1'>
          <p>icon</p>
          <p>San Francisco</p>
        </div>
        <div className='link-2'>
          <p>icon</p>
          <p>Website</p>
        </div>
        <div className='link-3'>
          <p>icon</p>
          <p>Twitter</p>
        </div>
        <div className='link-4'>
          <p>icon</p>
          <p>Github</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

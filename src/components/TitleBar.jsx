import styles from './TitleBar.module.css';
import moon from '../assets/icon-moon.svg';

const TitleBar = () => {
  return (
    <div className={styles['title']}>
      <div className={styles['name']}>
        <h1>devFinder</h1>
      </div>
      <div className={styles['mode']}>
        <p>Dark</p>
        <img src={moon} alt='' />
      </div>
    </div>
  );
};

export default TitleBar;

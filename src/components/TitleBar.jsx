import styles from './TitleBar.module.css';
import moon from '../assets/icon-moon.svg';

const TitleBar = () => {
  return (
    <div className={styles.title}>
      <div>
        <p className={styles.titletext}>devFinder</p>
      </div>
      {/* <div className={styles.mode}>
        <div>Dark</div>
        <img src={moon} alt='' />
      </div> */}
    </div>
  );
};

export default TitleBar;

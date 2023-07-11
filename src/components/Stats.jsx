import styles from './Stats.module.css';

const Stats = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['repos']}>
        <p>Repos</p>
        <h2 className={styles['stat-number']}>8</h2>
      </div>
      <div className={styles['followers']}>
        <p>Followers</p>
        <h2 className={styles['stat-number']}>3938</h2>
      </div>
      <div className={styles['following']}>
        <p>Following</p>
        <h2 className={styles['stat-number']}>9</h2>
      </div>
    </div>
  );
};

export default Stats;

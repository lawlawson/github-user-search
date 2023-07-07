import styles from './Stats.module.css';

const Stats = () => {
  return (
    <div className={styles['container']}>
      <div>
        <p>Repos</p>
        <h2>8</h2>
      </div>
      <div>
        <p>Followers</p>
        <h2>3938</h2>
      </div>
      <div>
        <p>Following</p>
        <h2>9</h2>
      </div>
    </div>
  );
};

export default Stats;

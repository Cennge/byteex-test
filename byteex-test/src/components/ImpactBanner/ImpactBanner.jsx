import styles from './ImpactBanner.module.css';

export default function ImpactBanner() {
  return (
    <aside className={styles.banner} aria-label="Environmental impact">
      <div className="wrap">
        <p className={styles.title}>Our total green impact</p>
        <dl className={styles.stats}>
          <div className={styles.stat}>
            <img src="/image/icon-bullet-1.svg" alt="" className={styles.icon} />
            <dt className={styles.statValue}>3,927 kg</dt>
            <dd className={styles.statLabel}>of CO₂ saved</dd>
          </div>
          <div className={styles.stat}>
            <img src="/image/icon-bullet-2.svg" alt="" className={styles.icon} />
            <dt className={styles.statValue}>2,546,167 days</dt>
            <dd className={styles.statLabel}>of drinking water saved</dd>
          </div>
          <div className={styles.stat}>
            <img src="/image/icon-bullet-3.svg" alt="" className={styles.icon} />
            <dt className={styles.statValue}>7,321 kWh</dt>
            <dd className={styles.statLabel}>of energy saved</dd>
          </div>
        </dl>
      </div>
    </aside>
  );
}

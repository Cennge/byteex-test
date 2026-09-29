import styles from './CtaGroup.module.css';

export default function CtaGroup({ className = '', mobileOnly = false }) {
  return (
    <div className={`${styles.group} ${mobileOnly ? styles.mobileOnly : ''} ${className}`}>
      <a href="#shop" className={styles.btn}>
        Customize Your Outfit
        <img src="/image/icon-arrow.svg" alt="" width="23" height="10" className={styles.arrow} />
      </a>
      <div className={styles.reviews}>
        <img src="/image/icon-stars.svg" alt="5 stars" height="13" />
        <span>Over 500+ 5 Star Reviews Online</span>
      </div>
    </div>
  );
}

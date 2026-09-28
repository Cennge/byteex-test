import styles from './FinalCTA.module.css';

const STARS = [1,2,3,4,5];

export default function FinalCTA() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.blobBottom} aria-hidden="true" />
      <div className="wrap">
        <h2 className={styles.heading}>Find something you love.</h2>
        <p className={styles.sub}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>

        <div className={styles.ctaGroup}>
          <a href="#shop" className={styles.ctaBtn}>
            Customize Your Outfit
            <span className={styles.ctaBtnArrow} aria-hidden="true">→</span>
          </a>
          <div className={styles.ctaReviews}>
            <div className={styles.ctaStars}>
              {STARS.map(n => <span key={n} className={styles.ctaStar}>★</span>)}
            </div>
            <span className={styles.ctaReviewText}>Over 500+ 5 Star Reviews Online</span>
          </div>
        </div>

        <div className={styles.trustRow}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🚚</span>
            <span>FREE Shipping on Orders over $200</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⭐</span>
            <span>Over 500+ 5 Star Reviews Online</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🌿</span>
            <span>Made ethically and responsibly.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

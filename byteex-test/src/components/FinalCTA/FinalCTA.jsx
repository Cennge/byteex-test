import styles from './FinalCTA.module.css';

const STARS = [1,2,3,4,5];

export default function FinalCTA() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.blobBottom} aria-hidden="true" />
      <div className="wrap">
        <h2 className={styles.heading}>Find something you love.</h2>
        <p className={styles.sub}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>
        
        <div className={styles.imageCluster}>
          <img src="/image/finalcta-product-left.png" alt="" className={styles.imgLeft} loading="lazy" />
          <img src="/image/finalcta-product-center.png" alt="" className={styles.imgCenter} loading="lazy" />
          <img src="/image/finalcta-product-right.png" alt="" className={styles.imgRight} loading="lazy" />
        </div>

        <div className={styles.ctaGroup}>
          <a href="#shop" className={styles.ctaBtn}>
            Customize Your Outfit
            <span className={styles.ctaBtnArrow} aria-hidden="true">→</span>
          </a>
          <div className={styles.ctaFooter}>
            <div className={styles.shipsIn}>
              <span className={styles.clockIcon} aria-hidden="true">◷</span>
              <span className={styles.shipsText}>Ships in 1-2 Days</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.paymentIcons}>
              <span className={styles.payIcon}>AMEX</span>
              <span className={styles.payIcon}>Pay</span>
              <span className={styles.payIcon}>G Pay</span>
              <span className={styles.payIcon}>VISA</span>
            </div>
          </div>
        </div>

        <div className={styles.trustRow}>
          <div className={styles.trustItem}>
            <div className={styles.iconCircle}>
              <img src="/image/icon-trust-shipping.svg" alt="" className={styles.trustIcon} width="28" height="28" />
            </div>
            <span className={styles.trustText}>FREE Shipping on<br/>Orders over $200</span>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.iconCircle}>
              <img src="/image/icon-trust-reviews.svg" alt="" className={styles.trustIcon} width="28" height="28" />
            </div>
            <span className={styles.trustText}>Over 500+ 5 Star<br/>Reviews Online</span>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.iconCircle}>
              <img src="/image/icon-trust-eco.svg" alt="" className={styles.trustIcon} width="28" height="28" />
            </div>
            <span className={styles.trustText}>Made ethically<br/>and responsibly.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

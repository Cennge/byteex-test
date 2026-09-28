import styles from './Hero.module.css';

const SWATCHES = ['#D4C5B5','#8B7355','#C4A882','#9BA89B','#E8D5C4','#6B5B4E','#B5C4C1','#8C9E8A'];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBlobTop} aria-hidden="true" />
      <div className={`wrap ${styles.heroInner}`}>

        <div className={styles.heroLeft}>
          <a href="/" className={styles.logo}>
            <img src="/image/logo.svg" alt="Byteex" width="200" height="35" />
          </a>
          <h1 className={styles.heroHeadline}>
            Don't apologize for being comfortable.
          </h1>
          <ul className={styles.heroBullets}>
            <li className={styles.heroBullet}>
              <img src="/image/icon-bullet-1.svg" alt="" width="31" height="31" className={styles.bulletIcon} />
              <span>Beautiful, comfortable loungewear for day or night.</span>
            </li>
            <li className={styles.heroBullet}>
              <img src="/image/icon-bullet-2.svg" alt="" width="31" height="31" className={styles.bulletIcon} />
              <span>No wasteful extras, like tags or plastic packaging.</span>
            </li>
            <li className={styles.heroBullet}>
              <img src="/image/icon-bullet-3.svg" alt="" width="31" height="31" className={styles.bulletIcon} />
              <span>Our signature fabric is incredibly comfortable — unlike anything you've ever felt.</span>
            </li>
          </ul>

          <div className={styles.heroCta}>
            <a href="#shop" className={styles.ctaBtn}>
              Customize Your Outfit
              <img src="/image/icon-arrow.svg" alt="" width="23" height="10" className={styles.ctaBtnArrow} />
            </a>
            <div className={styles.heroReviews}>
              <img src="/image/icon-stars.svg" alt="5 stars" width="80" height="13" className={styles.heroStarsImg} />
              <span className={styles.heroReviewText}>Over 500+ 5 Star Reviews Online</span>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroImgMain}>
            <img src="/image/hero-product.png" alt="Byteex loungewear" loading="eager" />
          </div>
          <div className={styles.heroSwatches}>
            {SWATCHES.map((color, i) => (
              <button
                key={i}
                className={`${styles.swatch}${i === 1 ? ` ${styles.active}` : ''}`}
                style={{ background: color }}
                aria-label={`Color option ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

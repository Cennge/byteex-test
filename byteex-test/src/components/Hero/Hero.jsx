import styles from './Hero.module.css';

const STARS = [1,2,3,4,5];
const SWATCHES = ['#D4C5B5','#8B7355','#C4A882','#9BA89B','#E8D5C4','#6B5B4E','#B5C4C1','#8C9E8A'];

export default function Hero({ imageSrc, imageAlt = 'Byteex loungewear' }) {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBlobTop} aria-hidden="true" />
      <div className={`wrap ${styles.heroInner}`}>

        <div className={styles.heroLeft}>
          <h1 className={styles.heroHeadline}>
            Don't apologize for being comfortable.
          </h1>
          <ul className={styles.heroBullets}>
            <li className={styles.heroBullet}>Beautiful, comfortable loungewear for day or night.</li>
            <li className={styles.heroBullet}>No wasteful extras, like tags or plastic packaging.</li>
            <li className={styles.heroBullet}>Our signature fabric is incredibly comfortable — unlike anything you've ever felt.</li>
          </ul>

          <div className={styles.heroCta}>
            <a href="#shop" className={styles.ctaBtn}>
              Customize Your Outfit
              <span className={styles.ctaBtnArrow} aria-hidden="true">→</span>
            </a>
            <div className={styles.heroReviews}>
              <div className={styles.heroStars} aria-label="5 stars">
                {STARS.map(n => <span key={n} className={styles.heroStar}>★</span>)}
              </div>
              <span className={styles.heroReviewText}>Over 500+ 5 Star Reviews Online</span>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroImgMain}>
            {imageSrc
              ? <img src={imageSrc} alt={imageAlt} loading="eager" />
              : <div className={styles.heroImgPlaceholder} />}
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

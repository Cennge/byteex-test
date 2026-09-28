import Button from '../Button/Button';
import styles from './Hero.module.css';

const STARS = [1, 2, 3, 4, 5];

/**
 * Hero Section — main landing fold
 * @param {Object} props
 * @param {string} props.headline
 * @param {string} props.tagline
 * @param {string[]} props.bullets
 * @param {string} props.ctaLabel
 * @param {string} props.ctaHref
 * @param {string} props.imageSrc
 * @param {string} props.imageAlt
 * @param {string} props.reviewText
 */
export default function Hero({
  headline = "Don't apologize for being comfortable.",
  tagline = 'Loungewear you can be proud of.',
  bullets = [
    'Beautiful, comfortable loungewear for day or night.',
    'No wasteful extras, like tags or plastic packaging.',
    'Our signature fabric is incredibly comfortable — unlike anything you\'ve ever felt.',
  ],
  ctaLabel = 'Customize Your Outfit',
  ctaHref = '#shop',
  imageSrc,
  imageAlt = 'Byteex loungewear',
  reviewText = 'Over 500+ 5 Star Reviews Online',
}) {
  return (
    <section className={styles.hero} id="hero" aria-label="Hero">
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__content}>

          {/* Text column */}
          <div className={styles.hero__text}>
            <h1 className={styles.hero__headline}>{headline}</h1>
            <p className={styles.hero__sub}>{tagline}</p>

            <ul className={styles.hero__bullets} aria-label="Key benefits">
              {bullets.map((b, i) => (
                <li key={i} className={styles.hero__bullet}>{b}</li>
              ))}
            </ul>

            <div className={styles.hero__cta}>
              <Button href={ctaHref} showArrow aria-label={ctaLabel}>
                {ctaLabel}
              </Button>

              <div className={styles.hero__reviews} aria-label="Customer ratings">
                <div className={styles.hero__stars} aria-hidden="true">
                  {STARS.map(n => (
                    <span key={n} className={styles.hero__star}>★</span>
                  ))}
                </div>
                <span className={styles.hero__review-text}>{reviewText}</span>
              </div>
            </div>
          </div>

          {/* Image column */}
          <figure className={styles.hero__media} aria-hidden={!imageSrc}>
            {imageSrc
              ? <img
                  src={imageSrc}
                  alt={imageAlt}
                  className={styles.hero__image}
                  loading="eager"
                  fetchpriority="high"
                />
              : <div className={styles.hero__image} role="presentation" style={{ background: 'linear-gradient(135deg, #F9F0E5 0%, #EAEAEA 100%)' }} />
            }
          </figure>

        </div>
      </div>
    </section>
  );
}

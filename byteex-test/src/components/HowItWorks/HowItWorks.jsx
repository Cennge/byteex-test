import styles from './HowItWorks.module.css';

const STEPS = [
  { id: 'save',  icon: '🛍️', title: 'You save.',   desc: 'Browse our comfort sets and save 15% when you bundle.' },
  { id: 'ship',  icon: '🚚', title: 'We ship.',    desc: 'We ship your items within 1–2 days of receiving your order.' },
  { id: 'enjoy', icon: '🌙', title: 'You enjoy!',  desc: 'Wear Byteex around the house, out on the town, or in bed.' },
];

const STARS = [1,2,3,4,5];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className="wrap">
        <h2 className={styles.heading}>Comfort made easy</h2>
        <ol className={styles.cards}>
          {STEPS.map(({ id, icon, title, desc }) => (
            <li key={id} className={styles.card}>
              <span className={styles.cardIcon} aria-hidden="true">{icon}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </li>
          ))}
        </ol>
        <div className={styles.ctaWrap}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
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
        </div>
      </div>
    </section>
  );
}

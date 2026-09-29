import { useRef } from 'react';
import styles from './HowItWorks.module.css';

const STEPS = [
  { id: 'save',  icon: '/image/icon-store.svg', title: 'You save.',   desc: 'Browse our comfort sets and save 15% when you bundle.' },
  { id: 'ship',  icon: '/image/icon-truck.svg', title: 'We ship.',    desc: 'We ship your items within 1–2 days of receiving your order.' },
  { id: 'enjoy', icon: '/image/icon-moon.svg', title: 'You enjoy!',  desc: 'Wear hernest around the house, out on the town, or in bed.' },
];

const STARS = [1,2,3,4,5];

export default function HowItWorks() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <section className={styles.section} id="how-it-works">
      <div className="wrap">
        <h2 className={styles.heading}>Comfort made easy</h2>
        <div className={styles.slider}>
          <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={() => scroll(-1)} aria-label="Previous step">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 2L2 10l8 8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <ol className={styles.cards} ref={trackRef}>
            {STEPS.map(({ id, icon, title, desc }) => (
              <li key={id} className={styles.card}>
                <div className={styles.cardIcon}>
                  <img src={icon} alt="" width="48" height="48" />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
              </li>
            ))}
          </ol>
          <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={() => scroll(1)} aria-label="Next step">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 2l8 8-8 8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div className={styles.ctaWrap}>
          <div className={styles.ctaInner}>
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

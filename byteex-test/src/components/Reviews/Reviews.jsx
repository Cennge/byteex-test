import { useRef } from 'react';
import styles from './Reviews.module.css';
import useScrollDots from '../../lib/useScrollDots';

const STARS = [1,2,3,4,5];

const REVIEWS = [
  { id: 'r1', initials: 'AP', name: 'Amy P.',    body: 'Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.' },
  { id: 'r2', initials: 'JS', name: 'Jane, S.',  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 'r3', initials: 'SM', name: 'Sarah M.',  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

export default function Reviews() {
  const scrollRef = useRef(null);
  const { active, goTo } = useScrollDots(scrollRef, REVIEWS.length);

  const ugcImages = Array.from({ length: 22 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `/image/ugc-${num}.png`;
  });

  const scrollByCard = (dir) => {
    const el = scrollRef.current;
    if (!el?.firstElementChild) return;
    const step = el.firstElementChild.offsetWidth + parseFloat(getComputedStyle(el).columnGap);
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };
  const scrollLeft = () => scrollByCard(-1);
  const scrollRight = () => scrollByCard(1);

  return (
    <section className={styles.section} id="reviews">
      <div className="wrap">
        <header className={styles.header}>
          <h2 className={styles.heading}>What are our fans saying?</h2>
          <p className={styles.sub}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.</p>
        </header>
      </div>

      <div className={styles.ugcGrid} aria-label="Customer photos">
        {Array.from({ length: Math.ceil(ugcImages.length / 2) }).map((_, colIdx) => (
          <div key={colIdx} className={styles.ugcCol}>
            {ugcImages.slice(colIdx * 2, colIdx * 2 + 2).map((src, idx) => (
              <div key={idx} className={styles.ugcCell}>
                <img src={src} alt={`Customer photo ${colIdx * 2 + idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.sliderContainer}>
        <button className={`${styles.sliderBtn} ${styles.prevBtn}`} onClick={scrollLeft} aria-label="Previous review">
          &#10094;
        </button>
        
        <div className={styles.scrollTrack} role="list" ref={scrollRef}>
          {REVIEWS.map(({ id, name, body }) => (
            <article key={id} className={styles.card} role="listitem">
              <div className={styles.cardTop}>
                <div className={styles.avatar} aria-hidden="true"></div>
                <div className={styles.cardMeta}>
                  <div className={styles.stars} aria-label="5 stars">
                    {STARS.map(n => <span key={n} className={styles.star}>★</span>)}
                  </div>
                  <span className={styles.cardName}>{name}</span>
                </div>
              </div>
              <blockquote className={styles.cardText}><p>{body}</p></blockquote>
            </article>
          ))}
        </div>

        <button className={`${styles.sliderBtn} ${styles.nextBtn}`} onClick={scrollRight} aria-label="Next review">
          &#10095;
        </button>
      </div>

      <div className={`dots ${styles.dots}`}>
        {REVIEWS.map(({ id }, i) => (
          <button
            key={id}
            className="dot"
            aria-label={`Show review ${i + 1}`}
            aria-current={active === i}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

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
    </section>
  );
}

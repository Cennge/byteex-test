import styles from './FeaturedReview.module.css';

const STARS = [1,2,3,4,5];

export default function FeaturedReview() {
  return (
    <div className={`wrap ${styles.wrap}`}>
      <article className={styles.card}>
        <div className={styles.cardTop}>
          <div className={styles.stars} aria-label="5 stars">
            {STARS.map(n => <span key={n} className={styles.star}>★</span>)}
          </div>
          <span className={styles.count}>One of 500+ 5 Star Reviews Online</span>
        </div>
        <div className={styles.reviewRow}>
          <div className={styles.avatar} aria-hidden="true">AP</div>
          <span className={styles.reviewer}>Amy P.</span>
        </div>
        <blockquote className={styles.text}>
          Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.
        </blockquote>
      </article>
    </div>
  );
}

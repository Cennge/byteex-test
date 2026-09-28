import styles from './Reviews.module.css';

const STARS = [1,2,3,4,5];

const REVIEWS = [
  { id: 'r1', initials: 'AP', name: 'Amy P.',    body: 'Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.' },
  { id: 'r2', initials: 'JS', name: 'Jane, S.',  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 'r3', initials: 'SM', name: 'Sarah M.',  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

export default function Reviews() {
  const ugcImages = Array.from({ length: 22 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `/image/ugc-${num}.png`;
  });

  return (
    <section className={styles.section} id="reviews">
      <div className="wrap">
        <header className={styles.header}>
          <h2 className={styles.heading}>What are our fans saying?</h2>
          <p className={styles.sub}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.</p>
        </header>
      </div>

      <div className={styles.scrollTrack} role="list">
        {REVIEWS.map(({ id, initials, name, body }) => (
          <article key={id} className={styles.card} role="listitem">
            <div className={styles.cardTop}>
              <div className={styles.avatar} aria-hidden="true">{initials}</div>
              <div className={styles.cardMeta}>
                <span className={styles.cardName}>{name}</span>
                <div className={styles.stars} aria-label="5 stars">
                  {STARS.map(n => <span key={n} className={styles.star}>★</span>)}
                </div>
              </div>
            </div>
            <blockquote className={styles.cardText}><p>{body}</p></blockquote>
          </article>
        ))}
      </div>

      <hr className={styles.divider} />

      <div className={styles.ugcGrid} aria-label="Customer photos">
        {ugcImages.map((src, idx) => (
          <div key={idx} className={styles.ugcCell}>
            <img src={src} alt={`Customer photo ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

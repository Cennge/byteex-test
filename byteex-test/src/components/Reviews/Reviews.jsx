import styles from './Reviews.module.css';

const STARS = [1, 2, 3, 4, 5];

const DEFAULT_REVIEWS = [
  {
    id: 'r1',
    author: 'Jane, S.',
    initials: 'JS',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
  },
  {
    id: 'r2',
    author: 'Amy P.',
    initials: 'AP',
    rating: 5,
    text: 'Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.',
  },
  {
    id: 'r3',
    author: 'Sarah M.',
    initials: 'SM',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet.',
  },
];

/**
 * Reviews Section — customer testimonials grid
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {Array} props.reviews - [{id, author, initials, rating, text}]
 */
export default function Reviews({
  title = 'What are our fans saying?',
  subtitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.',
  reviews = DEFAULT_REVIEWS,
}) {
  return (
    <section className={styles.reviews} id="reviews" aria-label="Customer reviews">
      <div className="container">
        <header className={styles.reviews__header}>
          <h2 className={styles.reviews__title}>{title}</h2>
          <p className={styles.reviews__sub}>{subtitle}</p>
        </header>

        <ul className={styles.reviews__grid} role="list">
          {reviews.map(({ id, author, initials, rating, text }) => (
            <li key={id} className={styles['review-card']}>
              <div className={styles['review-card__header']}>
                <div
                  className={styles['review-card__avatar']}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div className={styles['review-card__meta']}>
                  <span className={styles['review-card__name']}>{author}</span>
                  <div
                    className={styles['review-card__stars']}
                    aria-label={`${rating} out of 5 stars`}
                  >
                    {STARS.map(n => (
                      <span
                        key={n}
                        className={styles['review-card__star']}
                        aria-hidden="true"
                      >
                        {n <= rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className={styles['review-card__text']}>
                <p>{text}</p>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

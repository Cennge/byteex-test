import Button from '../Button/Button';
import styles from './FinalCTA.module.css';

const TRUST_ITEMS = [
  { id: 'ship',    icon: '🚚', text: 'FREE Shipping on Orders over $200' },
  { id: 'reviews', icon: '⭐', text: 'Over 500+ 5 Star Reviews Online' },
  { id: 'ethics',  icon: '🌿', text: 'Made ethically and responsibly.' },
];

/**
 * FinalCTA Section — closing call-to-action
 * @param {Object} props
 * @param {string} props.tagline
 * @param {string} props.sub
 * @param {string} props.ctaLabel
 * @param {string} props.ctaHref
 * @param {Array} props.trustItems
 */
export default function FinalCTA({
  tagline = 'Find something you love.',
  sub = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.',
  ctaLabel = 'Customize Your Outfit',
  ctaHref = '#shop',
  trustItems = TRUST_ITEMS,
}) {
  return (
    <section className={styles.cta} id="cta" aria-label="Call to action">
      <div className="container">
        <h2 className={styles.cta__tagline}>{tagline}</h2>
        <p className={styles.cta__sub}>{sub}</p>

        <div className={styles.cta__actions}>
          <Button href={ctaHref} showArrow size="lg" aria-label={ctaLabel}>
            {ctaLabel}
          </Button>
        </div>

        <ul className={styles.cta__trust} aria-label="Trust badges" role="list">
          {trustItems.map(({ id, icon, text }) => (
            <li key={id} className={styles.cta__trust_item}>
              <span className={styles.cta__trust_icon} aria-hidden="true">{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

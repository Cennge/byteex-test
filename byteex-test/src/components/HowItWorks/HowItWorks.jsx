import Button from '../Button/Button';
import styles from './HowItWorks.module.css';

const DEFAULT_STEPS = [
  {
    id: 'browse',
    icon: '🛍️',
    title: 'You save.',
    desc: 'Browse our comfort sets and save 15% when you bundle.',
  },
  {
    id: 'ship',
    icon: '🚚',
    title: 'We ship.',
    desc: 'We ship your items within 1–2 days of receiving your order.',
  },
  {
    id: 'enjoy',
    icon: '🌙',
    title: 'You enjoy!',
    desc: 'Wear Byteex around the house, out on the town, or in bed.',
  },
];

/**
 * HowItWorks Section — 3-step process
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {Array} props.steps - [{id, icon, title, desc}]
 * @param {string} props.ctaLabel
 * @param {string} props.ctaHref
 */
export default function HowItWorks({
  title = 'Comfort made easy',
  subtitle = 'Three simple steps to feel amazing.',
  steps = DEFAULT_STEPS,
  ctaLabel = 'Customize Your Outfit',
  ctaHref = '#shop',
}) {
  return (
    <section className={styles.how} id="how-it-works" aria-label="How it works">
      <div className="container">
        <header className={styles.how__header}>
          <h2 className={styles.how__title}>{title}</h2>
          <p className={styles.how__sub}>{subtitle}</p>
        </header>

        <ol className={styles.how__steps} aria-label="Steps">
          {steps.map(({ id, icon, title: stepTitle, desc }) => (
            <li key={id} className={styles.step}>
              <span className={styles.step__icon} aria-hidden="true">{icon}</span>
              <h3 className={styles.step__title}>{stepTitle}</h3>
              <p className={styles.step__desc}>{desc}</p>
            </li>
          ))}
        </ol>

        <div className={styles.how__cta}>
          <Button href={ctaHref} showArrow aria-label={ctaLabel}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

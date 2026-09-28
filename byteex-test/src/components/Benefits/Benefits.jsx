import styles from './Benefits.module.css';

const DEFAULT_BENEFITS = [
  {
    id: 'sourced',
    icon: '🌿',
    name: 'Ethically sourced.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.',
  },
  {
    id: 'made',
    icon: '♻️',
    name: 'Responsibly made.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.',
  },
  {
    id: 'comfort',
    icon: '☁️',
    name: 'Unimaginably comfortable.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.',
  },
  {
    id: 'living',
    icon: '🏡',
    name: 'Made for living in.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.',
  },
];

/**
 * Benefits Section — top product benefits with icons
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {Array} props.benefits - [{id, icon, name, desc}]
 */
export default function Benefits({
  title = 'Loungewear you can be proud of.',
  subtitle = 'We make our products with care, so you can wear them with pride.',
  benefits = DEFAULT_BENEFITS,
}) {
  return (
    <section className={styles.benefits} id="benefits" aria-label="Product benefits">
      <div className="container">
        <header className={styles.benefits__header}>
          <h2 className={styles.benefits__title}>{title}</h2>
          <p className={styles.benefits__subtitle}>{subtitle}</p>
        </header>

        <ul className={styles.benefits__grid} role="list">
          {benefits.map(({ id, icon, name, desc }) => (
            <li key={id} className={styles.benefit}>
              <div className={styles.benefit__icon-wrap} aria-hidden="true">
                <span className={styles.benefit__icon}>{icon}</span>
              </div>
              <div className={styles.benefit__body}>
                <h3 className={styles.benefit__name}>{name}</h3>
                <p className={styles.benefit__desc}>{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

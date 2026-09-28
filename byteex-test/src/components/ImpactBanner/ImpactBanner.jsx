import styles from './ImpactBanner.module.css';

const DEFAULT_STATS = [
  { id: 'co2',    value: '3,927 kg',        label: 'of CO₂ saved' },
  { id: 'water',  value: '2,546,167 days',   label: 'of drinking water saved' },
  { id: 'energy', value: '7,321 kWh',        label: 'of energy saved' },
];

/**
 * ImpactBanner — Green impact statistics strip
 * @param {Object} props
 * @param {string} props.title
 * @param {Array} props.stats - [{id, value, label}]
 */
export default function ImpactBanner({
  title = 'Our total green impact',
  stats = DEFAULT_STATS,
}) {
  return (
    <aside className={styles.banner} aria-label="Environmental impact">
      <div className="container">
        <p className={styles.banner__title}>{title}</p>

        <dl className={styles.banner__stats}>
          {stats.map(({ id, value, label }) => (
            <div key={id} className={styles.stat}>
              <dt className={styles.stat__value}>{value}</dt>
              <dd className={styles.stat__label}>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}

import styles from './AnnouncementBar.module.css';

const ITEMS = [
  { text: 'CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)' },
  { text: 'FREE SHIPPING on orders > $200', primary: true },
  { text: 'Easy 45-day return window.' },
];

export default function AnnouncementBar({ items = ITEMS }) {
  return (
    <aside className={styles.bar} aria-label="Announcement">
      <div className={styles.barInner}>
        <p className={styles.barText}>
          {items.map(({ text, primary }) => (
            <span key={text} className={primary ? undefined : styles.secondary}>{text}</span>
          ))}
        </p>
      </div>
    </aside>
  );
}

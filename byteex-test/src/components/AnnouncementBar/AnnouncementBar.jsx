import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar({
  message = 'CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders > $200 | Easy 45-day return window.',
}) {
  return (
    <aside className={styles.bar} aria-label="Announcement">
      <div className={styles.barInner}>
        <p className={styles.barText}>{message}</p>
      </div>
    </aside>
  );
}

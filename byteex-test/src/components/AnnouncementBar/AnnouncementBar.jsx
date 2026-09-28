import styles from './AnnouncementBar.module.css';

/**
 * AnnouncementBar — top-of-page marquee banner
 * @param {Object} props
 * @param {string} props.message - announcement text
 */
export default function AnnouncementBar({
  message = 'CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders > $200 | Easy 45-day return window.',
}) {
  return (
    <aside className={styles.bar} aria-label="Announcement">
      <div className={styles.bar__inner}>
        <p className={styles.bar__text}>{message}</p>
      </div>
    </aside>
  );
}

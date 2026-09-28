import styles from './AsSeenIn.module.css';

const LOGOS = [
  { src: '/image/logo-press-1.png', alt: 'Eco-Stylist' },
  { src: '/image/logo-press-2.png', alt: 'Canadian Living' },
  { src: '/image/logo-press-3.png', alt: 'Jillian Harris' },
  { src: '/image/logo-press-4.png', alt: 'The Eco Hub' },
  { src: '/image/logo-press-5.png', alt: 'TrendHunter' },
];

export default function AsSeenIn() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <p className={styles.label}>as seen in</p>
        <div className={styles.logos}>
          {LOGOS.map(({ src, alt }, i) => (
            <img key={i} src={src} alt={alt} className={styles.logoImg} />
          ))}
        </div>
      </div>
    </section>
  );
}

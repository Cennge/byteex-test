import styles from './AsSeenIn.module.css';

const LOGOS = [
  { src: '/image/logo-press-1.png', alt: 'Press logo 1', height: 22 },
  { src: '/image/logo-press-2.png', alt: 'Press logo 2', height: 52 },
  { src: '/image/logo-press-3.png', alt: 'Press logo 3', height: 53 },
  { src: '/image/logo-press-4.png', alt: 'Press logo 4', height: 37 },
  { src: '/image/logo-press-5.png', alt: 'Press logo 5', height: 58 },
];

export default function AsSeenIn() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <p className={styles.label}>as seen in</p>
        <div className={styles.logos}>
          {LOGOS.map(({ src, alt, height }, i) => (
            <img key={i} src={src} alt={alt} height={height} className={styles.logoImg} />
          ))}
        </div>
      </div>
    </section>
  );
}

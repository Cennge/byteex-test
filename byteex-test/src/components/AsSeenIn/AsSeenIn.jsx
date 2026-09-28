import styles from './AsSeenIn.module.css';

const DEFAULT_LOGOS = ['VOGUE', 'ELLE', 'GLAMOUR', 'BAZAAR', 'GQ'];

export default function AsSeenIn({ logos = [] }) {
  const displayLogos = logos.length > 0 ? logos : null;

  return (
    <section className={styles.section}>
      <div className="wrap">
        <p className={styles.label}>as seen in</p>
        <div className={styles.logos}>
          {displayLogos
            ? displayLogos.map((src, i) => <img key={i} src={src} alt={`Press logo ${i + 1}`} height="28" />)
            : DEFAULT_LOGOS.map((name, i) => (
                <span key={i} className={styles.logoItem}>{name}</span>
              ))
          }
        </div>
      </div>
    </section>
  );
}

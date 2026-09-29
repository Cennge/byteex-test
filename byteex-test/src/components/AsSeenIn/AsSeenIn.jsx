import { useRef } from 'react';
import styles from './AsSeenIn.module.css';
import useScrollDots from '../../lib/useScrollDots';

const LOGOS = [
  { src: '/image/logo-press-1.png', alt: 'Eco-Stylist' },
  { src: '/image/logo-press-2.png', alt: 'Canadian Living' },
  { src: '/image/logo-press-3.png', alt: 'Jillian Harris' },
  { src: '/image/logo-press-4.png', alt: 'The Eco Hub' },
  { src: '/image/logo-press-5.png', alt: 'TrendHunter' },
];

const DOT_COUNT = 3;

export default function AsSeenIn() {
  const trackRef = useRef(null);
  const { active, goTo } = useScrollDots(trackRef, DOT_COUNT);

  return (
    <section className={styles.section}>
      <div className="wrap">
        <p className={styles.label}>as seen in</p>
        <div className={styles.logos} ref={trackRef}>
          {LOGOS.map(({ src, alt }) => (
            <img key={src} src={src} alt={alt} className={styles.logoImg} />
          ))}
        </div>
        <div className="dots">
          {Array.from({ length: DOT_COUNT }, (_, i) => (
            <button
              key={i}
              className="dot"
              aria-label={`Show logos ${i + 1}`}
              aria-current={active === i}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

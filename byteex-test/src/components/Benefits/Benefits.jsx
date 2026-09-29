import { useState, useEffect } from 'react';
import styles from './Benefits.module.css';
import { getBenefits } from '../../lib/contentful';
import CtaGroup from '../CtaGroup/CtaGroup';

const FALLBACK_BENEFITS = [
  { id: 'sourced', icon: '/image/icon-bullet-2.svg', title: 'Ethically sourced.', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'made',    icon: '/image/icon-bullet-1.svg', title: 'Responsibly made.',   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'living',  icon: '/image/icon-moon.svg', title: 'Made for living in.',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'comfort', icon: '/image/icon-bullet-3.svg', title: 'Unimaginably comfortable.', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
];

export default function Benefits() {
  const [benefitsList, setBenefitsList] = useState(FALLBACK_BENEFITS);

  useEffect(() => {
    async function loadCMS() {
      const cmsData = await getBenefits();
      if (cmsData && cmsData.length > 0) {
        setBenefitsList(cmsData);
      }
    }
    loadCMS();
  }, []);

  return (
    <section className={styles.section} id="benefits">
      <div className={`wrap ${styles.inner}`}>

        <div className={styles.textSide}>
          <h2 className={styles.tagline}>Loungewear you can be proud of.</h2>
          <ul className={styles.list}>
            {benefitsList.map(({ id, icon, title, desc }) => (
              <li key={id} className={styles.item}>
                <div className={styles.itemIcon}>
                  <img src={icon} alt="" width="36" height="36" />
                </div>
                <div className={styles.itemBody}>
                  <h3 className={styles.itemTitle}>{title}</h3>
                  <p className={styles.itemDesc}>{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.carouselContainer}>
            <button className={`${styles.carouselArrow} ${styles.arrowLeft}`} aria-label="Previous image">
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 38L4 20L20 2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            
            <div className={styles.carouselMainImg}>
              <img src="/image/hero-product.png" alt="White Robe" loading="lazy" />
            </div>

            <button className={`${styles.carouselArrow} ${styles.arrowRight}`} aria-label="Next image">
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 2L20 20L4 38" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>

            <div className={styles.thumbnails}>
              {[...Array(8)].map((_, i) => (
                <button key={i} className={`${styles.thumbnailBtn} ${i === 1 ? styles.activeThumb : ''}`} aria-label={`View image ${i + 1}`}>
                  <img src="/image/hero-product.png" alt="" />
                </button>
              ))}
            </div>
          </div>
          <p className={styles.productLabel}>White Robe</p>
        </div>

        <CtaGroup mobileOnly className={styles.mobileCta} />
      </div>
    </section>
  );
}

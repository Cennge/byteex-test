import styles from './Benefits.module.css';

const BENEFITS = [
  { id: 'sourced', icon: '🌿', title: 'Ethically sourced.', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'made',    icon: '♻️', title: 'Responsibly made.',   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'comfort', icon: '☁️', title: 'Unimaginably comfortable.', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'living',  icon: '🏡', title: 'Made for living in.',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
];

export default function Benefits({ imageSrc, imageAlt = 'Product' }) {
  return (
    <section className={styles.section} id="benefits">
      <div className={`wrap ${styles.inner}`}>

        <div className={styles.textSide}>
          <h2 className={styles.tagline}>Loungewear you can be proud of.</h2>
          <ul className={styles.list}>
            {BENEFITS.map(({ id, icon, title, desc }) => (
              <li key={id} className={styles.item}>
                <div className={styles.itemIcon} aria-hidden="true">{icon}</div>
                <div className={styles.itemBody}>
                  <h3 className={styles.itemTitle}>{title}</h3>
                  <p className={styles.itemDesc}>{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.productImg}>
            {imageSrc
              ? <img src={imageSrc} alt={imageAlt} loading="lazy" />
              : <div className={styles.imgPlaceholder} />}
          </div>
          <p className={styles.productLabel}>White Robe</p>
        </div>

      </div>
    </section>
  );
}

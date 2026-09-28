import styles from './Benefits.module.css';

const BENEFITS = [
  { id: 'sourced', icon: '/image/icon-leaf.svg', title: 'Ethically sourced.', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'made',    icon: '/image/icon-recycle.svg', title: 'Responsibly made.',   desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'comfort', icon: '/image/icon-cloud.svg', title: 'Unimaginably comfortable.', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'living',  icon: '/image/icon-home.svg', title: 'Made for living in.',  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
];

export default function Benefits() {
  return (
    <section className={styles.section} id="benefits">
      <div className={`wrap ${styles.inner}`}>

        <div className={styles.textSide}>
          <h2 className={styles.tagline}>Loungewear you can be proud of.</h2>
          <ul className={styles.list}>
            {BENEFITS.map(({ id, icon, title, desc }) => (
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
          <div className={styles.productImg}>
            <img src="/image/hero-product.png" alt="White Robe" loading="lazy" />
          </div>
          <p className={styles.productLabel}>White Robe</p>
        </div>

      </div>
    </section>
  );
}

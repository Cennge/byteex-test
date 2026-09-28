import styles from './Founder.module.css';

export default function Founder() {
  const images = [
    '/image/founder-1.png',
    '/image/founder-2.png',
    '/image/founder-3.png'
  ];

  return (
    <section className={styles.section} id="founder">
      <div className={`wrap ${styles.inner}`}>

        <div className={styles.imageCluster}>
          <div className={styles.imgA}>
            <img src={images[0]} alt="Founder image 1" loading="lazy" />
          </div>
          <div className={styles.imgB}>
            <img src={images[1]} alt="Founder image 2" loading="lazy" />
          </div>
          <div className={styles.imgC}>
            <img src={images[2]} alt="Founder image 3" loading="lazy" />
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.heading}>Be your best self.</h2>
          <div className={styles.bio}>
            <p className={styles.para}>Hi! My name's [Insert Name], and I founded [Insert] in ____.</p>
            <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.</p>
            <p className={styles.para}>Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est.</p>
            <p className={styles.para}>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.</p>
          </div>
          <div className={styles.ctaWrap}>
            <a href="#shop" className={styles.ctaBtn}>
              Customize Your Outfit
              <span className={styles.ctaBtnArrow} aria-hidden="true">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

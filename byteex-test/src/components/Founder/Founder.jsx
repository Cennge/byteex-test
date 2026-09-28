import styles from './Founder.module.css';

/**
 * Founder Section — brand story / about the founder
 * @param {Object} props
 * @param {string} props.label - small uppercase label above title
 * @param {string} props.title - headline
 * @param {string[]} props.paragraphs - array of bio paragraphs
 * @param {string} props.imageSrc
 * @param {string} props.imageAlt
 */
export default function Founder({
  label = 'Our Story',
  title = 'Be your best self.',
  paragraphs = [
    "Hi! My name's [Insert Name], and I founded [Insert] in ____.",
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    'Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non.',
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.',
  ],
  imageSrc,
  imageAlt = 'Founder portrait',
}) {
  return (
    <section className={styles.founder} id="founder" aria-label="About the founder">
      <div className="container">
        <div className={styles.founder__inner}>

          {/* Media */}
          <figure className={styles.founder__media}>
            {imageSrc
              ? <img src={imageSrc} alt={imageAlt} className={styles.founder__image} loading="lazy" />
              : <div
                  className={styles.founder__image}
                  role="presentation"
                  style={{ background: 'linear-gradient(160deg, #EAEAEA 0%, #F0EEEF 100%)' }}
                />
            }
          </figure>

          {/* Content */}
          <div className={styles.founder__content}>
            <p className={styles.founder__label}>{label}</p>
            <h2 className={styles.founder__title}>{title}</h2>
            <div className={styles.founder__bio}>
              {paragraphs.map((para, i) => (
                <p key={i} className={styles.founder__para}>{para}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

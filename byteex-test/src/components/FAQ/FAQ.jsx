import { useState } from 'react';
import styles from './FAQ.module.css';

const FAQS = [
  { id: 'faq1', q: 'Lorem ipsum dolor sit amet',        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'faq2', q: 'Lorem ipsum dolor sit amet',        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'faq3', q: 'Lorem ipsum dolor sit amet',        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'faq4', q: 'Lorem ipsum dolor sit amet',        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
  { id: 'faq5', q: 'Lorem ipsum dolor sit amet',        a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.' },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const imageSrc = '/image/faq-section-image.png';

  return (
    <section className={styles.section} id="faq">
      <div className={`wrap ${styles.inner}`}>

        <div className={styles.faqSide}>
          <h2 className={styles.heading}>Frequently asked questions.</h2>
          <dl className={styles.list}>
            {FAQS.map(({ id, q, a }) => {
              const isOpen = openId === id;
              return (
                <div key={id} className={styles.item}>
                  <dt>
                    <button
                      className={styles.question}
                      aria-expanded={isOpen}
                      aria-controls={`${id}ans`}
                      onClick={() => setOpenId(prev => prev === id ? null : id)}
                    >
                      <span className={styles.questionText}>{q}</span>
                      <span className={isOpen ? `${styles.toggle} ${styles.toggleOpen}` : styles.toggle} aria-hidden="true">+</span>
                    </button>
                  </dt>
                  {isOpen && (
                    <dd id={`${id}ans`} className={styles.answer}>{a}</dd>
                  )}
                </div>
              );
            })}
          </dl>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.productImg}>
            <img src={imageSrc} alt="Product FAQ" loading="lazy" />
          </div>
        </div>

      </div>
    </section>
  );
}

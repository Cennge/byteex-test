import { useState } from 'react';
import styles from './FAQ.module.css';

const DEFAULT_FAQS = [
  {
    id: 'faq-1',
    question: 'Lorem ipsum dolor sit amet',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 'faq-2',
    question: 'Lorem ipsum dolor sit amet',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 'faq-3',
    question: 'Lorem ipsum dolor sit amet',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 'faq-4',
    question: 'Lorem ipsum dolor sit amet',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 'faq-5',
    question: 'Lorem ipsum dolor sit amet',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
];

/**
 * FAQ Section — accessible accordion
 * @param {Object} props
 * @param {string} props.title
 * @param {Array} props.faqs - [{id, question, answer}]
 */
export default function FAQ({ title = 'Frequently asked questions.', faqs = DEFAULT_FAQS }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(prev => (prev === id ? null : id));

  return (
    <section className={styles.faq} id="faq" aria-label="FAQ">
      <div className="container">
        <header className={styles.faq__header}>
          <h2 className={styles.faq__title}>{title}</h2>
        </header>

        <dl className={styles.faq__list}>
          {faqs.map(({ id, question, answer }) => {
            const isOpen = openId === id;
            return (
              <div key={id} className={styles.faq__item}>
                <dt>
                  <button
                    id={`${id}-btn`}
                    className={styles.faq__question}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-answer`}
                    onClick={() => toggle(id)}
                  >
                    <span className={styles.faq__question_text}>{question}</span>
                    <span
                      className={[
                        styles.faq__toggle,
                        isOpen ? styles['faq__toggle--open'] : '',
                      ].join(' ')}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </dt>
                {isOpen && (
                  <dd
                    id={`${id}-answer`}
                    role="region"
                    aria-labelledby={`${id}-btn`}
                    className={styles.faq__answer}
                  >
                    {answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

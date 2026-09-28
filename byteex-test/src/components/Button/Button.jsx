import styles from './Button.module.css';

/**
 * Reusable Button component
 * @param {Object} props
 * @param {'primary'|'outline'} props.variant
 * @param {'sm'|'md'|'lg'} props.size
 * @param {boolean} props.showArrow
 * @param {React.ReactNode} props.children
 * @param {string} props.href - renders as <a> if provided
 * @param {string} props.className
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  children,
  href,
  className = '',
  ...rest
}) {
  const cls = [
    styles.btn,
    styles[`btn--${variant}`],
    size !== 'md' ? styles[`btn--${size}`] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
        {showArrow && <span className={styles.btn__arrow} aria-hidden="true">→</span>}
      </a>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
      {showArrow && <span className={styles.btn__arrow} aria-hidden="true">→</span>}
    </button>
  );
}

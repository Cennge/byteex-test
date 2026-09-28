import styles from './Button.module.css';

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
    styles[`btn${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    size !== 'md' ? styles[`btn${size.charAt(0).toUpperCase() + size.slice(1)}`] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
        {showArrow && <span className={styles.btnArrow} aria-hidden="true">→</span>}
      </a>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
      {showArrow && <span className={styles.btnArrow} aria-hidden="true">→</span>}
    </button>
  );
}

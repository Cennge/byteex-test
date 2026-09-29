import { useEffect, useState } from 'react';

export default function useScrollDots(ref, count) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setActive(max > 0 ? Math.round((el.scrollLeft / max) * (count - 1)) : 0);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [ref, count]);

  const goTo = (i) => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (max * i) / (count - 1), behavior: 'smooth' });
  };

  return { active, goTo };
}

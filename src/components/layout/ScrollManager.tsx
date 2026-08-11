import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from './lenis-context';

/**
 * ルート遷移時のスクロール制御。
 * - ハッシュ付き（/#about など）は該当セクションへスムーズスクロール
 * - 通常のページ遷移はページ先頭へ即時リセット
 */
export function ScrollManager() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el as HTMLElement, { offset: -80 });
        } else {
          el.scrollIntoView();
        }
        return;
      }
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, lenis]);

  return null;
}

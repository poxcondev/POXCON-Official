import { useEffect } from 'react';

/**
 * ページ単位で <title> と meta description を差し替える。
 * アンマウント時に元の値へ戻すため、SPA 内を行き来しても値が残らない。
 */
export function useDocumentMeta(title: string, description?: string): void {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const tag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    const previousDescription = tag?.getAttribute('content') ?? null;
    if (tag && description) {
      tag.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (tag && previousDescription !== null) {
        tag.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}

import { createContext, useContext } from 'react';
import type Lenis from 'lenis';

export const LenisContext = createContext<Lenis | null>(null);

/** SmoothScroll 配下で Lenis インスタンスを取得する（初期化前は null） */
export function useLenis(): Lenis | null {
  return useContext(LenisContext);
}

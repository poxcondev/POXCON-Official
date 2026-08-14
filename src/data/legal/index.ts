import { TERMS } from './terms';
import { PRIVACY } from './privacy';
import { REFUND } from './refund';
import type { LegalDocument } from './types';

export type { LegalBlock, LegalDocument, LegalSlug, LegalSummary } from './types';

/** フッターおよびルーティングの表示順 */
export const LEGAL_DOCUMENTS: readonly LegalDocument[] = [TERMS, PRIVACY, REFUND];

export function findLegalDocument(
  slug: string | undefined
): LegalDocument | undefined {
  return LEGAL_DOCUMENTS.find((doc) => doc.slug === slug);
}

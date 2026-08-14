import { Navigate, useParams } from 'react-router-dom';
import { findProduct, findRedirectSlug } from '@/data/products';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { ProductHero } from '@/components/product/ProductHero';
import { ScreenshotGallery } from '@/components/product/ScreenshotGallery';
import { FeatureGrid } from '@/components/product/FeatureGrid';
import { HowItWorks } from '@/components/product/HowItWorks';
import { PricingTable } from '@/components/product/PricingTable';
import { Requirements } from '@/components/product/Requirements';
import { Faq } from '@/components/product/Faq';
import { FinalCta } from '@/components/product/FinalCta';

export function ProductDetail() {
  const { slug } = useParams();
  const product = findProduct(slug);
  const redirectSlug = findRedirectSlug(slug);

  useDocumentMeta(
    product ? `${product.name} — Novexar` : 'Novexar',
    product?.metaDescriptionEn
  );

  // 旧スラッグ（リブランド前の URL）で来た場合は現行の製品ページへ寄せる
  if (!product && redirectSlug) {
    return <Navigate to={`/products/${redirectSlug}`} replace />;
  }

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <ProductHero product={product} />
      <ScreenshotGallery product={product} />
      <FeatureGrid product={product} />
      <HowItWorks product={product} />
      <PricingTable product={product} />
      <Requirements product={product} />
      <Faq product={product} />
      <FinalCta product={product} />
    </>
  );
}

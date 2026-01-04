
/**
 * @file ProductCard component for creator profile pages.
 */

import type { CreatorProduct } from '../../data/creators'
import { CTAButton } from '../common/CTAButton'
import { Badge } from '../common/Badge'

/**
 * Props for the ProductCard component.
 */
interface ProductCardProps {
  /** Product data to display. */
  product: CreatorProduct
}

/**
 * Displays a product image, pricing, and a clear affiliate purchase CTA.
 */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        {product.isBestSeller && (
          <div className="absolute left-3 top-3">
            <Badge variant="success">Bestseller</Badge>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-sm font-semibold text-slate-900">{product.name}</h3>
        <p className="text-xs text-slate-600">{product.description}</p>
        <p className="mt-auto text-sm font-semibold text-slate-900">
          {product.currency} {product.price.toFixed(2)}
        </p>
        <CTAButton
          className="mt-1 w-full text-xs"
          onClick={() => {
            window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer')
          }}
        >
          View on Etsy (affiliate)
        </CTAButton>
      </div>
    </article>
  )
}

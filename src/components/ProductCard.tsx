import { Link } from "react-router-dom";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {product.isNew && <span className="badge-new">New</span>}
      {product.isSale && <span className="badge-sale">Sale</span>}
      
      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>
        <h3 className="mt-1 font-display text-base font-medium text-foreground">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

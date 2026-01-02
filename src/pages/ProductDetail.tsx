import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { getProductById, products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="container flex min-h-[60vh] flex-col items-center justify-center">
        <p className="text-lg text-muted-foreground">Product not found</p>
        <Button variant="outline" className="mt-4" asChild>
          <Link to="/products">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const images = product.images || [product.image];
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast.error("Please select a size");
      return;
    }
    addItem(product, selectedSize, selectedColor);
    toast.success("Added to bag", {
      description: product.name,
    });
  };

  return (
    <div className="min-h-screen">
      <div className="container py-8">
        {/* Breadcrumb */}
        <Link
          to="/products"
          className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        {/* Product */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden bg-secondary animate-fade-in">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-[3/4] w-20 overflow-hidden bg-secondary transition-opacity ${
                      selectedImage === index ? "ring-2 ring-foreground" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:py-8">
            <div className="animate-slide-up">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                {product.category}
              </p>
              <h1 className="mt-2 font-display text-3xl font-medium md:text-4xl">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-xl font-medium">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="mt-6 text-muted-foreground">{product.description}</p>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-8">
                  <p className="text-sm font-medium">
                    Color: {selectedColor || "Select a color"}
                  </p>
                  <div className="mt-3 flex gap-3">
                    {product.colors.map(color => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`relative h-8 w-8 rounded-full border-2 transition-all ${
                          selectedColor === color.name
                            ? "border-foreground"
                            : "border-transparent hover:border-border"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor === color.name && (
                          <Check
                            className="absolute inset-0 m-auto h-4 w-4"
                            style={{
                              color: color.hex === "#FFFFFF" || color.hex === "#F5F0E8" || color.hex === "#FFFFF0" || color.hex === "#F7E7CE"
                                ? "#1A1A1A"
                                : "#FFFFFF",
                            }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-medium">Size</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`filter-button ${selectedSize === size ? "active" : ""}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart */}
              <Button
                variant="hero"
                size="xl"
                className="mt-8 w-full"
                onClick={handleAddToCart}
              >
                Add to Bag — ${product.price}
              </Button>

              {/* Details */}
              {product.details && product.details.length > 0 && (
                <div className="mt-8 border-t border-border pt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider">
                    Product Details
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {product.details.map((detail, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 border-t border-border pt-16 md:mt-24 md:pt-24">
            <h2 className="section-title">You May Also Like</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

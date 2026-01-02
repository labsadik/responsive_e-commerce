import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

const featuredProducts = products.slice(0, 4);

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden bg-secondary">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1920&h=1080&fit=crop"
            alt="Men's fashion"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        </div>

        <div className="container relative flex min-h-[85vh] items-center">
          <div className="max-w-xl animate-fade-in">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              New Collection 2023
            </p>
            <h1 className="hero-title mt-4 text-foreground">
              Refined Style for the Modern Man
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Discover premium menswear crafted for sophistication, comfort, and timeless elegance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/products">
                  Shop Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/products?filter=new">New Arrivals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Featured Products */}
      <section className="border-y border-border bg-card py-16 md:py-24">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Curated
              </p>
              <h2 className="section-title mt-2">Featured Pieces</h2>
            </div>
            <Link
              to="/products"
              className="hidden text-sm font-medium underline underline-offset-4 transition-colors hover:text-primary md:block"
            >
              Shop All
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop"
            alt="Quality craftsmanship"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>

        <div className="container relative flex min-h-[50vh] flex-col items-center justify-center text-center">
          <h2 className="hero-title max-w-2xl text-background animate-fade-in">
            Crafted with Precision, Made to Last
          </h2>
          <p className="mt-4 max-w-lg text-lg text-background/80 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Each piece is meticulously designed using premium materials and traditional craftsmanship.
          </p>
          <Button 
            variant="secondary" 
            size="xl" 
            className="mt-8 animate-fade-in" 
            style={{ animationDelay: "200ms" }}
            asChild
          >
            <Link to="/products">Discover More</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="section-title">Join the Club</h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe to receive updates on new arrivals, exclusive offers, and style guides.
            </p>
            <div className="mt-8 flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-b border-border bg-transparent px-0 py-3 text-center focus:border-foreground focus:outline-none"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

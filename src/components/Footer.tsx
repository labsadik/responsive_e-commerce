import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-xl font-semibold tracking-tight">
              MAISON
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium menswear for the modern gentleman. Timeless design, exceptional quality.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/products?filter=new" className="transition-colors hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products" className="transition-colors hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?filter=sale" className="transition-colors hover:text-foreground">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Help</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/shipping-returns" className="transition-colors hover:text-foreground">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="transition-colors hover:text-foreground">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Newsletter</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe for early access and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-b border-border bg-transparent px-0 py-2 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
              />
              <button className="text-sm font-medium underline underline-offset-4 transition-colors hover:text-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© 2023 MAISON . All rights reserved.</p>
          <p className="text-xs">
             No real products or transactions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

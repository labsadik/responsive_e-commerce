import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SearchDialog from "./SearchDialog";

const navLinks = [
  { name: "New Arrivals", href: "/products?filter=new" },
  { name: "Shop All", href: "/products" },
  { name: "Sale", href: "/products?filter=sale" }
];

const Header = () => {
  const location = useLocation();
  const { totalItems, setIsOpen: setCartOpen } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/products") {
      return location.pathname === "/products" && !location.search;
    }
    return location.pathname + location.search === href;
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          {/* Mobile menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-6">
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-xl font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 border-t border-border pt-4">
                  <Link
                    to="/shipping-returns"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-muted-foreground hover:text-foreground"
                  >
                    Shipping & Returns
                  </Link>
                  <Link
                    to="/size-guide"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-muted-foreground hover:text-foreground"
                  >
                    Size Guide
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link
            to="/"
            className="font-display text-lg font-semibold tracking-tight text-foreground md:text-xl"
          >
            MAISON
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className={`nav-link ${isActive(link.href) ? "text-foreground after:w-full" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative h-9 w-9"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default Header;

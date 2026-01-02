import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { products } from "@/lib/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return products.filter(
      p =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    ).slice(0, 5);
  }, [query]);

  const handleSelect = (productId: string) => {
    navigate(`/product/${productId}`);
    onOpenChange(false);
    setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 p-0 sm:max-w-lg">
        <DialogHeader className="sr-only">
          <DialogTitle>Search Products</DialogTitle>
        </DialogHeader>
        <div className="flex items-center border-b border-border px-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="border-0 focus-visible:ring-0"
          />
        </div>

        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto p-2">
            {results.map(product => (
              <button
                key={product.id}
                onClick={() => handleSelect(product.id)}
                className="flex w-full items-center gap-4 rounded-sm p-3 text-left transition-colors hover:bg-secondary"
              >
                <div className="h-14 w-12 flex-shrink-0 overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {product.category}
                  </p>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">${product.price}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {query.trim() && results.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">
            No products found for "{query}"
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;

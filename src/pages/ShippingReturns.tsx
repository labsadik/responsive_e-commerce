import { Link } from "react-router-dom";
import { ArrowLeft, Truck, RotateCcw, Package, Clock } from "lucide-react";

const ShippingReturns = () => {
  return (
    <div className="min-h-screen">
      <div className="border-b border-border bg-card py-12">
        <div className="container">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="mt-6 font-display text-4xl font-medium">Shipping & Returns</h1>
          <p className="mt-2 text-muted-foreground">
            Everything you need to know about delivery and returns
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-3xl space-y-16">
          {/* Shipping Section */}
          <section>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <Truck className="h-6 w-6 text-foreground" />
              </div>
              <h2 className="font-display text-2xl font-medium">Shipping</h2>
            </div>

            <div className="mt-8 space-y-6">
              <div className="rounded-sm border border-border p-6">
                <h3 className="font-medium">Standard Shipping</h3>
                <p className="mt-2 text-muted-foreground">
                  Free on all orders over $200. Delivery within 5-7 business days.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  For orders under $200, a flat rate of $10 applies.
                </p>
              </div>

              <div className="rounded-sm border border-border p-6">
                <h3 className="font-medium">Express Shipping</h3>
                <p className="mt-2 text-muted-foreground">
                  $25 flat rate. Delivery within 2-3 business days.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Available for all orders within the continental United States.
                </p>
              </div>

              <div className="rounded-sm border border-border p-6">
                <h3 className="font-medium">International Shipping</h3>
                <p className="mt-2 text-muted-foreground">
                  We ship to over 50 countries worldwide. Rates and delivery times vary by destination.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Import duties and taxes may apply and are the responsibility of the customer.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-sm bg-secondary p-6">
              <Clock className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Order Processing</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Orders placed before 2pm EST are processed the same business day. 
                  Orders placed after 2pm or on weekends will be processed the next business day.
                </p>
              </div>
            </div>
          </section>

          {/* Returns Section */}
          <section>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <RotateCcw className="h-6 w-6 text-foreground" />
              </div>
              <h2 className="font-display text-2xl font-medium">Returns</h2>
            </div>

            <div className="mt-8 space-y-6">
              <div className="rounded-sm border border-border p-6">
                <h3 className="font-medium">30-Day Return Policy</h3>
                <p className="mt-2 text-muted-foreground">
                  We offer free returns within 30 days of delivery. Items must be unworn, unwashed, 
                  and in their original packaging with all tags attached.
                </p>
              </div>

              <div className="rounded-sm border border-border p-6">
                <h3 className="font-medium">How to Return</h3>
                <ol className="mt-3 space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-xs text-background">1</span>
                    <span>Log into your account and navigate to your order history</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-xs text-background">2</span>
                    <span>Select the item(s) you wish to return and reason for return</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-xs text-background">3</span>
                    <span>Print the prepaid return label and attach it to your package</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-xs text-background">4</span>
                    <span>Drop off at any authorized carrier location</span>
                  </li>
                </ol>
              </div>

              <div className="rounded-sm border border-border p-6">
                <h3 className="font-medium">Refund Processing</h3>
                <p className="mt-2 text-muted-foreground">
                  Refunds are processed within 3-5 business days after we receive your return. 
                  The refund will be credited to your original payment method.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-sm bg-secondary p-6">
              <Package className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Exchanges</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  For exchanges, please return the original item and place a new order for the desired size or color. 
                  This ensures the fastest processing time.
                </p>
              </div>
            </div>
          </section>

          {/* Final Sale Items */}
          <section className="rounded-sm border border-primary/20 bg-primary/5 p-6">
            <h3 className="font-medium text-primary">Final Sale Items</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Items marked as "Final Sale" cannot be returned or exchanged. 
              This typically includes heavily discounted items and personalized products.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturns;

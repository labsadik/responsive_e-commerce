import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, Truck, Shield, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "United States",
    state: "",
    zipCode: "",
    phone: "",
    shippingMethod: "standard",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const shippingCost = formData.shippingMethod === "express" ? 25 : 0;
  const orderTotal = totalPrice + shippingCost;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();
    
    toast.success("Order placed successfully!", {
      description: "This is a demo - no real payment was processed.",
    });
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="container flex min-h-[60vh] flex-col items-center justify-center">
        <p className="text-lg text-muted-foreground">Your cart is empty</p>
        <Button variant="outline" className="mt-4" asChild>
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-10 w-10 text-primary" />
        </div>
        <h1 className="mt-6 font-display text-3xl font-medium">Thank You!</h1>
        <p className="mt-2 text-muted-foreground">
          Your order #MH{Date.now().toString().slice(-6)} has been placed.
        </p>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          This is a demo store. No real payment was processed and no products will be shipped.
        </p>
        <Button variant="hero" className="mt-8" asChild>
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-card">
      <div className="container py-8">
        <Link
          to="/products"
          className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        {/* Progress Steps */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                  step >= s
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {step > s ? <Check className="h-4 w-4" /> : s}
              </div>
              <span className={`hidden text-sm sm:block ${step >= s ? "text-foreground" : "text-muted-foreground"}`}>
                {s === 1 ? "Information" : s === 2 ? "Shipping" : "Payment"}
              </span>
              {s < 3 && <div className="hidden h-px w-12 bg-border sm:block" />}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="order-2 lg:order-1">
            {step === 1 && (
              <div className="animate-fade-in space-y-6">
                <h2 className="font-display text-2xl font-medium">Contact Information</h2>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="mt-1"
                  />
                </div>

                <Separator />

                <h2 className="font-display text-2xl font-medium">Shipping Address</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street address"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                  <Input
                    id="apartment"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="For delivery updates"
                    required
                    className="mt-1"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Continue to Shipping
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-6">
                <h2 className="font-display text-2xl font-medium">Shipping Method</h2>
                
                <RadioGroup
                  value={formData.shippingMethod}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, shippingMethod: value }))}
                  className="space-y-3"
                >
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-sm border p-4 transition-colors ${
                      formData.shippingMethod === "standard" ? "border-foreground bg-secondary" : "border-border"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="standard" id="standard" />
                      <div>
                        <p className="font-medium">Standard Shipping</p>
                        <p className="text-sm text-muted-foreground">5-7 business days</p>
                      </div>
                    </div>
                    <span className="font-medium">Free</span>
                  </label>
                  
                  <label
                    className={`flex cursor-pointer items-center justify-between rounded-sm border p-4 transition-colors ${
                      formData.shippingMethod === "express" ? "border-foreground bg-secondary" : "border-border"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="express" id="express" />
                      <div>
                        <p className="font-medium">Express Shipping</p>
                        <p className="text-sm text-muted-foreground">2-3 business days</p>
                      </div>
                    </div>
                    <span className="font-medium">$25.00</span>
                  </label>
                </RadioGroup>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" variant="hero" size="lg" className="flex-1">
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in space-y-6">
                <h2 className="font-display text-2xl font-medium">Payment</h2>
                
                <div className="rounded-sm border border-border bg-background p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CreditCard className="h-4 w-4" />
                    <span className="font-medium">Credit Card</span>
                  </div>
                  
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Your payment information is secure and encrypted</span>
                </div>

                <div className="rounded-sm border border-primary/20 bg-primary/5 p-4 text-center text-sm">
                  <p className="font-medium text-primary">Demo Mode</p>
                  <p className="mt-1 text-muted-foreground">
                    This is a prototype. No real payment will be processed.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button type="button" variant="outline" size="lg" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="flex-1"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : `Pay $${orderTotal.toFixed(2)}`}
                  </Button>
                </div>
              </div>
            )}
          </form>

          {/* Order Summary */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-24 rounded-sm border border-border bg-background p-6">
              <h2 className="font-display text-xl font-medium">Order Summary</h2>
              
              <div className="mt-6 space-y-4">
                {items.map(item => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="relative h-20 w-16 flex-shrink-0 overflow-hidden bg-secondary">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[10px] text-background">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.product.name}</p>
                      {(item.size || item.color) && (
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {item.size && `Size: ${item.size}`}
                          {item.size && item.color && " / "}
                          {item.color && `Color: ${item.color}`}
                        </p>
                      )}
                      <p className="mt-1 text-sm">${item.product.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Truck className="h-4 w-4" />
                <span>Free shipping on orders over $200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

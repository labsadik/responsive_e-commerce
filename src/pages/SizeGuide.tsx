import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sizeData = {
  tops: {
    title: "Tops, Shirts & Knitwear",
    headers: ["Size", "Chest (in)", "Waist (in)", "Sleeve (in)"],
    rows: [
      ["XS", "34-36", "28-30", "32"],
      ["S", "36-38", "30-32", "33"],
      ["M", "38-40", "32-34", "34"],
      ["L", "40-42", "34-36", "35"],
      ["XL", "42-44", "36-38", "36"],
      ["XXL", "44-46", "38-40", "37"],
    ],
  },
  trousers: {
    title: "Trousers & Bottoms",
    headers: ["Size", "Waist (in)", "Hip (in)", "Inseam (in)"],
    rows: [
      ["28", "28", "36", "32"],
      ["30", "30", "38", "32"],
      ["32", "32", "40", "32"],
      ["34", "34", "42", "32"],
      ["36", "36", "44", "32"],
      ["38", "38", "46", "32"],
    ],
  },
  outerwear: {
    title: "Outerwear & Suits",
    headers: ["Size", "Chest (in)", "Shoulder (in)", "Length (in)"],
    rows: [
      ["S", "36-38", "17", "28"],
      ["M", "38-40", "18", "29"],
      ["L", "40-42", "19", "30"],
      ["XL", "42-44", "20", "31"],
      ["XXL", "44-46", "21", "32"],
    ],
  },
  footwear: {
    title: "Footwear",
    headers: ["EU", "US", "UK", "Foot Length (cm)"],
    rows: [
      ["40", "7", "6.5", "25.0"],
      ["41", "8", "7.5", "25.7"],
      ["42", "9", "8.5", "26.4"],
      ["43", "10", "9.5", "27.1"],
      ["44", "11", "10.5", "27.8"],
      ["45", "12", "11.5", "28.5"],
      ["46", "13", "12.5", "29.2"],
    ],
  },
};

const SizeGuide = () => {
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
          <h1 className="mt-6 font-display text-4xl font-medium">Size Guide</h1>
          <p className="mt-2 text-muted-foreground">
            Find your perfect fit with our comprehensive size charts
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* How to Measure */}
          <section className="rounded-sm border border-border p-6">
            <h2 className="font-display text-xl font-medium">How to Measure</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-medium">Chest</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Measure around the fullest part of your chest, keeping the tape horizontal.
                </p>
              </div>
              <div>
                <p className="font-medium">Waist</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Measure around your natural waistline, just above the hip bones.
                </p>
              </div>
              <div>
                <p className="font-medium">Hip</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Measure around the fullest part of your hips, about 8" below your waist.
                </p>
              </div>
              <div>
                <p className="font-medium">Inseam</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Measure from the crotch to the bottom of the leg along the inner seam.
                </p>
              </div>
            </div>
          </section>

          {/* Size Tables */}
          {Object.entries(sizeData).map(([key, data]) => (
            <section key={key}>
              <h2 className="font-display text-xl font-medium">{data.title}</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-secondary">
                      {data.headers.map((header, i) => (
                        <th
                          key={i}
                          className="border border-border px-4 py-3 text-left font-medium"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.rows.map((row, i) => (
                      <tr key={i} className="border-b border-border">
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className={`border border-border px-4 py-3 ${
                              j === 0 ? "font-medium" : "text-muted-foreground"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          {/* Fit Guide */}
          <section className="rounded-sm bg-secondary p-6">
            <h2 className="font-display text-xl font-medium">Our Fit Types</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="font-medium">Slim Fit</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tailored close to the body for a modern, streamlined silhouette.
                </p>
              </div>
              <div>
                <p className="font-medium">Regular Fit</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Classic proportions with comfortable room through the body.
                </p>
              </div>
              <div>
                <p className="font-medium">Relaxed Fit</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Generous cut for maximum comfort and easy movement.
                </p>
              </div>
            </div>
          </section>

          {/* Note */}
          <section className="text-center text-sm text-muted-foreground">
            <p>
              If you're between sizes, we recommend sizing up for a more relaxed fit 
              or sizing down for a slimmer fit.
            </p>
            <p className="mt-2">
              Need help? <Link to="/contact" className="underline underline-offset-4 hover:text-foreground">Contact our styling team</Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;

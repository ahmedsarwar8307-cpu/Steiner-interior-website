import { Download, ExternalLink } from "lucide-react";

export function ProductPdfs({ pdfs }: { pdfs: { name: string; file: string }[] }) {
  return (
    <div className="mt-24 border-t border-border pt-16">
      <h2 className="text-3xl">HDF Flooring &amp; PDF</h2>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        View or download detailed specifications for this product.
      </p>

 <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {pdfs.map((pdf) => (
          <div key={pdf.file} className="rounded-sm border border-border bg-card p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-medium text-foreground">{pdf.name}</h3>
              <div className="flex gap-4 text-xs uppercase tracking-[0.14em]">
                <a

                  href={pdf.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold hover:underline"
                >
                  <ExternalLink className="size-3.5" /> Open
                </a>
                <a
                  href={pdf.file}
                  download
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                >
                  <Download className="size-3.5" /> Download
                </a>
              </div>
            </div>
            <iframe
              src={pdf.file}
              title={pdf.name}
              className="mt-4 h-[240px] w-full rounded-sm border border-border"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
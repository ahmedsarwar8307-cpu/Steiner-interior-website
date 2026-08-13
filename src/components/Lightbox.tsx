import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  images: string[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  title?: string;
};

export function Lightbox({ images, index, onClose, onIndexChange, title }: Props) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange(((index ?? 0) + 1) % images.length);
      if (e.key === "ArrowLeft") onIndexChange(((index ?? 0) - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, images.length, onClose, onIndexChange]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title ?? "Image gallery"}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-charcoal"
          >
            <X className="size-5" />
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange(((index ?? 0) - 1 + images.length) % images.length);
                }}
                className="absolute left-3 flex size-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-charcoal md:left-8"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange(((index ?? 0) + 1) % images.length);
                }}
                className="absolute right-3 flex size-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:bg-ivory hover:text-charcoal md:right-8"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          ) : null}

          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            src={images[index ?? 0]}
            alt={title ? `${title} — image ${(index ?? 0) + 1}` : `Image ${(index ?? 0) + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[92vw] rounded-sm object-contain"
          />

          <p className="absolute bottom-5 text-xs uppercase tracking-[0.24em] text-ivory/60">
            {(index ?? 0) + 1} / {images.length}
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

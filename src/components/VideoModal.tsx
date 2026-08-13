import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { ProjectVideo } from "@/data/videos";

export function VideoModal({
  video,
  onClose,
}: {
  video: ProjectVideo | null;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (video && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [video]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {video ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close video"
            >
              <X className="size-5" />
            </button>

            <div className="overflow-hidden rounded-sm bg-black shadow-2xl">
              <video
                ref={videoRef}
                src={video.src}
                controls
                autoPlay
                playsInline
                className="mx-auto max-h-[75vh] w-auto max-w-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-4 text-center">
              <h3 className="font-display text-xl text-white">{video.title}</h3>
              <p className="mt-1 text-sm text-white/70">{video.description}</p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
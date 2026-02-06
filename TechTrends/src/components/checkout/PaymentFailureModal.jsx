import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function PaymentFailureModal({
  open,
  onClose,
  appDownloadLink = "/app-download.apk",
}) {
  if (!open) return null;

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">

      {/* Modal Card */}
      <div className="relative bg-[#16252d] border border-[#233c48] rounded-xl p-8 max-w-md w-full text-center shadow-2xl animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* Failure Icon */}
        <div className="text-red-500 text-6xl mb-4">
          ⚠️
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2">
          Payment Failed
        </h2>

        {/* Message */}
        <p className="text-gray-400 mb-6 leading-relaxed">
          Your transaction could not be completed.
          <br />
          Please download our mobile app to continue checkout securely.
        </p>

        {/* Download Button */}
        <a
          href={appDownloadLink}
          download
          className="block w-full bg-primary text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
        >
          Download Our App
        </a>

        
      </div>
    </div>,
    document.body
  );
}

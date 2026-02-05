import WishlistCard from "./WishlistCard";

const ITEMS = [
  {
    id: 1,
    name: "HyperX Cloud Alpha",
    subtitle: "Gaming Headset - Red/Black",
    price: 99.99,
    status: "in",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaQiTBYG2LXgH0eJAZjc5L1W17pHsJx_Wo1ilQsqEqTXvaN9m7INEhHL7wpryU90VCkHchM9l9hVxQ0IrXh0nAmX9r7l3cLoNWjXNVztsbijLAD7QBAHPkgirbxPpwDJPHd7ZgJMWUwr81shv7SbhjsVjw_P4-aqK3EonucKMz7MFrDm9eK9Q8Q8pWHih5Wz72J1H1Tkf_ypZiJW-8E5UtTBuH_DOVMSbxlVDhtUwSqp1Cdf2pCvKSuW8GJGxfr9gfZzIkfmyM0Ut1",
  },
  {
    id: 2,
    name: "Keychron K2 V2",
    subtitle: "Wireless Mechanical Keyboard",
    price: 79,
    status: "in",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPwa28G5JTJmKNWujf0yAuFcfZQ0SNhNql0q708G3b7RA3ckrdidGKrBnzEAJYGGEoOyyQG4zRdAawgVNNOgUHhGiPE4YW--_MLOShcEnSJouZ_d7qsfic7Zy59sv4PNQV0-mX46eGVuwkMb3bYECCvHJEh17rEtJE_P0KHe7m1nUIYFw17bY0VY10bq_SjhbyESVSJ5V1UVglayA23VunG5GmfAJmOrgOpKYMyWMxfeUQUMgmYrlZG94fBzqOGMuE27GBHKErPW3s",
  },
  {
    id: 3,
    name: "Sony WF-1000XM4",
    subtitle: "Noise Canceling Earbuds",
    price: 248,
    status: "low",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQmhZ-ZeWZgA5qrTdojb9aaYICPw23Azp4C7BJKuq4ebohUz_SJIZStjA7d-X-vTSVC2YLIGP-KNM3b9pEGQIUixniDlck7Hx5Eognpod7tJ4z2cpelQe71qod1AXZbgUaYBQxupIcYgBBVjP6qp6UXXpZn5Oyg40P6WQlV2FpV7ZGbXfrDaH8_o8U78m2FxZgrsXc1FU9hMPoPbtQWOiiwaXs1d7SJvl58wZm5kiA2iGi6pU2sryX8oLB5wOeoe0TmcvDXN7B7bSb",
  },
  {
    id: 4,
    name: "Logitech MX Master 3S",
    subtitle: "Performance Wireless Mouse",
    price: 99.99,
    status: "in",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYlKXNmNBtaz1lOWKq--Cw5_Gs-WuEMXIZ8KZvYxCbj8--pBfE03hOkfTkvKXkDBaHiO4c4rGf5RmG5ik5S1daD5EmblZI22i0R9H_E119Z5J7HrTxQT7S7ZNwCCk0n_YQk9PSRgAmWcXnTqBY5iTeMnWhIx1arpQKzCnpflzOpFnsOLg-D3eyQu0N5ppTEstfC6ns6YyN40U5JdgVcSSz0s_DaPbPP_fCTDjMfQiQUhFA45x2BdMghu4uOXUBoeZFoKxM6KhEmpsB",
  },
  {
    id: 5,
    name: "Dell XPS 15",
    subtitle: "OLED Touch Laptop",
    price: 1899,
    status: "out",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOdBvCWvdorUc3tEmYCOBL2wbCFffRQa6KLcN0-thBYKszyObgZ2Bsjj0UxioBbGr9k2ESXvhK-3ot-i4Yg7vxrBUpt0q4ddWDJran4adQ7gJx6c7XQJsd4I_na196ltXIs3rpy1USH9ACE_vHJlaLWuozr-BtDyMGPVtTyZGuQge3Z9QNRiMZ0qfmXqDFiJOXXr3EKh1KAMV09bMCglzmr4WdUwU4iPwB4GwIPNLYytoBuxdKFiEbSMtZ3k713_7HDsZxGUjm5YHa",
  },
];

export default function WishlistGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {ITEMS.map((item) => (
        <WishlistCard key={item.id} item={item} />
      ))}
    </div>
  );
}


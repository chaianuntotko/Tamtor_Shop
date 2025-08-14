import React, { useState, useMemo } from "react";

// GraduationProductShop.jsx
// Single-file React component (default export).
// - Tailwind CSS utility classes are used for styling (make sure Tailwind is configured in your project)
// - Copy this file into src/components/GraduationProductShop.jsx and import it into your App
// - Images use Unsplash placeholders; replace with your own image paths or cloud URLs

const PRODUCTS = [
  {
    id: 1,
    category: "ช่อดอกไม้",
    title: "ช่อทานตะวันไหมมพรมสดใส",
    price: 150,
    image: "Bouquet/im1.png",
    description: "ช่อไหมมพรมดอกทานตะวัน สวยงามและประณีต ผลงานแฮนด์เมดที่ใช้ไหมมพรมคุณภาพดี รังสรรค์เป็นดอกทานตะวันที่สดใสและเปี่ยมด้วยพลังแห่งความสุข เหมาะสำหรับเป็นของขวัญแทนใจในทุกโอกาส ไม่ว่าจะเป็นงานรับปริญญา วันเกิด หรือเป็นของตกแต่งบ้านที่อบอุ่นและมีเอกลักษณ์เฉพาะตัว ดอกไม้ไหมมพรมนี้ไม่มีวันเหี่ยวเฉา เหมือนความรักและความทรงจำที่ยั่งยืน",
  },
  {
    id: 2,
    category: "ช่อธนบัตร",
    title: "ช่อธนบัตร & ดอกไหมพรม",
    price: 530,
    image: "Bouquet/Bouquet2.png",
    description: "Sunny sunflowers to celebrate a joyful graduation day.  เงิน",
  },
  {
    id: 3,
    category: "ช่อดอกไม้",
    title: "ช่อตุ๊กตา & ดอกไหมพรม",
    price: 250,
    image: "Bouquet/Bouquet3.png",
    description: "Premium sash with gold embroidery and satin finish.",
  },
  {
    id: 4,
    category: "ช่อดอกไม้",
    title: "ช่อตุ๊กตา & ดอกไหมพรม",
    price: 250,
    image: "Bouquet/Bouquet4.png",
    description: "Personalize with name and faculty; perfect keepsake.",
  },
  {
    id: 5,
    category: "สายสะพาย",
    title: "สายสะพาย Congratulations",
    price: 100,
    image: "line/line1.png",

    description: "Adorable teddy dressed in mini graduation gown.",
  },
  {
    id: 6,
    category: "สายสะพาย",
    title: "สายสะพาย ข้อความ",
    price: 100,
    image: "line/line2.png",

    description: "Adorable teddy dressed in mini graduation gown.",
  },

  {
    id: 7,
    category: "doll",
    title: "Custom Plushie",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1533779283484-8b0e7f1b8b4a?auto=format&fit=crop&w=800&q=60",
    description: "Design your own plushie with custom outfit and name tag.",
  },
  {
    id: 8,
    category: "giftset",
    title: "Bouquet + Teddy Set",
    price: 980,
    image:
      "https://images.unsplash.com/photo-1526312426976-2aaec9ac8aaa?auto=format&fit=crop&w=800&q=60",
    description: "A combo set: bouquet plus a small teddy. Great value!",
  },
  {
    id: 9,
    category: "accessory",
    title: "Mini Graduation Cap Keychain",
    price: 920,
    image:
      "https://images.unsplash.com/photo-1618221282072-45f7c2f8b7a0?auto=format&fit=crop&w=800&q=60",
    description: "Small keepsake keychain to remember the day.",
  },
];

const CATEGORIES = [
  { id: "all", label: "ทั้งหมด" },
  { id: "ช่อดอกไม้", label: "ช่อดอกไม้" },
  { id: "ช่อธนบัตร", label: "ช่อธนบัตร" },
  { id: "สายธนบัตร", label: "สายธนบัตร" },
  { id: "สายสะพาย", label: "สายสะพาย" },
  { id: "ตุ๊กตา", label: "ตุ๊กตา" },
  { id: "อื่นๆ", label: "อื่นๆ" },
];

export default function GraduationProductShop() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' = ต่ำไปสูง, 'desc' = สูงไปต่ำ
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let result = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price > maxPrice) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });

    // จัดเรียงตามราคา
    result.sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    return result;
  }, [category, query, maxPrice, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-[#826d5a] via-[#826d5a] to-[#ffffff] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">TamtorShop</h1>
            <p className="text-sm opacity-90">ช่อดอกไม้ สายสะพาย ตุ๊กตา และของที่ระลึก — ค้นหาของขวัญรับปริญญาที่สมบูรณ์แบบ.</p>
          </div>
          <div className="w-full sm:w-auto">
            <div className="relative">
              <input
                type="search"
                placeholder="Search products, e.g. 'rose', 'sash'..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full sm:w-80 rounded-md px-3 py-2 text-gray-800 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        {/* Category filters */}
        <nav className="flex gap-2 overflow-auto py-4">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-medium transition-shadow hover:shadow-md ${category === c.id ? "bg-indigo-600 text-white" : "bg-white text-gray-700"
                }`}
            >
              {c.label}
            </button>
          ))}
        </nav>

        {/* Sort & Price Slider */}
        <div className="mb-6 flex flex-wrap gap-6 items-center">
          {/* Sort */}
          <label className="flex items-center gap-2 text-gray-700">

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded px-3 py-1"
            >
              <option value="asc">ต่ำ → สูง</option>
              <option value="desc">สูง → ต่ำ</option>
            </select>
          </label>

          {/* Price Slider */}
          <div className="flex-grow min-w-[200px]">
            <label className="block text-gray-700 mb-1 font-semibold">
              เลือกช่วงราคาสูงสุด:
            </label>

            {/* Slider */}
            <input
              type="range"
              min={0}
              max={100000}
              step={500}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />

            {/* Input ให้พิมพ์ราคาด้วย */}
            <input
              type="number"
              min={0}
              max={100000}
              step={500}
              value={maxPrice}
              onChange={(e) => {
                let val = Number(e.target.value);
                if (val < 0) val = 0;
                if (val > 100000) val = 100000;
                setMaxPrice(val);
              }}
              className="w-24 mt-2 border-2 border-[#826d5a] rounded-3xl px-2 py-1"
            />

            <div className="text-sm text-gray-600 mt-1">
              ราคาตั้งแต่ 0 ถึง {maxPrice.toLocaleString()} บาท
            </div>
          </div>
        </div>


        {/* Product grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1"
                onClick={() => setSelected(p)}
                aria-label={`Open details for ${p.title}`}
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg truncate">{p.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 truncate">{p.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-[#393430] font-bold">฿{p.price}</div>
                    <div className="text-xs bg-[#c9aa6a] px-2 py-1 rounded-full">{p.category}</div>
                  </div>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full text-center py-12 text-gray-500">
                ไม่พบสินค้าในช่วงราคาที่กำหนด
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Modal - product details */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img src={selected.image} alt={selected.title} className="w-full h-auto object-cover" />
              </div>
              <div className="p-6 md:w-1/2">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold">{selected.title}</h2>
                  <button
                    onClick={() => setSelected(null)}
                    aria-label="Close details"
                    className="text-gray-500 hover:text-gray-800"
                  >
                    ✕
                  </button>
                </div>
                <p className="mt-3 text-gray-600">{selected.description}</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="text-2xl font-extrabold">฿{selected.price}</div>
                  <div className="text-sm text-gray-500 px-3 py-1 bg-gray-100 rounded-full">Category: {selected.category}</div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button className="w-full sm:w-auto px-5 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:opacity-95">
                    Add to Cart
                  </button>
                  <button className="w-full sm:w-auto px-5 py-2 bg-white border rounded-md">Customize / Order</button>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  <p>Need bulk orders or customization? Click "Customize / Order" to get a quote.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal - product details */}
      {/* ... modal เดิม */}

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} แต้ม ต่อ Shop — Made with care
      </footer>
    </div>
  );
}

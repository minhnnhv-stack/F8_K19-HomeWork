// src/components/filters/CategoryChips.jsx

export default function CategoryChips() {
  const categories = [
    {
      id: 1,
      name: "Điện thoại chơi game",
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gamning.png",
    },
    {
      id: 2,
      name: "Điện thoại pin trâu",
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-pin.png",
    },
    {
      id: 3,
      name: "Điện thoại 5G",
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-5g_1.png",
    },
    {
      id: 4,
      name: "Điện thoại chụp ảnh đẹp",
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-chup-anh.png",
    },
    {
      id: 5,
      name: "Điện thoại gập",
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Web/icon/mobile-gap_1.png",
    },
    {
      id: 6,
      name: "Điện thoại AI",
      image:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:96:96/q:90/plain/https://cellphones.com.vn/media/wysiwyg/dien-thoai-ai-icon-cate.png",
    },
  ];

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-1">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className="flex items-center gap-1 bg-[#f3f4f6] hover:bg-gray-200 transition-colors rounded-lg p-1 w-full border border-transparent cursor-pointer"
        >
          <div className="w-12 h-12 shrink-0">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-contain"
            />
          </div>

          <span className="text-[12px] font-semibold text-gray-800 text-left leading-tight">
            {cat.name}
          </span>
        </button>
      ))}
    </div>
  );
}

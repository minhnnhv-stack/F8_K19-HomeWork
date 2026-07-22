export default function BrandChips() {
  const brands = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "OPPO",
    "TECNO",
    "HONOR",
    "Nubia",
    "Sony",
    "Nokia",
    "Infinix",
    "Nothing",
  ];

  return (
    <div className="relative flex items-center w-full mb-1 overflow-hidden">
      <div className="flex items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden w-full pr-28 py-1">
        {brands.map((brand, index) => (
          <button
            key={index}
            className="px-4 py-1.5 bg-white border border-gray-300 rounded-full text-[13px] font-medium text-gray-700 whitespace-nowrap hover:border-blue-500 hover:text-blue-500 transition-colors"
          >
            {brand}
          </button>
        ))}
      </div>

      <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end bg-linear-to-l from-white via-white to-transparent w-32 pr-2">
        <button className="text-blue-600 text-[13px] font-medium flex items-center gap-1 hover:underline bg-white pl-2">
          Xem tất cả
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

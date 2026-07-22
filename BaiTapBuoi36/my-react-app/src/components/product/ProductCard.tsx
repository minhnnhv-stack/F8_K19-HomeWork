export default function ProductCard({ data }: { data: any }) {
  return (
    <div className="relative flex flex-col bg-white border border-gray-200 rounded-2xl p-3 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-shadow duration-300 cursor-pointer h-full">
      {data.discountPercent && (
        <div className="absolute top-0 left-0 bg-[#d70018] text-white text-[11px] font-bold px-2 py-1 rounded-tl-2xl rounded-br-xl z-10 shadow-sm">
          {data.discountPercent}
        </div>
      )}

      {data.installment && (
        <div className="absolute top-0 right-0 bg-blue-50 text-blue-600 border border-blue-200 text-[10px] font-semibold px-2 py-1 rounded-tr-2xl rounded-bl-xl z-10">
          {data.installment}
        </div>
      )}

      <div className="w-full h-44 mt-4 flex items-center justify-center p-2">
        <img
          src={data.image}
          alt={data.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex flex-col flex-1 mt-2">
        <h3 className="text-sm font-bold text-gray-800 line-clamp-2 min-h-10 leading-snug">
          {data.name}
        </h3>

        <div className="flex items-end gap-2 mt-1">
          <span className="text-[#d70018] font-bold text-[15px]">
            {data.currentPrice}
          </span>
          {data.oldPrice && (
            <span className="text-gray-400 text-xs font-semibold line-through mb-0.5">
              {data.oldPrice}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5 mt-3">
          {data.promos?.map((promo: any, index: number) => (
            <div
              key={index}
              className={`text-[11px] px-2 py-1 rounded font-medium ${
                promo.type === "blue"
                  ? "bg-[#e5efff] text-[#0050d2]"
                  : "bg-[#f0e8ff] text-[#5e23b2]"
              }`}
            >
              {promo.text}
            </div>
          ))}
        </div>

        <div className="bg-[#f3f4f6] text-gray-600 text-[11px] p-2 rounded border border-gray-200 mt-2 mb-3 leading-tight">
          {data.note}
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 mt-auto">
        <div className="flex items-center gap-2">
          <div className="flex items-center text-blue-600 text-[11px] font-bold gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 106 0h3a.75.75 0 00.75-.75V15z" />
              <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
              <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
            {data.delivery}
          </div>

          <div className="flex items-center text-[12px] font-bold text-gray-700 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f59e0b"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            {data.rating}
          </div>
        </div>

        <button className="text-gray-400 hover:text-red-500 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

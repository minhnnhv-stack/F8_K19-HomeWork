import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("phone");

  return (
    <div className="flex w-full border-b border-gray-200 mb-4 bg-white rounded-t-xl overflow-hidden">
      <button
        onClick={() => setActiveTab("phone")}
        className={`flex-1 relative flex items-center justify-center h-14 font-bold text-sm md:text-base transition-all duration-300 ${
          activeTab === "phone"
            ? "text-red-600 border-b-2 border-red-600 bg-linear-to-t from-red-50 to-white"
            : "text-gray-800 hover:text-red-600 border-b-2 border-transparent"
        }`}
      >
        ĐIỆN THOẠI
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-200"></div>
      </button>

      <button
        onClick={() => setActiveTab("tablet")}
        className={`flex-1 flex items-center justify-center h-14 font-bold text-sm md:text-base transition-all duration-300 ${
          activeTab === "tablet"
            ? "text-red-600 border-b-2 border-red-600 bg-linear-to-t from-red-50 to-white"
            : "text-gray-800 hover:text-red-600 border-b-2 border-transparent"
        }`}
      >
        MÁY TÍNH BẢNG
      </button>
    </div>
  );
}

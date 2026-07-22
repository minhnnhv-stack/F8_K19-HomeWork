export default function Sidebar() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
        <img
          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:321:795/q:100/plain/https://media-asset.cellphones.com.vn/page_configs/01KWE8EDQE54YXMHVKP0GA8HJD.png"
          alt="Banner iPhone"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      <div className="w-full rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
        <img
          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:321:795/q:100/plain/https://media-asset.cellphones.com.vn/page_configs/01KWZQJZAX8D63YB392VZ0QNCJ.png"
          alt="Banner Samsung"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </div>
  );
}

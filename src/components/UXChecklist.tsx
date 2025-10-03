"use client";

import { useState, useEffect } from "react";

type Item = {
  id: string;
  label: string;
};

const defaultItems: Item[] = [
  { id: "soundcheck", label: "Kiểm tra âm thanh trước giờ diễn" },
  { id: "rehearsal", label: "Rehearsal đầy đủ với ekip" },
  { id: "instruments", label: "Bảo trì nhạc cụ, thay dây/skin" },
  { id: "timeline", label: "Xác nhận timeline với MC/đơn vị tổ chức" },
  { id: "backup", label: "Chuẩn bị thiết bị dự phòng (dây, pin, IEM...)" },
];

export default function UXChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // Load trạng thái từ localStorage khi mở trang
  useEffect(() => {
    const saved = localStorage.getItem("ux-checklist");
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  // Lưu trạng thái vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("ux-checklist", JSON.stringify(checked));
  }, [checked]);

  const toggleItem = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-4 rounded-xl bg-neutral-900 p-6 shadow-lg ring-1 ring-white/10">
      <h3 className="text-xl font-semibold text-white">Ekip Checklist</h3>
      <ul className="space-y-3">
        {defaultItems.map((item) => (
          <li key={item.id} className="flex items-center space-x-3">
            <input
              type="checkbox"
              id={item.id}
              checked={!!checked[item.id]}
              onChange={() => toggleItem(item.id)}
              className="h-4 w-4 rounded border-gray-400 text-amber-500 focus:ring-amber-400"
            />
            <label
              htmlFor={item.id}
              className={`cursor-pointer text-sm ${
                checked[item.id] ? "line-through text-gray-400" : "text-gray-200"
              }`}
            >
              {item.label}
            </label>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-400">
        *Trạng thái checklist sẽ được lưu tại trình duyệt của bạn.
      </p>
    </div>
  );
}

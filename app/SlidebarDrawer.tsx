"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function SidebarDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        <Menu size={30} className="text-purple-600" />
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg">Цэс</h2>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>
            <ul className="space-y-4">
              <li className="cursor-pointer hover:text-purple-600">🏠 Нүүр</li>
              <li className="cursor-pointer hover:text-purple-600">👤 Профайл</li>
              <li className="cursor-pointer hover:text-purple-600">⚙️ Тохиргоо</li>
              <li className="cursor-pointer hover:text-purple-600">🚪 Гарах</li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
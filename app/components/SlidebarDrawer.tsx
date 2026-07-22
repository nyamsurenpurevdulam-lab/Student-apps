"use client";

import Link from "next/link";
import { Menu, Home, User, Settings, LogOut } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


export default function SidebarDrawer() {
  return (
    <Sheet>

      {/* ☰ Button */}
      <SheetTrigger
        render={
          <button
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Menu
              size={30}
              className="text-purple-600"
            />
          </button>
        }
      />


      {/* Sidebar */}
      <SheetContent
        side="left"
        className="w-[280px]"
      >

        <SheetHeader>
          <SheetTitle>
            Цэс
          </SheetTitle>
        </SheetHeader>


        <nav className="mt-8 flex flex-col gap-5 px-4">


          <Link
            href="/"
            className="flex items-center gap-3 hover:text-purple-600"
          >
            <Home size={20} />
            Нүүр
          </Link>


          <Link
            href="/profile"
            className="flex items-center gap-3 hover:text-purple-600"
          >
            <User size={20} />
            Профайл
          </Link>


          <Link
            href="/settings"
            className="flex items-center gap-3 hover:text-purple-600"
          >
            <Settings size={20} />
            Тохиргоо
          </Link>


          <Link
            href="/login"
            className="flex items-center gap-3 text-red-500"
          >
            <LogOut size={20} />
            Гарах
          </Link>


        </nav>


      </SheetContent>

    </Sheet>
  );
}
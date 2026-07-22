"use client";

import React from "react";
// Lucide icons
import {
  Bell,
  Quote,
  Menu,
  Settings,
  Globe,
  GraduationCap,
  Presentation,
  DoorOpen,
  FilePen,
  IdCard,
  Megaphone,
  LogOut,
} from "lucide-react";

// Shadcn UI components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// 1. SidebarMenu Компонент
function SidebarMenu() {
  const menuItems = [
    { title: "Тохиргоо", icon: Settings, href: "#" },
    { title: "Хэл солих", icon: Globe, href: "#" },
    { title: "Сурагчдын мэдээлэл", icon: GraduationCap, href: "#" },
    { title: "Багшийн мэдээлэл", icon: Presentation, href: "#" },
    { title: "Өрөөний мэдээлэл", icon: DoorOpen, href: "#" },
    { title: "Чөлөө авах", icon: FilePen, href: "#" },
    { title: "Бүртгэл", icon: IdCard, href: "#" },
    { title: "Зарлал", icon: Megaphone, href: "#" },
  ];

  return (
    <Sheet>
      <SheetTrigger className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors border-none outline-none">
        <Menu className="w-6 h-6" />
      </SheetTrigger>

      <SheetContent side="left" className="w-[280px] p-6 flex flex-col justify-between">
        <div>
          <SheetHeader className="mb-6">
            <SheetTitle className="text-xl font-bold text-slate-800 text-left">
              Цэс
            </SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <Icon className="w-5 h-5 text-slate-500" />
                  <span>{item.title}</span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-red-500 rounded-lg hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Гарах</span>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// 2. Үндсэн Нүүр хуудас
export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 flex justify-center items-start">
      {/* Дэлгэцийн төвд байрлах карт сав */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-6">
        
        {/* Header хэсэг: Цэс, Гарчиг, Мэдэгдэл */}
        <div className="flex items-center justify-between">
          <SidebarMenu />
          
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            Нүүр
          </h1>

          <Button variant="ghost" size="icon" className="relative rounded-full">
            <Bell className="w-5 h-5 text-slate-600" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]"
            >
              3
            </Badge>
          </Button>
        </div>

        {/* Агуулгын карт (Quote Card) */}
        <Card className="border-slate-200/80 bg-slate-50/50 shadow-none">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Өдрийн ишлэл
            </CardTitle>
            <Quote className="w-4 h-4 text-slate-400 rotate-180" />
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed text-sm font-normal">
              Харамсахгүйн тулд хамаг чадлаараа хичээ. Шаргуу хичээлийнхээ үр дүнг
              өөртөө хүлээн зөвшөөр. Гаргасан амжилт чинь чиний өмнөөс ярих болно.
              Дэмий хэрэггүй оролдох хийж байдаг хүмүүс л боломжгүй зүйлд хүч чаддаг.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
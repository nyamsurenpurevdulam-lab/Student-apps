"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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

export default function HomePage() {
  const router = useRouter();

  // 1. Хэл солих хуудас эсвэл функц рүү ордог болгох
  const handleLanguageClick = () => {
    // Хэрэв тусдаа хэл солих хуудастай бол:
    router.push("/settings/language"); 
  };

  // 2. Системээс гарах хэсэг
  const handleLogout = () => {
    // Session / Token цэвэрлэх шаардлагатай бол энд бичнэ:
    // localStorage.removeItem("token");
    
    // Нэвтрэх хуудас руу чиглүүлэх
    router.push("/login");
  };

  // Цэсний жагсаалт (Бусад бүх хэсгийг disabled: true болгосон)
  const menuItems = [
    { title: "Тохиргоо", icon: Settings, disabled: true },
    { title: "Сурагчдын мэдээлэл", icon: GraduationCap, disabled: true },
    { title: "Багшийн мэдээлэл", icon: Presentation, disabled: true },
    { title: "Өрөөний мэдээлэл", icon: DoorOpen, disabled: true },
    { title: "Чөлөө авах", icon: FilePen, disabled: true },
    { title: "Бүртгэл", icon: IdCard, disabled: true },
    { title: "Зарлал", icon: Megaphone, disabled: true },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 flex justify-center items-start">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-6">
        
        {/* Header хэсэг */}
        <div className="flex items-center justify-between">
          
          {/* Sidebar Menu */}
          <Sheet>
            <SheetTrigger className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors border-none outline-none">
              <Menu className="w-6 h-6" />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-[280px] p-6 flex flex-col justify-between"
            >
              <div>
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-xl font-bold text-slate-800 text-left">
                    Цэс
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-1">
                  
                  {/* 1. ХЭЛ СОЛИХ (ИДЭВХТЭЙ - ХУУДАС РУУ ОРДОГ) */}
                  <button
                    onClick={handleLanguageClick}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-100 text-left w-full transition-colors cursor-pointer"
                  >
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-600">
                      Хэл солих
                    </span>
                  </button>

                  {/* 2. БУСАД ЦЭСҮҮД (ИДЭВХГҮЙ / DISABLED) */}
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg select-none opacity-40 text-slate-400 cursor-not-allowed pointer-events-none"
                      >
                        <Icon className="w-5 h-5 text-slate-400" />
                        <span>{item.title}</span>
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* 3. ГАРАХ ТОВЧЛУУР (ИДЭВХТЭЙ - LOGIN РУУ ОРДОГ) */}
              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-red-500 rounded-lg hover:bg-red-50 w-full text-left transition-colors cursor-pointer"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Гарах</span>
                </button>
              </div>
            </SheetContent>
          </Sheet>

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

        {/* Агуулгын карт */}
        <Card className="border-slate-200/80 bg-slate-50/50 shadow-none">
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Өдрийн ишлэл
            </CardTitle>
            <Quote className="w-4 h-4 text-slate-400 rotate-180" />
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed text-sm font-normal">
              Харамсахгүйн тулд хамаг чадлаараа хичээ. Шаргуу хичээлийнхээ үр дүнг өөртөө хүлээн зөвшөөр. Гаргасан амжилт чинь чиний өмнөөс ярих болно.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
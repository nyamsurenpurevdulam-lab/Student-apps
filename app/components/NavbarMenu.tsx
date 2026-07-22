import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, Settings, LogOut, Menu } from "lucide-react"

export function NavbarMenu() {
  return (
    <DropdownMenu>
      {/* asChild-ийг устгаж, анхны товчлуурыг shadcn button-ий классаар загварчлав */}
      <DropdownMenuTrigger className="flex items-center gap-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
        <Menu className="h-4 w-4" />
        <span>Цэс</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel>Миний бүртгэл</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem className="cursor-pointer flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Профайл</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer flex items-center gap-2">
          <Settings className="h-4 w-4" />
          <span>Тохиргоо</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 flex items-center gap-2">
          <LogOut className="h-4 w-4" />
          <span>Гарах</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

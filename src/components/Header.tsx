"use client";

import React from "react";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon, SearchIcon, XIcon, CrownIcon, UserIcon } from "./icons";

const CATEGORIES = [
  "Âm thực – Nấu ăn",
  "Cổ Tích – Thần Thoại",
  "Công Nghệ Thông Tin",
  "Học Ngoại Ngữ",
  "Hồi Ký – Tùy Bút",
  "Huyền bí – Giả Tưởng",
  "Khoa Học – Kỹ Thuật",
  "Kiếm Hiệp – Tiên Hiệp",
  "Kiến Trúc – Xây Dựng",
  "Kinh Tế – Quản Lý",
  "Lịch Sử – Chính Trị",
  "Marketing – Bán hàng",
  "Nông – Lâm – Ngư",
  "Phiêu Lưu – Mạo Hiểm",
  "Sách Giáo Khoa",
  "Tâm Lý – Kỹ Năng Sống",
  "Thể Thao – Nghệ Thuật",
  "Thư Viện Pháp Luật",
  "Tiểu Thuyết Phương Tây",
  "Tiểu Thuyết Trung Quốc",
  "Triết Học",
  "Trinh Thám – Hình Sự",
  "Truyện Cười – Tiếu Lâm",
  "Truyện Ma – Truyện Kinh Dị",
  "Truyện Ngắn – Ngôn Tình",
  "Truyện Teen – Tuổi Học Trò",
  "Truyện Tranh",
  "Tử Vi – Phong Thủy",
  "Văn Hóa – Tôn Giáo",
];

export default function Header() {
  const [showCats, setShowCats] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/20 bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg">
                L
              </div>
              <span className="text-xl font-bold text-white tracking-wide">Lumiread</span>
            </Link>
          </div>
          {/* Center: Xem thêm dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCats((v) => !v)}
              className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
            >
              <span>Xem thêm</span>
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${showCats ? "rotate-180" : ""}`} />
            </button>
            {showCats && (
              <div className="absolute left-0 mt-2 max-h-[70vh] w-[260px] overflow-auto rounded-md border border-white/10 bg-[#121212] py-2 shadow-2xl">
                {CATEGORIES.map((c) => (
                  <a key={c} href="#" className="block px-3 py-2 text-sm text-white/90 hover:bg-white/5" onClick={() => setShowCats(false)}>
                    {c}
                  </a>
                ))}
              </div>
            )}
          </div>

          

          {/* Right nav */}
          <nav className="hidden lg:flex items-center gap-4 text-sm text-white/90">
            <a className="hover:text-white whitespace-nowrap" href="#">Sách điện tử</a>
            <a className="hover:text-white whitespace-nowrap" href="/hoi-vien">Sách hội viên</a>
            <a className="hover:text-white whitespace-nowrap" href="#">Truyện tranh</a>
          </nav>

          {/* Right: search and actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="Tìm kiếm sách"
                className="w-64 rounded-md bg-white/10 pl-8 pr-3 py-1.5 text-sm placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <a href="/hoi-vien" className="inline-flex items-center gap-2 rounded-md bg-amber-400/20 px-3 py-1.5 text-sm text-amber-300 hover:bg-amber-400/30">
              <CrownIcon className="h-4 w-4" /> Gói cước
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-sm text-black hover:bg-gray-100">
              Đăng ký
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10">
              <UserIcon className="h-4 w-4" /> Đăng nhập
            </a>
          </div>

          {/* Mobile toggler */}
          <button
            className="md:hidden rounded-md border border-white/20 p-2 hover:bg-white/10"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0b0b]">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-4 text-white/90">
            <div className="relative">
              <button
                onClick={() => setShowCats((v) => !v)}
                className="flex w-full items-center justify-between rounded-md bg-white/5 px-3 py-2 text-sm"
              >
                <span>Xem thêm</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${showCats ? "rotate-180" : ""}`} />
              </button>
              {showCats && (
                <div className="mt-2 max-h-[45vh] overflow-auto rounded-md border border-white/10 bg-[#121212]">
                  {CATEGORIES.map((c) => (
                    <a key={c} href="#" className="block px-3 py-2 text-sm hover:bg-white/5" onClick={() => setMobileOpen(false)}>
                      {c}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <nav className="grid gap-2 text-sm">
              <a className="px-2 py-2 rounded hover:bg-white/5" href="#">Sách điện tử</a>
              <a className="px-2 py-2 rounded hover:bg-white/5" href="/hoi-vien">Sách hội viên</a>
              <a className="px-2 py-2 rounded hover:bg-white/5" href="#">Sách hiếm sôi</a>
              <a className="px-2 py-2 rounded hover:bg-white/5" href="#">Sách nói</a>
              <a className="px-2 py-2 rounded hover:bg-white/5" href="#">Truyện tranh</a>
              <a className="px-2 py-2 rounded hover:bg-white/5" href="#">Dịch vụ Xuất bản</a>
            </nav>

            <div className="flex items-center gap-2">
              <div className="relative w-full">
                <SearchIcon className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  placeholder="Tìm kiếm sách"
                  className="w-full rounded-md bg-white/10 pl-8 pr-3 py-2 text-sm placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <a href="/hoi-vien" className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-amber-400/20 px-3 py-2 text-sm text-amber-300">
                <CrownIcon className="h-4 w-4" /> Gói cước
              </a>
              <a href="#" className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-white px-3 py-2 text-sm text-black">
                Đăng ký
              </a>
              <a href="#" className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-white/20 px-3 py-2 text-sm">
                <UserIcon className="h-4 w-4" /> Đăng nhập
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

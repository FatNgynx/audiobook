"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const SLIDES: Slide[] = [
  {
    title: "TRUYỆN KIỀU",
    description:
      '"Truyện Kiều" được sáng tác dựa theo cốt truyện "Kim Vân Kiều truyện" - tiểu thuyết chương hồi của Thanh Tâm Tài Nhân (Trung Quốc). Nguyễn Du đã "hoán cốt đoạt thai" tác phẩm của Thanh Tâm Tài Nhân, và đem lại cho "Truyện Kiều" những sáng tạo mới mẻ cả về nội dung và nghệ thuật.',
    imageSrc: "/imgs/Truyen-Kieu.jpg",
    imageAlt: "Bìa sách Truyện Kiều",
  },
  {
    title: "MƯA ĐỎ",
    description:
      'Mưa đỏ là tiểu thuyết chiến tranh của Việt Nam do Chu Lai sáng tác và được Nhà xuất bản Quân đội Nhân dân phát hành năm 2016, lấy bối cảnh là trận chiến kéo dài 81 ngày ở Thành cổ Quảng Trị mùa hè năm 1972. Mưa đỏ là tiểu thuyết thứ 14 của Chu Lai và là tác phẩm đầu tiên ông viết về Trận Thành cổ Quảng Trị.[1][2] Nội dung đề cập đến các nhân vật của cả hai phía chiến trường, với các nhân vật chính là Cường một người lính Giải Phóng và Quang chỉ huy lực lượng Hắc Báo.',
    imageSrc: "/imgs/banner/6807166563c5b633214235.jpg",
    imageAlt: "Bìa sách Mưa Đỏ",
  },
  {
    title: "ĐẮC NHÂN TÂM",
    description:
      "Tác phẩm kinh điển về nghệ thuật ứng xử và giao tiếp, giúp thay đổi tư duy, xây dựng mối quan hệ tích cực và đạt được thành công bền vững trong công việc lẫn cuộc sống.",
    imageSrc: "/imgs/noi-dung-chinh-dac-nhan-tam-1024x682.jpg",
    imageAlt: "Bìa sách Đắc Nhân Tâm",
  },
  {
    title: "VỢ CHỒNG A PHỦ",
    description:
      "Tác phẩm của Tô Hoài khắc họa số phận và sức sống mãnh liệt của con người miền núi Tây Bắc, hành trình Mị và A Phủ vượt thoát ách áp bức để tìm đến tự do.",
    imageSrc: "/imgs/tom-tat-vo-chong-a-phu-3.jpg",
    imageAlt: "Bìa truyện Vợ chồng A Phủ",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(id);
  }, [paused]);

  const total = SLIDES.length;
  const current = SLIDES[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    
      <div
        className="white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        
        role="region"
        aria-roledescription="carousel"
        aria-label="Sách nổi bật"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          else if (e.key === "ArrowRight") next();
        }}
      >
        <div className="relative">
          {/* Nút trái/phải overlay */}
          <button
            type="button"
            onClick={prev}
            aria-label="Slide trước"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/70 border border-gray-300 shadow transition-opacity opacity-40 hover:opacity-100 hover:bg-white"
            tabIndex={0}
          >
            <svg aria-hidden="true" width="28" height="28" fill="none" viewBox="0 0 20 20">
              <path d="M13 16l-5-6 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Slide sau"
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/70 border border-gray-300 shadow transition-opacity opacity-40 hover:opacity-100 hover:bg-white"
            tabIndex={0}
          >
            <svg aria-hidden="true" width="28" height="28" fill="none" viewBox="0 0 20 20">
              <path d="M7 4l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="grid md:grid-cols-2">
            {/* Text panel */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-slate-800">{current.title}</h1>
              <p className="text-gray-700 md:text-lg leading-loose text-justify">
                {current.description}
              </p>

              <div className="flex items-center gap-4 pt-2">
                {/* Chỉ còn lại số thứ tự và nút CTA, nút trái/phải đã overlay */}
                <span className="text-gray-500 tabular-nums font-mono text-sm">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <a
                  href="#"
                  className="ml-auto px-6 py-2.5 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition-colors shadow-md"
                >
                  Đọc ngay →
                </a>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center gap-2 pt-4" aria-label="Chọn slide">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Chuyển đến slide ${i + 1}`}
                    aria-current={i === index}
                    className={
                      (i === index
                        ? "w-3.5 h-3.5 bg-black"
                        : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400")
                      + " rounded-full transition-[width,height,background-color]"
                    }
                  />
                ))}
              </div>
            </div>

            {/* Image panel */}
            <div className="relative bg-neutral-50 min-h-[280px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[480px]">
              {/* Use fill + object-contain to ensure full image visibility */}
              <Image
                src={current.imageSrc}
                alt={current.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>
      </div>
   
  );
}

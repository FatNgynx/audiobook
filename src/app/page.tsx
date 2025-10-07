import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen flex flex-col">
      {/* Hero Section - unified framed carousel */}
      <HeroCarousel />

      {/* Bảng xếp hạng Section - Grid Layout */}
      <section className="w-full py-14 px-4 md:px-16 bg-[#18181c]">
        <div className="flex items-center justify-between mb-8">
          <div className="text-3xl md:text-4xl text-white font-bold">Bảng xếp hạng</div>
          <a href="/homepage/bang-xep-hang" className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
            Xem thêm →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="relative bg-[#23232a] rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
              <Image src="/imgs/48-1649695676.jpg" alt="Vợ chồng A Phủ" width={240} height={340} className="w-full h-[340px] object-cover" />
              <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">HỘI VIÊN <svg width='18' height='18' fill='none' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='white'/><path d='M12 6l2.09 4.26L18 11.27l-3.18 3.09L15.18 18 12 15.77 8.82 18l.36-3.64L6 11.27l3.91-.01L12 6z' fill='#f59e42'/></svg></span>
              <span className="absolute bottom-3 left-3 text-[90px] font-extrabold text-white/80 drop-shadow-lg select-none">1</span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="font-bold text-white text-lg line-clamp-2">Vợ chồng A Phủ</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative bg-[#23232a] rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
              <Image src="/imgs/noi-dung-chinh-dac-nhan-tam-1024x682.jpg" alt="Đắc nhân tâm" width={240} height={340} className="w-full h-[340px] object-cover" />
              <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">HỘI VIÊN <svg width='18' height='18' fill='none' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='white'/><path d='M12 6l2.09 4.26L18 11.27l-3.18 3.09L15.18 18 12 15.77 8.82 18l.36-3.64L6 11.27l3.91-.01L12 6z' fill='#f59e42'/></svg></span>
              <span className="absolute bottom-3 left-3 text-[90px] font-extrabold text-white/80 drop-shadow-lg select-none">2</span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="font-bold text-white text-lg line-clamp-2">Đắc nhân tâm</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative bg-[#23232a] rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
              <Image src="/imgs/truyen-kieu.webp" alt="Truyện Kiều" width={240} height={340} className="w-full h-[340px] object-cover" />
              <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">HỘI VIÊN <svg width='18' height='18' fill='none' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='white'/><path d='M12 6l2.09 4.26L18 11.27l-3.18 3.09L15.18 18 12 15.77 8.82 18l.36-3.64L6 11.27l3.91-.01L12 6z' fill='#f59e42'/></svg></span>
              <span className="absolute bottom-3 left-3 text-[90px] font-extrabold text-white/80 drop-shadow-lg select-none">3</span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="font-bold text-white text-lg line-clamp-2">Truyện Kiều</div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="relative bg-[#23232a] rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
              <Image src="/imgs/41753.jpg" alt="Mưa đỏ" width={240} height={340} className="w-full h-[340px] object-cover" />
              <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">HỘI VIÊN <svg width='18' height='18' fill='none' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='white'/><path d='M12 6l2.09 4.26L18 11.27l-3.18 3.09L15.18 18 12 15.77 8.82 18l.36-3.64L6 11.27l3.91-.01L12 6z' fill='#f59e42'/></svg></span>
              <span className="absolute bottom-3 left-3 text-[90px] font-extrabold text-white/80 drop-shadow-lg select-none">4</span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="font-bold text-white text-lg line-clamp-2">Mưa đỏ</div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="relative bg-[#23232a] rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
              <Image src="/imgs/vn-11134207-7qukw-lfgebc23iq9h5a.jpg" alt="Chiếc Xe Sắt (Stein Riverton)" width={240} height={340} className="w-full h-[340px] object-cover" />
              <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">99.000đ</span>
              <span className="absolute bottom-3 left-3 text-[90px] font-extrabold text-white/80 drop-shadow-lg select-none">5</span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="font-bold text-white text-lg line-clamp-2">Chiếc Xe Sắt (Stein Riverton)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mới nhất Section - Grid Layout */}
      <section className="w-full py-14 px-4 md:px-16 bg-[#18181c]">
        <div className="flex items-center justify-between mb-8">
          <div className="text-3xl md:text-4xl text-white font-bold">Mới nhất</div>
          <a href="/homepage/moi-nhat" className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
            Xem thêm →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="relative bg-[#23232a] rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
              <Image src="/imgs/meo-cam-sung.jpg" alt="Tình giấc bỗng trở thành hung thủ 40 vụ án - Tập 25" width={240} height={340} className="w-full h-[340px] object-cover" />
              <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">HỘI VIÊN <svg width='18' height='18' fill='none' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='white'/><path d='M12 6l2.09 4.26L18 11.27l-3.18 3.09L15.18 18 12 15.77 8.82 18l.36-3.64L6 11.27l3.91-.01L12 6z' fill='#f59e42'/></svg></span>
              <span className="absolute bottom-3 left-3 text-[90px] font-extrabold text-white/80 drop-shadow-lg select-none">1</span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="font-bold text-white text-lg line-clamp-2">Tình giấc bỗng trở thành hung thủ 40 vụ án - Tập 25</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative bg-[#23232a] rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
              <Image src="/imgs/meme-ok-de-thuong-002.webp" alt="Chốt đơn cái 'rọp'" width={240} height={340} className="w-full h-[340px] object-cover" />
              <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Free</span>
              <span className="absolute bottom-3 left-3 text-[90px] font-extrabold text-white/80 drop-shadow-lg select-none">2</span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="font-bold text-white text-lg line-clamp-2">Chốt đơn cái &lsquo;rọp&rsquo;</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative bg-[#23232a] rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
              <Image src="/imgs/anh-meme-ok-cho.jpg" alt="Mài dũa tâm hồn" width={240} height={340} className="w-full h-[340px] object-cover" />
              <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">79.000đ</span>
              <span className="absolute bottom-3 left-3 text-[90px] font-extrabold text-white/80 drop-shadow-lg select-none">3</span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="font-bold text-white text-lg line-clamp-2">Mài dũa tâm hồn</div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="relative bg-[#23232a] rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
              <Image src="/imgs/meme-dang-suy-ngam-768x768.jpg" alt="Khôn khéo không khó" width={240} height={340} className="w-full h-[340px] object-cover" />
              <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">79.000đ</span>
              <span className="absolute bottom-3 left-3 text-[90px] font-extrabold text-white/80 drop-shadow-lg select-none">4</span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="font-bold text-white text-lg line-clamp-2">Khôn khéo không khó</div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="relative bg-[#23232a] rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="relative">
              <Image src="/imgs/Chia-se-hinh-anh-meo-OK-hai-huoc.jpg" alt="Sách nói" width={240} height={340} className="w-full h-[340px] object-cover" />
              <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">79.000đ</span>
              <span className="absolute bottom-3 left-3 text-[90px] font-extrabold text-white/80 drop-shadow-lg select-none">5</span>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="font-bold text-white text-lg line-clamp-2">Sách nói</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 md:px-16 py-14 bg-white flex flex-col md:flex-row gap-8 items-center">
        <form className="flex-1 bg-[#f8f8f8] rounded-lg p-8 flex flex-col gap-4 shadow-sm">
          <div className="text-3xl md:text-4xl text-gray-700 mb-6 font-bold">Đăng ký hội viên</div>
          <input className="p-3 rounded-lg border border-gray-300 focus:border-slate-500 focus:outline-none transition-colors" placeholder="Họ và tên" />
          <input className="p-3 rounded-lg border border-gray-300 focus:border-slate-500 focus:outline-none transition-colors" placeholder="Số điện thoại*" />
          <input className="p-3 rounded-lg border border-gray-300 focus:border-slate-500 focus:outline-none transition-colors" placeholder="E-mail" />
          <input className="p-3 rounded-lg border border-gray-300 focus:border-slate-500 focus:outline-none transition-colors" placeholder="Gói hội viên" />
          <div className="text-xs text-gray-400">Bằng cách gửi biểu mẫu này, bạn đồng ý với chính sách bảo mật</div>
          <button className="mt-4 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors w-max self-end">Gửi đi →</button>
        </form>
        
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-4 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="font-bold text-2xl tracking-widest mb-4">Lumiread</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold mb-2">Về chúng tôi</div>
            <a href="#" className="text-gray-300">Giới thiệu</a>
            <a href="#" className="text-gray-300">Cơ cấu tổ chức</a>
            <a href="#" className="text-gray-300">Lĩnh vực hoạt động</a>
            <a href="#" className="text-gray-300">Cơ hội đầu tư</a>
            <a href="#" className="text-gray-300">Tuyển dụng</a>
            <a href="#" className="text-gray-300">Liên hệ</a>
            <a href="#" className="text-gray-300">Dịch vụ Xuất bản</a>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold mb-2">Liên hệ</div>
            <div>Đại học FPT Cần Thơ<br />Việt Nam</div>
            <div>0332005449</div>
            <div>Lumiread@Mail.com</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold mb-2">Mạng xã hội</div>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/facebook" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition" aria-label="Facebook">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition" aria-label="Twitter">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition" aria-label="Instagram">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C21.05.425 19.877.131 18.6.072 17.32.013 16.911 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition" aria-label="YouTube">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.993 2.993 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574a2.993 2.993 0 0 0-2.112 2.112C0 8.114 0 12 0 12s0 3.886.502 5.814a2.993 2.993 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.993 2.993 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-8">© 2025 Digital Project. Lumiread.</div>
      </footer>
    </div>
  );
}
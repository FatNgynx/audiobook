import Image from "next/image";
import Link from "next/link";

// Sample latest books data
const LATEST_BOOKS = [
  {
    id: 1,
    title: "Tình giấc bỗng trở thành hung thủ 40 vụ án - Tập 25",
    author: "Higashino Keigo",
    publisher: "NXB Hội Nhà văn",
    publishDate: "05/10/2025",
    rating: 4.9,
    reviews: 8,
    category: "Trinh thám",
    type: "Sách điện tử",
    format: "Đầy đủ",
    pages: "15/320",
    status: "Hội viên",
    imageSrc: "/imgs/anh-meme--878x1024.jpg",
    imageAlt: "Tình giấc bỗng trở thành hung thủ 40 vụ án - Tập 25",
    isNew: true
  },
  {
    id: 2,
    title: "Chốt đơn cái 'rọp'",
    author: "Nguyễn Văn A",
    publisher: "NXB Trẻ",
    publishDate: "03/10/2025",
    rating: 4.2,
    reviews: 12,
    category: "Kinh doanh",
    type: "Sách nói",
    format: "Tóm tắt",
    pages: "120/120",
    status: "99.000đ",
    imageSrc: "/imgs/meme-ok-de-thuong-002.webp",
    imageAlt: "Chốt đơn cái rọp",
    isNew: true
  },
  {
    id: 3,
    title: "Mài dũa tâm hồn",
    author: "Thích Nhất Hạnh",
    publisher: "NXB Tôn giáo",
    publishDate: "01/10/2025",
    rating: 4.8,
    reviews: 35,
    category: "Tâm linh",
    type: "Sách điện tử",
    format: "Đầy đủ",
    pages: "200/200",
    status: "79.000đ",
    imageSrc: "/imgs/noi-dung-chinh-dac-nhan-tam-1024x682.jpg",
    imageAlt: "Mài dũa tâm hồn",
    isNew: true
  },
  {
    id: 4,
    title: "Khôn khéo không khó",
    author: "Dale Carnegie",
    publisher: "NXB Tổng hợp TP.HCM",
    publishDate: "28/09/2025",
    rating: 4.6,
    reviews: 22,
    category: "Kỹ năng sống",
    type: "Sách điện tử",
    format: "Đầy đủ",
    pages: "150/180",
    status: "79.000đ",
    imageSrc: "/imgs/noi-dung-chinh-dac-nhan-tam-1024x682.jpg",
    imageAlt: "Khôn khéo không khó",
    isNew: true
  },
  {
    id: 5,
    title: "Tâm mẹ - phong thủy đời con",
    author: "Nguyễn Thị B",
    publisher: "NXB Phụ nữ",
    publishDate: "25/09/2025",
    rating: 4.4,
    reviews: 18,
    category: "Gia đình",
    type: "Sách điện tử",
    format: "Đầy đủ",
    pages: "95/140",
    status: "79.000đ",
    imageSrc: "/imgs/noi-dung-chinh-dac-nhan-tam-1024x682.jpg",
    imageAlt: "Tâm mẹ - phong thủy đời con",
    isNew: true
  },
  {
    id: 6,
    title: "Nghệ thuật sống đẹp",
    author: "Lê Văn C",
    publisher: "NXB Văn hóa - Thông tin",
    publishDate: "22/09/2025",
    rating: 4.3,
    reviews: 14,
    category: "Lifestyle",
    type: "Sách nói",
    format: "Đầy đủ",
    pages: "89/200",
    status: "Hội viên",
    imageSrc: "/imgs/anh-meme--878x1024.jpg",
    imageAlt: "Nghệ thuật sống đẹp",
    isNew: true
  }
];

// BookCard component for latest books
function LatestBookCard({ book }: { book: typeof LATEST_BOOKS[0] }) {
  return (
    <div className="bg-[#1a2332] rounded-2xl overflow-hidden shadow-lg">
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* Book Cover */}
        <div className="relative">
          <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto">
            <Image
              src={book.imageSrc}
              alt={book.imageAlt}
              fill
              className="object-cover rounded-lg"
              sizes="(min-width: 768px) 300px, 100vw"
            />
            {book.status === "Hội viên" ? (
              <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                HỘI VIÊN
              </span>
            ) : (
              <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {book.status}
              </span>
            )}
            {book.isNew && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                MỚI
              </span>
            )}
          </div>
        </div>

        {/* Book Details */}
        <div className="text-white space-y-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <Link href="/" className="hover:text-white">Trang chủ</Link>
              <span>›</span>
              <span>Mới nhất</span>
              <span>›</span>
              <span>{book.title}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">{book.title}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-semibold">{book.rating}</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="text-gray-400">• {book.reviews} đánh giá</span>
            </div>

            {/* New Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                ✨ Mới phát hành
              </span>
            </div>
          </div>

          {/* Book Info Grid */}
          <div className="grid grid-cols-2 gap-y-3 text-sm">
            <div>
              <div className="text-gray-400">Tác giả</div>
              <div className="font-semibold text-teal-300">{book.author}</div>
            </div>
            <div>
              <div className="text-gray-400">Thể loại</div>
              <div className="font-semibold">{book.category}</div>
            </div>
            <div>
              <div className="text-gray-400">Nhà xuất bản</div>
              <div className="font-semibold text-teal-300">{book.publisher}</div>
            </div>
            <div>
              <div className="text-gray-400">Gói cước</div>
              <div className="font-semibold">{book.status === "Hội viên" ? "Hội viên" : book.status}</div>
            </div>
            <div>
              <div className="text-gray-400">Phát hành</div>
              <div className="font-semibold">{book.publishDate}</div>
            </div>
            <div>
              <div className="text-gray-400">Tiến độ</div>
              <div className="font-semibold">{book.pages}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            {/* Format Selection */}
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">Chọn loại sách</div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium">
                  Sách điện tử
                </button>
                <button className="px-4 py-2 bg-gray-600 text-gray-300 rounded-lg text-sm">
                  Sách nói
                </button>
                <button className="px-4 py-2 bg-gray-600 text-gray-300 rounded-lg text-sm">
                  Sách giấy
                </button>
              </div>
            </div>

            {/* Content Selection */}
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">Chọn nội dung</div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium">
                  Đầy đủ
                </button>
                <button className="px-4 py-2 bg-gray-600 text-gray-300 rounded-lg text-sm">
                  Tóm tắt
                </button>
              </div>
            </div>

            {/* Main Actions */}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                </svg>
                Đọc sách
              </button>
              <button className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </button>
              <button className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MoiNhatPage() {
  return (
    <div className="bg-[#0f1419] min-h-screen">
      {/* Header */}
      <div className="px-4 md:px-16 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl text-white font-bold mb-2">Mới nhất</h1>
            <p className="text-gray-400">Những cuốn sách mới được phát hành gần đây</p>
          </div>
          <Link 
            href="/"
            className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
          >
            ← Về trang chủ
          </Link>
        </div>

        {/* Filter Options */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium whitespace-nowrap">
            Tất cả
          </button>
          <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm whitespace-nowrap hover:bg-gray-600">
            Sách điện tử
          </button>
          <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm whitespace-nowrap hover:bg-gray-600">
            Sách nói
          </button>
          <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm whitespace-nowrap hover:bg-gray-600">
            Hội viên
          </button>
          <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm whitespace-nowrap hover:bg-gray-600">
            Trả phí
          </button>
        </div>

        {/* Books List */}
        <div className="space-y-8">
          {LATEST_BOOKS.map((book) => (
            <LatestBookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
            Xem thêm sách mới
          </button>
        </div>
      </div>
    </div>
  );
}
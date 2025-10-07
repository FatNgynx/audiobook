import Image from "next/image";
import Link from "next/link";

// Sample book data matching the UI from screenshot
const BOOKS = [
  {
    id: 1,
    title: "Mưa đỏ",
    author: "Chu Lai",
    publisher: "NXB Quân đội Nhân dân",
    publishDate: "10/05/2025",
    rating: 5,
    reviews: 42,
    rank: 1,
    category: "Tiểu thuyết",
    type: "Sách điện tử",
    format: "Đầy đủ",
    pages: "456/456",
    status: "Hội viên",
    imageSrc: "/imgs/41753.jpg",
    imageAlt: "Mưa đỏ",
    tags: ["Top xu hướng Sách điện tử"]
  },
  {
    id: 2,
    title: "Đắc nhân tâm",
    author: "Dale Carnegie",
    publisher: "NXB Tổng hợp TP.HCM",
    publishDate: "20/07/2025",
    rating: 4.9,
    reviews: 150,
    rank: 2,
    category: "Kỹ năng sống",
    type: "Sách điện tử",
    format: "Đầy đủ",
    pages: "280/280",
    status: "Hội viên",
    imageSrc: "/imgs/noi-dung-chinh-dac-nhan-tam-1024x682.jpg",
    imageAlt: "Đắc nhân tâm"
  },
  {
    id: 3,
    title: "Truyện Kiều",
    author: "Nguyễn Du",
    publisher: "NXB Văn học",
    publishDate: "01/06/2025",
    rating: 4.7,
    reviews: 85,
    rank: 3,
    category: "Cổ điển",
    type: "Sách điện tử",
    format: "Đầy đủ",
    pages: "3254/3254",
    status: "Hội viên",
    imageSrc: "/imgs/truyen-kieu.webp",
    imageAlt: "Truyện Kiều"
  },
  {
    id: 4,
    title: "Vợ chồng A Phủ",
    author: "Tô Hoài",
    publisher: "NXB Văn học",
    publishDate: "15/08/2025",
    rating: 5.0,
    reviews: 10,
    rank: 4,
    category: "Văn học",
    type: "Sách điện tử",
    format: "Đầy đủ",
    pages: "120/120",
    status: "Hội viên",
    imageSrc: "/imgs/48-1649695676.jpg",
    imageAlt: "Vợ chồng A Phủ",
  },
  {
    id: 5,
    title: "Chiếc Xe Sắt",
    author: "Stein Riverton",
    publisher: "NXB Hội Nhà văn",
    publishDate: "25/04/2025",
    rating: 4.3,
    reviews: 18,
    rank: 5,
    category: "Trinh thám",
    type: "Sách nói",
    format: "Tóm tắt",
    pages: "200/200",
    status: "99.000đ",
    imageSrc: "/imgs/vn-11134207-7qukw-lfgebc23iq9h5a.jpg",
    imageAlt: "Chiếc Xe Sắt"
  },
  {
    id: 6,
    title: "Moby Dick",
    author: "Herman Melville",
    publisher: "NXB Văn học",
    publishDate: "15/05/2025",
    rating: 4.5,
    reviews: 60,
    rank: 6,
    category: "Cổ điển",
    type: "Sách điện tử",
    format: "Đầy đủ",
    pages: "720/720",
    status: "Hội viên",
    imageSrc: "/imgs/bf8882e8dfc2f9a54fa7b92832d53e37.jpg",
    imageAlt: "Moby Dick"
    
  }
];

// BookCard component matching the UI from screenshot
function BookCard({ book }: { book: typeof BOOKS[0] }) {
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
                <svg width='16' height='16' fill='none' viewBox='0 0 24 24'>
                  <circle cx='12' cy='12' r='10' fill='white'/>
                  <path d='M12 6l2.09 4.26L18 11.27l-3.18 3.09L15.18 18 12 15.77 8.82 18l.36-3.64L6 11.27l3.91-.01L12 6z' fill='#f59e42'/>
                </svg>
              </span>
            ) : (
              <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {book.status}
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

            {/* Tags */}
            {book.tags && (
              <div className="mb-4">
                {book.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center gap-1 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    <span className="bg-white text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      #{book.rank}
                    </span>
                    trong {tag} ›
                  </span>
                ))}
              </div>
            )}
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
              <div className="text-gray-400">Tình trạng ra</div>
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

export default function BangXepHangPage() {
  return (
    <div className="bg-[#0f1419] min-h-screen">
      {/* Header */}
      <div className="px-4 md:px-16 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl text-white font-bold mb-2">Bảng xếp hạng</h1>
            <p className="text-gray-400">Những cuốn sách được yêu thích nhất</p>
          </div>
          <Link 
            href="/"
            className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
          >
            ← Về trang chủ
          </Link>
        </div>

        {/* Books List */}
        <div className="space-y-8">
          {BOOKS.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
            Xem thêm sách
          </button>
        </div>
      </div>
    </div>
  );
}
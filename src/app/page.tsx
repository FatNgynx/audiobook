import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-16 py-6 bg-white border-b border-gray-200">
        <div className="font-bold text-2xl tracking-widest">DA<br />DIGITAL PROJECT</div>
        <nav className="flex gap-10 text-sm uppercase tracking-widest">
          <a className="font-bold border-b-2 border-black pb-1" href="#">Home Page</a>
          <a href="#">Gallery</a>
          <a href="#">Projects</a>
          <a href="#">Certificates</a>
          <a href="#">Contacts</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-16 py-12 gap-12 bg-white">
        <div className="flex-1 flex flex-col gap-6">
          <div className="text-gray-400 text-lg">PROJECT</div>
          <div className="text-5xl font-bold leading-tight">NURTOWN</div>
          <div className="flex items-center gap-4 mt-8">
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center">&#8592;</button>
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center">&#8594;</button>
            <span className="ml-6 text-gray-400">01 / 02</span>
          </div>
          <button className="mt-8 w-max px-6 py-2 border-b-2 border-black text-sm font-medium tracking-widest">Смотреть →</button>
        </div>
        <div className="flex-1">
          <Image src="/imgs/noi-dung-chinh-dac-nhan-tam-1024x682.jpg" alt="project" className="rounded-lg w-full object-cover aspect-square" width={600} height={600} />
        </div>
      </section>

      {/* About Section */}
      <section className="px-16 py-12 flex flex-col md:flex-row gap-8 items-center bg-[#f8f8f8]">
        <div className="flex gap-4 flex-1">
          <Image src="/imgs/anh-meme--878x1024.jpg" alt="about1" className="w-28 h-28 object-cover rounded" width={112} height={112} />
          <Image src="/imgs/meme-ok-de-thuong-002.webp" alt="about2" className="w-28 h-28 object-cover rounded" width={112} height={112} />
          <Image src="/imgs/meme-ok-de-thuong-002.webp" alt="about3" className="w-28 h-28 object-cover rounded" width={112} height={112} />
        </div>
        <div className="flex-1 bg-white rounded-lg p-8 shadow-sm">
          <div className="text-3xl text-gray-400 mb-2">О ABC</div>
          <div className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
          <button className="px-6 py-2 border-b-2 border-black text-sm font-medium tracking-widest">Читать →</button>
        </div>
      </section>

      {/* Main Tasks Section */}
      <section className="px-16 py-12 bg-white">
        <div className="text-3xl text-gray-400 mb-8">BYC CDC</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-6 items-start">
            <div className="text-7xl font-bold text-gray-200 leading-none">1</div>
            <div className="text-gray-600 mt-2">NNNNNNNNNNNNNNN</div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="text-7xl font-bold text-gray-200 leading-none">2</div>
            <div className="text-gray-600 mt-2">Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-16 py-12 bg-[#f8f8f8]">
        <div className="text-3xl text-gray-400 mb-8">Наши проекты</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="relative">
            <Image src="/imgs/meme-ok-de-thuong-002.webp" alt="proj1" className="w-full h-48 object-cover rounded" width={400} height={192} />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Досуговый центр</span>
            </div>
          </div>
          <Image src="/imgs/meme-ok-de-thuong-002.webp" alt="proj2" className="w-full h-48 object-cover rounded" width={400} height={192} />
          <Image src="/imgs/meme-ok-de-thuong-002.webp" alt="proj3" className="w-full h-48 object-cover rounded" width={400} height={192} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Image src="/imgs/meme-ok-de-thuong-002.webp" alt="proj4" className="w-full h-32 object-cover rounded" width={200} height={128} />
          <Image src="/imgs/meme-ok-de-thuong-002.webp" alt="proj5" className="w-full h-32 object-cover rounded" width={200} height={128} />
          <Image src="/imgs/meme-ok-de-thuong-002.webp" alt="proj6" className="w-full h-32 object-cover rounded" width={200} height={128} />
          <Image src="/imgs/meme-ok-de-thuong-002.webp" alt="proj7" className="w-full h-32 object-cover rounded" width={200} height={128} />
        </div>
        <button className="mt-8 px-6 py-2 border-b-2 border-black text-sm font-medium tracking-widest">Все проекты →</button>
      </section>

      {/* Contact Section */}
      <section className="px-16 py-12 bg-white flex flex-col md:flex-row gap-8 items-center">
        <form className="flex-1 bg-[#f8f8f8] rounded-lg p-8 flex flex-col gap-4 shadow-sm">
          <div className="text-3xl text-gray-400 mb-4">Связаться с нами</div>
          <input className="p-3 rounded border border-gray-300" placeholder="Имя" />
          <input className="p-3 rounded border border-gray-300" placeholder="Номер телефона*" />
          <input className="p-3 rounded border border-gray-300" placeholder="E-mail" />
          <input className="p-3 rounded border border-gray-300" placeholder="Интересующий товар/услуга" />
          <textarea className="p-3 rounded border border-gray-300 min-h-[80px]" placeholder="Сообщение" />
          <div className="text-xs text-gray-400">Отправляя заявку, вы соглашаетесь с политикой конфиденциальности</div>
          <button className="mt-2 px-6 py-2 border-b-2 border-black text-sm font-medium tracking-widest w-max self-end">Отправить →</button>
        </form>
        <div className="flex-1 flex items-center justify-center">
          <Image src="/imgs/meme-ok-de-thuong-002.webp" alt="contact" className="rounded-lg w-full max-w-xs object-cover" width={320} height={400} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-16 py-10 mt-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="font-bold text-2xl tracking-widest mb-4">DA<br />DIGITAL PROJECT</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold mb-2">Информация</div>
            <a href="#" className="text-gray-300">Главная</a>
            <a href="#" className="text-gray-300">Галерея</a>
            <a href="#" className="text-gray-300">Проекты</a>
            <a href="#" className="text-gray-300">Сертификаты</a>
            <a href="#" className="text-gray-300">Контакты</a>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold mb-2">Контакты</div>
            <div>100000, Республика Казахстан,<br />г. Караганда, ул. Тулепова,10</div>
            <div>+7 (700) 777 88 88</div>
            <div>Digitalproject@Mail.ru</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-semibold mb-2">Социальные сети</div>
            <div className="flex gap-3">
              <a href="#" className="hover:text-gray-400">{/* Facebook */} <span>F</span></a>
              <a href="#" className="hover:text-gray-400">{/* Twitter */} <span>T</span></a>
              <a href="#" className="hover:text-gray-400">{/* Instagram */} <span>I</span></a>
              <a href="#" className="hover:text-gray-400">{/* YouTube */} <span>Y</span></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-8">© 2025 Digital Project. Все права защищены.</div>
      </footer>
    </div>
  );
}
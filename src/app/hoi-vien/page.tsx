"use client";

import Link from "next/link";
import { useState } from "react";

export default function HoiVienPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "standard",
      name: "Standard",
      price: "59.000",
      currency: "VND",
      duration: "tháng",
      features: [
        "Đọc không giới hạn sách điện tử",
        "Nghe sách nói cơ bản",
        "Tùy chỉnh giao diện",
        "Đồng bộ trên 2 thiết bị",
        "Hỗ trợ khách hàng 24/7",
        "Nhiều ngôn ngữ hỗ trợ",
      ],
      popular: false,
    },
    {
      id: "premium",
      name: "Premium",
      price: "89.000",
      currency: "VND", 
      duration: "tháng",
      features: [
        "Tất cả tính năng Standard",
        "Sách bản quyền",
        "Nghe sách nói chất lượng cao",
        "Tùy chỉnh giọng audiobook",
        "Tải xuống offline không giới hạn",
        "Đồng bộ không giới hạn thiết bị",
        "Ưu tiên hỗ trợ khách hàng",
        "Truy cập sớm sách mới",
        "Tính năng ghi chú và đánh dấu nâng cao",
      ],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-4">
              ← Quay lại trang chủ
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Chọn Gói Hội Viên
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Trải nghiệm đọc sách không giới hạn với các gói hội viên phù hợp nhất cho bạn
            </p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                selectedPlan === plan.id
                  ? "border-blue-500 ring-4 ring-blue-100"
                  : plan.popular
                  ? "border-amber-400"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    🔥 Phổ biến nhất
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-lg text-slate-600">{plan.currency}</span>
                    <span className="text-sm text-slate-500">/{plan.duration}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    selectedPlan === plan.id
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                      : plan.popular
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg"
                      : "bg-slate-800 text-white hover:bg-slate-900"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan(plan.id);
                  }}
                >
                  {selectedPlan === plan.id ? "Đã chọn ✓" : `Chọn gói ${plan.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        {selectedPlan && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Tiếp tục thanh toán →
            </button>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Câu hỏi thường gặp
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Tôi có thể hủy đăng ký bất cứ lúc nào không?
              </h3>
              <p className="text-slate-600">
                Có, bạn có thể hủy đăng ký bất cứ lúc nào từ tài khoản của mình. Không có phí hủy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Gói Premium có gì khác so với Standard?
              </h3>
              <p className="text-slate-600">
                Premium có thêm tính năng nghe sách chất lượng cao, tải offline không giới hạn và nhiều tính năng độc quyền khác.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Có được dùng thử miễn phí không?
              </h3>
              <p className="text-slate-600">
                Có, chúng tôi cung cấp 7 ngày dùng thử miễn phí cho tất cả gói hội viên.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Phương thức thanh toán nào được chấp nhận?
              </h3>
              <p className="text-slate-600">
                Chúng tôi chấp nhận thẻ tín dụng, thẻ ghi nợ, ví điện tử và chuyển khoản ngân hàng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
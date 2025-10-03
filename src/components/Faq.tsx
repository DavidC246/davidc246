'use client';

import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "./SectionTitle";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const faqData = [
  {
    question: "Đội hình David C Music gồm những ai?",
    answer:
      "Chúng tôi có đội hình chuẩn 6 thành viên (lead vocal nam/nữ, guitar, keys, bass, trống). Tuỳ sự kiện có thể rút gọn acoustic duo/trio hoặc mở rộng thêm kèn, DJ, MC song ngữ.",
  },
  {
    question: "Band có nhận playlist theo yêu cầu riêng không?",
    answer:
      "Có. Bạn có thể gửi danh sách 10-15 ca khúc must-play và chúng tôi sẽ phối lại phù hợp không khí. Setlist chuẩn luôn cập nhật các bản hit Việt/Quốc tế mới nhất.",
  },
  {
    question: "Sân khấu và thiết bị âm thanh do ai cung cấp?",
    answer:
      "Nếu địa điểm đã có hệ thống âm thanh, chúng tôi gửi rider để kỹ thuật viên setup. Khi cần thuê ngoài, band có đối tác tin cậy lo trọn gói âm thanh - ánh sáng phù hợp quy mô.",
  },
  {
    question: "David C Music từng biểu diễn ở những sự kiện nào?",
    answer:
      "Từ lễ cưới cao cấp tại Sài Gòn, sự kiện doanh nghiệp của tập đoàn đa quốc gia đến các festival tại Phan Thiết, Đà Nẵng. Chúng tôi quen thuộc quy trình làm việc cùng agency và khách quốc tế.",
  },
  {
    question: "Quy trình đặt band gồm các bước gì?",
    answer:
      "Bạn gửi thông tin sự kiện qua form booking. Trong 24 giờ, chúng tôi phản hồi kèm báo giá và đề xuất đội hình. Sau khi chốt hợp đồng và đặt cọc, band sẽ cùng bạn xây dựng timeline, setlist và rehearsal khi cần.",
  },
];

export const Faq = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <SectionTitle preTitle="FAQ" title="Những câu hỏi thường gặp">
        Nếu cần thêm thông tin chi tiết về rider, lịch trống hay bảng giá, hãy gửi tin nhắn cho chúng tôi. Band luôn phản hồi trong vòng 1 ngày làm việc.
      </SectionTitle>

      <Container className="!p-0">
        <div className="w-full max-w-2xl p-2 mx-auto space-y-4">
          {faqData.map((item) => (
            <Disclosure key={item.question}>
              {({ open }) => (
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-black/5">
                  <Disclosure.Button className="flex items-center justify-between w-full px-5 py-4 text-left">
                    <span className="font-serif text-lg text-gray-900">{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "rotate-180" : ""} w-5 h-5 text-gray-400 transition-transform`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-5 pb-5 font-sans text-base leading-relaxed text-gray-600">
                    {item.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </Container>
    </section>
  );
};

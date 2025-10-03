import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Container } from "@/components/Container";

type Show = {
  date: string;
  city: string;
  venue: string;
  note?: string;
  link?: string;
};

const shows: Show[] = [
  {
    date: "12.07.2025",
    city: "TP. Hồ Chí Minh",
    venue: "Saigon Riverside Hotel",
    note: "Gala dinner - sự kiện nội bộ (giới hạn khách mời)",
  },
  {
    date: "27.07.2025",
    city: "Mũi Né",
    venue: "Sunset Sounds Festival",
    note: "Sân khấu chính lúc 21:00",
    link: "https://sunsetsounds.vn",
  },
  {
    date: "09.08.2025",
    city: "Đà Nẵng",
    venue: "Hyatt Regency",
    note: "Tiệc cưới private - nhận yêu cầu tham dự rehearsal",
  },
  {
    date: "24.08.2025",
    city: "Phan Thiết",
    venue: "Meliá Resort",
    note: "Pool party khép kín - phiên bản acoustic duo",
  },
];

export const UpcomingShows = () => {
  return (
    <section id="shows" className="py-16 md:py-24 bg-gradient-to-b from-slate-100 to-white">
      <SectionTitle preTitle="Lịch diễn" title="Các show sắp tới">
        Đặt lịch sớm để giữ ngày bạn mong muốn. Liên hệ nếu muốn tham dự rehearsal hoặc cần vé mời.
      </SectionTitle>

      <Container>
        <div className="grid gap-6 md:grid-cols-2 px-5 xl:px-0">
          {shows.map((show) => (
            <div
              key={`${show.date}-${show.venue}`}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-xl shadow-black/10 space-y-3"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-500">
                  {show.date}
                </span>
                <span className="text-sm text-gray-500">{show.city}</span>
              </div>
              <h3 className="font-serif text-2xl text-gray-900">{show.venue}</h3>
              {show.note && <p className="font-sans text-base leading-relaxed text-gray-600">{show.note}</p>}
              {show.link && (
                <a
                  href={show.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500 hover:text-amber-400"
                >
                  Xem chi tiết vé
                </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-neutral-950 to-black py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-6 mx-auto text-white bg-gradient-to-r from-amber-500 to-rose-500 px-8 py-10 lg:px-14 lg:py-12 lg:flex-nowrap rounded-3xl shadow-2xl shadow-amber-500/30">
          <div className="flex-grow text-center lg:text-left space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Sẵn sàng đặt lịch với David C Music?
            </h2>
            <p className="font-sans text-lg leading-relaxed text-white/90">
              Gửi thông tin sự kiện để chúng tôi đề xuất đội hình, setlist và báo giá chi tiết trong 24 giờ làm việc.
            </p>
          </div>
          <div className="flex-shrink-0 w-full text-center lg:w-auto">
            <a
              href="mailto:3thegear.pt@gmail.com"
              className="inline-flex items-center justify-center px-7 lg:px-10 py-3 lg:py-4 text-sm lg:text-base font-semibold uppercase tracking-[0.16em] bg-white text-neutral-900 rounded-full shadow-lg shadow-black/20 hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition"
            >
              Gửi yêu cầu ngay
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

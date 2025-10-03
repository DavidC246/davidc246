import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Container } from "@/components/Container";

export const MusicHighlights = () => {
  return (
    <section id="music" className="bg-gradient-to-b from-white via-white to-slate-100 py-16 md:py-24">
      <SectionTitle preTitle="Nghe thử" title="Âm nhạc của David C Music">
        Live session và playlist được ghi lại trong các show gần đây để bạn cảm nhận năng lượng của band trước khi đặt lịch.
      </SectionTitle>

      <Container>
        <div className="grid gap-10 lg:grid-cols-2 px-5 xl:px-0">
          <div className="bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
            <div className="p-6 sm:p-8 text-white space-y-3">
              <h3 className="font-serif text-2xl">Live highlight - Sunset Sounds Festival</h3>
              <p className="font-sans text-base leading-relaxed text-white/70">
                Trích đoạn 4 phút ghi lại màn mashup mở đầu trước hơn 2.000 khán giả.
              </p>
            </div>
            <div className="relative w-full aspect-video bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/JGwWNGJdvx8?rel=0"
                title="David C Music live highlight"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-gray-900">Playlist Spotify - Top lựa chọn cho sự kiện</h3>
              <p className="font-sans text-base leading-relaxed text-gray-600">
                Tuyển tập 15 ca khúc cover nổi bật, cập nhật hằng tháng theo phản hồi của khách hàng.
              </p>
            </div>
            <div>
              <iframe
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n?utm_source=generator"
                width="100%"
                height="380"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="David C Music playlist"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

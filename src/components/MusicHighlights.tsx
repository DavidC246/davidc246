"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import { Container } from "@/components/Container";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  priority?: boolean;
}

const YouTubeEmbed = ({ videoId, title, priority = false }: YouTubeEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-3xl bg-black">
      {isPlaying ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Phát video ${title}`}
        >
          <Image
            src={thumbnail}
            alt={`Thumbnail ${title}`}
            fill
            priority={priority}
            className="object-cover object-center"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-black shadow-lg shadow-black/40 transition group-hover:bg-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-8 w-8 translate-x-[2px]"
              >
                <path d="M5.25 5.653c0-1.427 1.529-2.33 2.78-1.643l10.518 5.847c1.318.732 1.318 2.554 0 3.286L8.03 18.99c-1.251.687-2.78-.216-2.78-1.643V5.653z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
};

export const MusicHighlights = () => {
  return (
    <section id="music" className="bg-gradient-to-b from-white via-white to-slate-100 py-16 md:py-24">
      <SectionTitle preTitle="Nghe thử" title="Âm nhạc của David C Music">
        Live session và playlist được ghi lại trong các show gần đây để bạn cảm nhận năng lượng của band trước khi đặt lịch.
      </SectionTitle>

      <Container>
        <div className="grid gap-10 px-5 xl:px-0 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl shadow-black/30">
            <div className="space-y-3 p-6 text-white sm:p-8">
              <h3 className="font-serif text-2xl">Live highlight - Sunset Sounds Festival</h3>
              <p className="font-sans text-base leading-relaxed text-white/70">
                Trích đoạn 4 phút ghi lại màn mashup mở đầu trước hơn 2.000 khán giả.
              </p>
            </div>
            <YouTubeEmbed videoId="1CgMGWtUOxo" title="David C Music live highlight" priority />
          </div>

          <div className="flex flex-col justify-between space-y-6 rounded-3xl bg-white p-6 shadow-xl shadow-black/10 sm:p-8">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-gray-900">Live session - David C Music Acoustic</h3>
              <p className="font-sans text-base leading-relaxed text-gray-600">
                Ghi hình trực tiếp với đội hình acoustic, phù hợp cho các sự kiện ấm cúng và không gian lounge.
              </p>
            </div>
            <YouTubeEmbed videoId="YO0nMGGDBGw" title="David C Music acoustic session" />
          </div>
        </div>
      </Container>
    </section>
  );
};


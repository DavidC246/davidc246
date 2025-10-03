'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const TextHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div>
      <div
        ref={ref}
        className="flex flex-wrap items-center gap-10 min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-white px-5 xl:px-0 py-16"
      >
        <div className="order-first xl:order-first flex items-center w-full lg:w-1/2">
          <div className="max-w-xl mx-auto text-center lg:text-left space-y-6">
            <motion.p
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-snug text-gray-900"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            >
              Grill and Chill Night Concert
              <br />
              <span className="text-base md:text-lg font-sans tracking-[0.24em] uppercase text-gray-500">
                30 tháng 9, 2025 · Bãi biển Mũi Né, Việt Nam
              </span>
            </motion.p>
          </div>
        </div>

        <div className="order-last xl:order-last w-full lg:w-1/2 lg:px-12 mb-8 lg:mb-0">
          <motion.p
            className="text-base md:text-lg leading-relaxed text-gray-600 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            Gặp gỡ David C Music tại <strong>Grill and Chill Night Concert</strong> mùa thu này! Một đêm nhạc bùng nổ với ánh sáng rực rỡ và khán giả cuồng nhiệt. Dù bạn đã từng đồng hành cùng chúng tôi hay mới nghe lần đầu, đây sẽ là trải nghiệm khó quên.
          </motion.p>

          <motion.p
            className="text-base md:text-lg leading-relaxed text-gray-600 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            Điểm diễn kế tiếp:
          </motion.p>

          <motion.p
            className="text-sm md:text-base leading-relaxed mb-5 text-gray-900 font-semibold bg-yellow-100 px-3 py-2 rounded-md inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
          >
            Grill and Chill Night Concert - Sân khấu chính, 21:00
          </motion.p>

          <motion.p
            className="text-base md:text-lg leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
          >
            Đừng quên theo dõi David C Music trên Facebook và Instagram để cập nhật lịch diễn mới nhất. Hẹn gặp bạn trên sàn nhảy!
          </motion.p>
        </div>
      </div>
      <div className="flex bg-white justify-center items-end pb-6">
        <Image
          src="/img/logo-half-black.png"
          alt="Logo David C Music"
          width={220}
          height={110}
        />
      </div>
    </div>
  );
};

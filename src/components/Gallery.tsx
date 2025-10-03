'use client';

import Image from 'next/image';
import { SectionTitle } from './SectionTitle';
import { Container } from '@/components/Container';

export default function Gallery() {
  const images: { filename: string; caption: string }[] = [
    {
      filename: 'bands-1.jpg',
      caption: 'Biểu diễn tại khách sạn Nikko Sài Gòn - Sự kiện AkzoNobel Việt Nam',
    },
    {
      filename: 'bands-2.jpg',
      caption: 'David C Music trên sân khấu - Lễ hội âm nhạc Phan Thiết',
    },
    {
      filename: 'bands-3.jpg',
      caption: 'Buổi tập tại phòng thu của chúng tôi',
    },
    {
      filename: 'bands-4.jpg',
      caption: 'Đêm gala doanh nghiệp - TP. Hồ Chí Minh',
    },
    {
      filename: 'bands-5.jpg',
      caption: 'Khoảnh khắc hậu trường trước giờ diễn',
    },
    {
      filename: 'bands-6.jpg',
      caption: 'Biểu diễn tiệc cưới riêng tư - Khu nghỉ dưỡng ven biển',
    },
    {
      filename: 'bands-7.jpg',
      caption: 'Lễ hội ngoài trời - Sunset Live',
    },
    {
      filename: 'bands-8.jpg',
      caption: 'David C Music - Đội hình đầy đủ trên sân khấu',
    },
  ];

  return (
    <section id='gallery' className='bg-gradient-to-b from-neutral-950 to-black text-white py-16 md:py-24'>
      <SectionTitle preTitle='Bộ sưu tập' title='Khoảnh khắc trên sân khấu' tone='light'>
        Ghi lại những hình ảnh giàu năng lượng của David C Music tại các lễ cưới, sự kiện doanh nghiệp và festival trên khắp Việt Nam.
      </SectionTitle>

      <Container>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 px-4 sm:px-6 lg:px-0'>
          {images.map((image) => (
            <figure
              key={image.filename}
              className='group flex flex-col items-center space-y-3 transition-transform duration-300 hover:scale-[1.03]'
            >
              <div className='relative w-full aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-lg shadow-black/20'>
                <Image
                  src={`/img/${image.filename}`}
                  alt={image.caption}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity' />
              </div>
              <figcaption className='font-sans text-sm text-white/70 text-center max-w-[14rem] group-hover:text-white group-hover:drop-shadow'>
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

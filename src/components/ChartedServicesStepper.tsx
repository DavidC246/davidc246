'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { SectionTitle } from './SectionTitle';

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: 'Tiệc cưới & đính hôn',
    description:
      'Setlist lãng mạn với bản phối acoustic hoặc full band cho khoảnh khắc tiến vào lễ đường, tiệc tối và after party. MC song ngữ và timeline chi tiết giúp ngày trọng đại diễn ra trọn vẹn.',
  },
  {
    title: 'Sự kiện doanh nghiệp',
    description:
      'Âm nhạc hiện đại, sang trọng cho gala dinner, ra mắt sản phẩm và team building. Chúng tôi phối hợp cùng ban tổ chức để giới thiệu diễn giả và tạo tiết mục riêng theo thông điệp thương hiệu.',
  },
  {
    title: 'Lễ hội & sân khấu lớn',
    description:
      'Đội hình 6 thành viên cùng dàn nhạc cụ điện tử mang đến những bản hit pop, funk và rock remix cho khán giả hàng nghìn người. Rider rõ ràng, phối hợp chặt với ekip âm thanh ánh sáng.',
  },
  {
    title: 'Private party & lounge',
    description:
      'Phiên bản acoustic/band theo yêu cầu cho rooftop, nhà hàng hoặc du thuyền party. Không gian thân mật, riêng tư với những bản cover nhẹ nhàng, nhận yêu cầu bài riêng và tương tác cùng khách mời.',
  },
];

export default function ChartedServicesStepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id='services' className='relative bg-gradient-to-b from-blue-950 via-black to-neutral-900 text-white py-16 md:py-24'>
      <div className='absolute inset-0 bg-black/60 z-0' />
      <div className='relative z-10'>
        <SectionTitle
          preTitle='Dịch vụ'
          title='Các gói biểu diễn của David C Music'
          tone='light'
        >
          Tuỳ chỉnh đội hình, thời lượng và phong cách trình diễn cho từng loại sự kiện để mang lại trải nghiệm âm nhạc trọn vẹn.
        </SectionTitle>

        <Container>
          <div className='flex flex-col items-center space-y-10'>
            <div className='flex justify-center items-start'>
              <Image src='/img/logo-half.png' alt='Logo David C Music' width={220} height={110} />
            </div>

            <div className='flex flex-wrap justify-center gap-2 md:gap-3 overflow-x-auto'>
              {steps.map((step, index) => (
                <button
                  key={step.title}
                  className={`px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] border-b-4 transition-colors ${
                    index === activeStep
                      ? 'border-amber-400 text-amber-300'
                      : 'border-transparent text-white/70 hover:text-white hover:border-white/50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.title}
                </button>
              ))}
            </div>

            <div className='max-w-3xl text-center px-4 sm:px-6 space-y-4'>
              <h3 className='font-serif text-2xl md:text-3xl font-semibold uppercase tracking-[0.2em]'>{steps[activeStep].title}</h3>
              <p className='font-sans text-base md:text-lg text-gray-200 leading-relaxed'>
                {steps[activeStep].description}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

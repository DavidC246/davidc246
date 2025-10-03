'use client';

import Image from 'next/image';
import { Container } from '@/components/Container';
import heroImg from '../../public/img/globe.jpg';

export const Hero = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="order-last xl:order-first flex items-start w-full lg:w-1/2 pl-5 pr-5 xl:pl-0 xl:pr-0">
        <div className="max-w-xl">
          <p className="text-lg font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
            Hệ thống nâng đỡ con người.
            <br />
            Câu chuyện nuôi dưỡng niềm tin.
          </p>

          <p className="text-md leading-normal text-gray-500 lg:text-xl xl:text-xl xl:mt-5 xl:mb-5 xl:pr-0">
            Chúng tôi là Charted — một tập thể vận hành giúp doanh nghiệp nhỏ hiện đại hóa mà không đánh mất giá trị cốt lõi. Chúng tôi dọn dẹp vận hành rối rắm, thiết kế cánh cửa số, và âm thầm chuẩn bị cho bước tiếp theo của bạn.
          </p>

          <p className="mb-2 text-md leading-normal text-gray-500 lg:text-xl xl:text-xl xl:mt-5 xl:mb-5 pr-5 xl:pr-0">
            Dù bạn muốn tiếp tục lèo lái, dần lùi lại hay chuẩn bị chuyển giao, chúng tôi giúp bạn xây dựng những hệ thống đáng tin — cùng câu chuyện khiến khách hàng dễ dàng tìm thấy và tin tưởng.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="/contact"
              className="mt-2 px-8 py-4 text-sm font-medium text-center text-white bg-gray-800 hover:bg-gray-900 rounded-md transition"
            >
              Bắt đầu trao đổi
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

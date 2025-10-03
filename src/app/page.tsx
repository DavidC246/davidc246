import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/Container";
import ChartedServicesStepper from "@/components/ChartedServicesStepper";
import { BandMembers } from "@/components/BandMembers";
import { MusicHighlights } from "@/components/MusicHighlights";
import Gallery from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { UpcomingShows } from "@/components/UpcomingShows";
import { BookingForm } from "@/components/BookingForm";
import { ConnectStrip } from "@/components/ConnectStrip";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Benefits } from "@/components/Benefits";
import { TextHero } from "@/components/TextHero";
import UXChecklist from "@/components/UXChecklist";
import { SectionTitle } from "@/components/SectionTitle";
import {
  MusicalNoteIcon,
  SparklesIcon,
  UsersIcon,
  CalendarDaysIcon,
  SpeakerWaveIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import heroImage from "../../public/img/bands-1.jpg";
import benefitOneImage from "../../public/img/bands-6.jpg";
import benefitTwoImage from "../../public/img/bands-5.jpg";

const heroContent = {
  title: "David C Music - Live band cho mỗi khoảnh khắc",
  intro:
    "Ban nhạc live với dàn vocalist, nhạc công và ekip production đồng hành từ rehearsal tới đêm diễn.",
  descriptions: [
    "Chúng tôi mang đến những setlist giàu năng lượng, khả năng tương tác cùng khách mời và kinh nghiệm sản xuất cho cả sân khấu lớn lẫn sự kiện thân mật.",
    "Đặt band là đặt một ekip production đồng hành: từ phối khí, rehearsal đến điều phối timeline cùng bạn.",
  ],
  ctaPrimary: {
    label: "Đặt lịch ngay",
    href: "mailto:3thegear.pt@gmail.com",
  },
  ctaSecondary: {
    label: "Gửi yêu cầu booking",
    href: "#booking",
  },
};

const heroHighlights = [
  "Nhạc sống cho lễ cưới, gala, festival và private party.",
  "Timeline, rider và rehearsal rõ ràng cho từng chương trình.",
  "Hỗ trợ truyền thông với media kit, clip highlight sau show.",
];

const benefitsContent = [
  {
    imgPos: "left" as const,
    data: {
      imgPos: "left" as const,
      title: "Vì sao khách hàng chọn David C Music",
      desc: "Luôn có phương án phù hợp dù bạn tổ chức tiệc cưới, gala hay festival. Chúng tôi kết hợp kinh nghiệm sân khấu và quy trình làm việc rõ ràng.",
      image: benefitOneImage,
      bullets: [
        {
          title: "Setlist cá nhân hóa",
          desc: "Cập nhật liên tục hit Việt & quốc tế. Nhận yêu cầu must-play và chuẩn bị bản phối riêng cho khoảnh khắc quan trọng.",
          icon: <MusicalNoteIcon />,
        },
        {
          title: "Năng lượng sân khấu",
          desc: "Band tương tác, dẫn dắt khán giả và phối hợp với MC hoặc LED để tạo nhịp chung suốt chương trình.",
          icon: <SparklesIcon />,
        },
        {
          title: "Ekip chuyên nghiệp",
          desc: "Timeline chi tiết, rehearsal trước sự kiện và báo cáo rider rõ ràng giúp đội kỹ thuật dễ dàng phối hợp.",
          icon: <UsersIcon />,
        },
      ],
    },
  },
  {
    imgPos: "right" as const,
    data: {
      imgPos: "right" as const,
      title: "Trải nghiệm trọn gói từ booking đến after party",
      desc: "Chúng tôi luôn chuẩn bị kế hoạch dự phòng thời tiết, thiết bị và nhân sự để show diễn vận hành mượt mà.",
      image: benefitTwoImage,
      bullets: [
        {
          title: "Quy trình nhanh gọn",
          desc: "Phản hồi trong 24 giờ với báo giá, setlist đề xuất và hợp đồng điện tử.",
          icon: <CalendarDaysIcon />,
        },
        {
          title: "Kỹ thuật đáng tin",
          desc: "Có thể cung cấp hoặc kết nối đối tác âm thanh ánh sáng cho mọi quy mô khán giả.",
          icon: <SpeakerWaveIcon />,
        },
        {
          title: "Chăm sóc sau sự kiện",
          desc: "Gửi lại hình ảnh, clip highlight và hỗ trợ truyền thông cho khách hàng nếu cần.",
          icon: <HeartIcon />,
        },
      ],
    },
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <section id="hero" className="bg-gradient-to-b from-white to-slate-50">
        <Container className="flex flex-col-reverse items-center gap-12 py-16 lg:flex-row lg:py-24">
          <div className="w-full space-y-6 lg:w-1/2">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-500">
              Live band • Wedding • Corporate • Festival
            </p>
            <h1 className="font-serif text-4xl leading-tight text-gray-900 md:text-5xl">
              {heroContent.title}
            </h1>
            <p className="font-sans text-lg leading-relaxed text-gray-600">
              {heroContent.intro}
            </p>
            {heroContent.descriptions.map((text) => (
              <p key={text} className="font-sans text-base leading-relaxed text-gray-600">
                {text}
              </p>
            ))}
            <ul className="space-y-2 text-sm text-gray-600">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
              <a
                href={heroContent.ctaPrimary.href}
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-900 shadow-lg shadow-amber-500/40 transition hover:bg-amber-400"
              >
                {heroContent.ctaPrimary.label}
              </a>
              <a
                href={heroContent.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-700 transition hover:border-amber-400 hover:text-amber-500"
              >
                {heroContent.ctaSecondary.label}
              </a>
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">Hotline:</span>{' '}
              <a href="tel:+84965528281" className="font-semibold text-amber-600 hover:text-amber-500">
                +84 96 552 82 81
              </a>
              <span className="mx-2 text-gray-300">•</span>
              <span className="font-semibold text-gray-700">Email:</span>{' '}
              <a href="mailto:3thegear.pt@gmail.com" className="font-semibold text-amber-600 hover:text-amber-500">
                3thegear.pt@gmail.com
              </a>
            </div>
          </div>

          <div className="flex w-full justify-center lg:w-1/2">
            <div className="relative aspect-[4/5] w-full max-w-xl overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl shadow-black/25 ring-1 ring-black/10">
              <Image
                src={heroImage}
                alt="David C Music biểu diễn live cùng ban nhạc"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <TextHero />
      <MusicHighlights />
      <ChartedServicesStepper />

      <section id="benefits" className="bg-white py-16 md:py-24">
        <SectionTitle preTitle="Giải pháp" title="Vì sao các đơn vị chọn David C Music?">
          Mỗi sự kiện là một câu chuyện riêng. Chúng tôi xây dựng phương án chuẩn bị, dàn dựng và vận hành để bạn yên tâm tập trung vào trải nghiệm khách mời.
        </SectionTitle>
        <div className="space-y-20">
          {benefitsContent.map((section) => (
            <Benefits
              key={section.data.title}
              data={section.data}
              imgPos={section.imgPos}
              size="large"
            />
          ))}
        </div>
      </section>

      <BandMembers />
      <UpcomingShows />
      <Testimonials />
      <Gallery />
      <ConnectStrip />
      <BookingForm />
      <Faq />
      <Cta />

      <section id="resources" className="bg-neutral-950 py-16 md:py-24 text-white">
        <SectionTitle
          preTitle="Tài nguyên nội bộ"
          title="Checklist vận hành cho ekip David C Music"
          align="left"
          tone="light"
        >
          Lưu và theo dõi các hạng mục kỹ thuật, rehearsal, bảo trì nhạc cụ cho từng dự án. Checklist được lưu tại trình duyệt để bạn quay lại bất cứ lúc nào.
        </SectionTitle>
        <div className="mt-10">
          <UXChecklist />
        </div>
      </section>
    </>
  );
}

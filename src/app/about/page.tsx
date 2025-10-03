import { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { BandMembers } from '@/components/BandMembers';

export const metadata: Metadata = {
  title: 'Giới thiệu | David C Music',
  description:
    'Tìm hiểu hành trình và triết lý biểu diễn của David C Music – live band cho sự kiện, tiệc cưới và lễ hội trên khắp Việt Nam.',
};

const coreValues = [
  {
    title: 'Âm nhạc sống động',
    description:
      'Chúng tôi tin vào sức mạnh của live performance – tương tác thật, cảm xúc thật và những khoảnh khắc khó quên.',
  },
  {
    title: 'Đồng hành cùng sự kiện',
    description:
      'Từ khi nhận brief đến khi sân khấu tắt đèn, band luôn phối hợp chặt chẽ với planner, MC và kỹ thuật.',
  },
  {
    title: 'Chuyên nghiệp & linh hoạt',
    description:
      'Rider rõ ràng, timeline chi tiết và phương án backup giúp chương trình vận hành mượt mà dù quy mô nào.',
  },
];

const milestones = [
  {
    year: '2016',
    title: 'Bắt đầu với acoustic nights',
    description: 'David C và các thành viên đầu tiên biểu diễn tại lounge ở Phan Thiết và Sài Gòn.',
  },
  {
    year: '2018',
    title: 'Đội hình 6 thành viên',
    description: 'Thêm vocal nữ, keyboard và bộ trống hybrid để sẵn sàng cho sân khấu lớn.',
  },
  {
    year: '2021',
    title: 'Tour sự kiện doanh nghiệp',
    description: 'Thực hiện hơn 40 chương trình gala & ra mắt sản phẩm cho các thương hiệu trong và ngoài nước.',
  },
  {
    year: '2024',
    title: 'Tạo trải nghiệm đa giác quan',
    description: 'Kết hợp visual, âm nhạc và tương tác để mỗi show đều bùng nổ năng lượng.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-neutral-950 via-black to-neutral-900 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.12),transparent_60%)]" />
        <Container className="relative flex flex-col lg:flex-row items-center gap-10 py-20 md:py-28">
          <div className="space-y-6 text-center lg:text-left max-w-3xl">
            <p className="uppercase text-xs md:text-sm tracking-[0.24em] text-amber-300">
              Giới thiệu David C Music
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Chúng tôi kể câu chuyện sự kiện của bạn bằng âm nhạc sống
            </h1>
            <p className="font-sans text-lg leading-relaxed text-gray-300">
              David C Music là live band chuyên nghiệp với hơn 8 năm đồng hành cùng các sự kiện, lễ cưới và festival trên khắp Việt Nam. Chúng tôi kết hợp sự chuẩn bị kỹ lưỡng và năng lượng sân khấu để mỗi chương trình đều để lại dấu ấn riêng.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
              <a
                href="/#booking"
                className="inline-flex items-center justify-center px-5 py-3 text-sm md:text-base font-semibold uppercase tracking-[0.16em] bg-amber-400 text-neutral-900 rounded-full shadow-lg shadow-amber-500/30 hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 transition"
              >
                Đặt lịch ngay
              </a>
              <a
                href="/#music"
                className="inline-flex items-center justify-center px-5 py-3 text-sm md:text-base font-semibold uppercase tracking-[0.16em] border border-white/60 text-white rounded-full hover:bg-white/90 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition"
              >
                Nghe demo
              </a>
            </div>
          </div>
          <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden rounded-[36px] shadow-2xl shadow-amber-500/20">
            <Image
              src="/img/bands-4.jpg"
              alt="David C Music biểu diễn"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/40" />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <SectionTitle preTitle="Hành trình" title="Chúng tôi đến từ đâu" tone="light">
          Từ những đêm acoustic thân mật đến sân khấu hàng nghìn khán giả, mỗi cột mốc giúp chúng tôi hoàn thiện trải nghiệm biểu diễn.
        </SectionTitle>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 px-4 sm:px-6 lg:px-0">
            {milestones.map((item) => (
              <div key={item.year} className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
                  {item.year}
                </span>
                <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <SectionTitle preTitle="Giá trị" title="Điều giữ lửa cho mỗi show" tone="light">
          Chúng tôi đặt khán giả và khách hàng làm trung tâm, đầu tư vào từng chi tiết để âm nhạc truyền tải đúng thông điệp sự kiện.
        </SectionTitle>
        <Container>
          <div className="grid gap-6 md:grid-cols-3 px-4 sm:px-6 lg:px-0">
            {coreValues.map((value) => (
              <div key={value.title} className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 space-y-3 shadow-lg shadow-black/10">
                <h3 className="font-serif text-xl text-white">{value.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <SectionTitle preTitle="Đội ngũ" title="Những người đứng sau David C Music" tone="light">
          Đội hình linh hoạt theo từng chương trình nhưng luôn giữ tinh thần đồng đội và sự chuẩn bị kỹ lưỡng.
        </SectionTitle>
        <BandMembers />
      </section>

      <section className="py-16 md:py-24">
        <SectionTitle preTitle="Cảm hứng" title="Phong cách âm nhạc & setlist" tone="light">
          Chúng tôi kết hợp pop, R&B, funk và EDM – từ bản tình ca cho lễ cưới đến mashup bùng nổ cho lễ hội. Setlist luôn được cập nhật dựa trên khán giả và đặc thù chương trình.
        </SectionTitle>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 px-4 sm:px-6 lg:px-0">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-2xl text-white">Khi nào nên chọn David C Music?</h3>
              <ul className="font-sans text-sm leading-relaxed text-gray-300 space-y-2">
                <li>• Bạn cần live band tương tác mạnh với khán giả và hỗ trợ MC.</li>
                <li>• Sự kiện ưu tiên tính chuyên nghiệp: rider, timeline, rehearsal rõ ràng.</li>
                <li>• Muốn cá nhân hóa setlist theo câu chuyện cặp đôi hoặc thông điệp thương hiệu.</li>
                <li>• Cần phương án dự phòng thiết bị, nhân sự để chương trình không gián đoạn.</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-2xl text-white">Âm nhạc lấy cảm hứng từ</h3>
              <p className="font-sans text-sm leading-relaxed text-gray-300">
                Bruno Mars, Dua Lipa, Maroon 5, Vũ, Hoàng Thuỳ Linh… cùng các bản mashup độc quyền được producer của band phối riêng. Chúng tôi cũng nhận lời mời sáng tác hoặc viết lại lyric để phù hợp sự kiện.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

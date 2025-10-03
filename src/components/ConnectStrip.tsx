import { Container } from "@/components/Container";
import { SectionTitle } from "./SectionTitle";
import { EnvelopeIcon, MusicalNoteIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

const links = [
  {
    label: "Facebook",
    href: "https://facebook.com/davidcmusic",
    description: "Cập nhật lịch diễn, livestream và hậu trường.",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/davidcmusic",
    description: "Ảnh hậu trường, trang phục và khoảnh khắc đáng nhớ.",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@davidcmusic",
    description: "MV cover và bản live chất lượng cao.",
  },
];

export const ConnectStrip = () => {
  return (
    <section id="connect" className="py-16 md:py-24 bg-gradient-to-b from-neutral-950 to-black text-white">
      <SectionTitle preTitle="Kết nối" title="Nhận press kit & theo dõi David C Music" align="left" tone="light">
        Nhận bộ hình ảnh, logo, rider kỹ thuật và theo dõi chúng tôi trên mạng xã hội để không bỏ lỡ lịch diễn mới nhất.
      </SectionTitle>

      <Container>
        <div className="flex flex-col lg:flex-row gap-8 px-5 xl:px-0">
          <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-3">
            <h3 className="font-serif text-2xl text-white">Nhận press kit</h3>
            <p className="font-sans text-base leading-relaxed text-white/70">
              Bao gồm logo vector, profile, rider âm thanh ánh sáng và hình ảnh độ phân giải cao.
            </p>
            <a
              href="mailto:3thegear.pt@gmail.com?subject=Yeu%20cau%20press%20kit%20David%20C%20Music"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300 hover:text-amber-200"
            >
              <GlobeAltIcon className="w-5 h-5" />
              Nhận press kit qua email
            </a>
          </div>

          <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-3">
            <h3 className="font-serif text-2xl text-white">Liên hệ nhanh</h3>
            <p className="font-sans text-base leading-relaxed text-white/70">
              Email booking và hotline hỗ trợ 24/7 cho sự kiện gấp.
            </p>
            <div className="mt-2 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5 text-amber-300" />
                <a href="mailto:3thegear.pt@gmail.com" className="font-semibold text-white hover:text-amber-200">
                  3thegear.pt@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MusicalNoteIcon className="w-5 h-5 text-amber-300" />
                <a href="tel:+84965528281" className="font-semibold text-white hover:text-amber-200">
                  +84 96 552 82 81
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-3">
            <h3 className="font-serif text-2xl text-white">Theo dõi mạng xã hội</h3>
            <ul className="mt-2 space-y-3 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-semibold text-amber-300 hover:text-amber-200" target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                  <p className="font-sans text-white/60 leading-relaxed">{link.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

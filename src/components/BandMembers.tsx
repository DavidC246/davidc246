import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import { Container } from "@/components/Container";

type Member = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageClass?: string;
};

const members: Member[] = [
  {
    name: "David C",
    role: "Bassist",
    bio: "Thành viên sáng lập band nhạc #3thégear, quyết định nhịp tim và huyết áp của khán giả. Sở trường pop, funky, soft rock và EDM rock.",
    image: "/img/David pro5.jpg",
    imageClass: "object-cover object-top",
  },
  {
    name: "Lam Phiên",
    role: "Lead Guitar",
    bio: "Thành viên sáng lập band nhạc #3thégear. Xuất hiện ấn tượng cùng những câu solo guitar đậm vibe của chất nhạc Mỹ thập niên 80-90.",
    image: "/img/Phiên pro5.jpg",
    imageClass: "object-cover object-top transform scale-110",
  },
  {
    name: "Zahrah Châu Huyên",
    role: "Vocal",
    bio: "Giọng hát song ngữ giàu cảm xúc luôn giữ nhịp cho khán phòng từ ballad, rock đến những bản EDM bùng cháy.",
    image: "/img/bands-8.jpg",
  },
  {
    name: "Nhật Huy",
    role: "Vocal",
    bio: "Giọng ca tràn đầy năng lượng, giàu chất rock với quãng giọng rộng, luôn bơm căng không khí khán phòng bởi kỹ năng MC hype tuyệt vời.",
    image: "/img/bands-6.jpg",
  },
  {
    name: "Minh Huy",
    role: "Synthesizer",
    bio: "Linh hồn của những lớp synth và ambient, tạo texture điện tử, trigger sample và hỗ trợ khán phòng nhóm lửa trong các set EDM nonstop.",
    image: "/img/Minh Huy vest pr5.jpg",
    imageClass: "object-cover object-top",
  },
  {
    name: "Minh Thanh",
    role: "Drums & Percussion",
    bio: "Khuấy động sân khấu và đốt sạch lượng bia của khán phòng bởi rhythm chắc nịch cùng những cú vung dùi uy lực.",
    image: "/img/bands-7.jpg",
  },
];

export const BandMembers = () => {
  return (
    <section id="members" className="py-16 md:py-24 bg-white">
      <SectionTitle preTitle="Thành viên" title="Đội hình David C Music">
        Mỗi thành viên đều đồng hành cùng bạn trong quá trình chuẩn bị sự kiện – từ chọn ca khúc, lên timeline đến phối hợp với ekip.
      </SectionTitle>

      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-5 xl:px-0">
          {members.map((member) => (
            <div key={member.name} className="flex flex-col bg-gray-50 rounded-3xl overflow-hidden shadow-lg shadow-black/5">
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className={member.imageClass ?? "object-cover"}
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl text-gray-900">{member.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-500">{member.role}</p>
                <p className="font-sans text-sm leading-relaxed text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import { Container } from "@/components/Container";

type Member = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const members: Member[] = [
  {
    name: "David C",
    role: "Lead Vocal & Guitar",
    bio: "Thành viên sáng lập, phụ trách phối khí và kết nối khách hàng. Sở trường pop, R&B và rock acoustic.",
    image: "/img/bands-2.jpg",
  },
  {
    name: "Mai Anh",
    role: "Lead Vocal nữ",
    bio: "Giọng ca nội lực từng vào Top 6 The Voice, đảm nhận các bản hit tiếng Anh và mashup EDM.",
    image: "/img/bands-4.jpg",
  },
  {
    name: "Hoàng Phúc",
    role: "Keyboard & Music Director",
    bio: "Producer đứng sau các bản phối live, giữ liên lạc với kỹ thuật âm thanh và điều phối rehearsal.",
    image: "/img/bands-3.jpg",
  },
  {
    name: "Quang Huy",
    role: "Drums & Percussion",
    bio: "10 năm kinh nghiệm sân khấu festival, sẵn sàng mở rộng dàn trống hybrid cho trap/EDM set.",
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
                  className="object-cover"
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

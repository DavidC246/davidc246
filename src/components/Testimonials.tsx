import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "./SectionTitle";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

type Testimonial = {
  quote: React.ReactNode;
  name: string;
  title: string;
  image: any;
};

const testimonials: Testimonial[] = [
  {
    quote: (
      <>
        “David C Music đã nâng tầm lễ cưới của chúng tôi. Band không chỉ chơi đúng những bài quan trọng mà còn chủ động điều phối để cô dâu chú rể vào sân khấu đúng nhạc. Không khí bùng nổ đến phút cuối.”
      </>
    ),
    name: "Linh & Khoa",
    title: "Cặp đôi tổ chức cưới tại The Mira",
    image: userOneImg,
  },
  {
    quote: (
      <>
        “Chúng tôi cần một opening ấn tượng cho lễ ra mắt sản phẩm. Band đề xuất mashup riêng và phối hợp chặt với đội kỹ thuật. Toàn bộ khách VIP đều đứng lên cổ vũ.”
      </>
    ),
    name: "Hương Giang",
    title: "Marketing Manager, Saigon Riverside Hotel",
    image: userTwoImg,
  },
  {
    quote: (
      <>
        “Festival năm nay đông kỷ lục và David C Music giữ khán giả ở lại đến cuối. Họ xử lý sân khấu lớn rất chuyên nghiệp, rider rõ ràng và làm việc thân thiện với ekip.”
      </>
    ),
    name: "Nam Bùi",
    title: "Giám đốc sản xuất, Sunset Sounds Festival",
    image: userThreeImg,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-slate-100 py-16 md:py-24">
      <SectionTitle preTitle="Đánh giá" title="Khách hàng nói gì về David C Music">
        Từ tiệc cưới thân mật đến sân khấu lễ hội, chúng tôi xây dựng những khoảnh khắc đáng nhớ và làm việc chuyên nghiệp với mọi ekip tổ chức.
      </SectionTitle>

      <Container>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 px-5 xl:px-0">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="flex flex-col justify-between w-full h-full bg-white px-8 md:px-10 rounded-3xl py-10 shadow-xl shadow-black/10 border border-black/5"
            >
              <p className="font-serif text-lg leading-relaxed text-gray-800">
                {item.quote}
              </p>
              <Avatar image={item.image} name={item.name} title={item.title} />
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="overflow-hidden rounded-full w-14 h-14 shadow-md shadow-black/10">
        <Image
          src={props.image}
          width={56}
          height={56}
          alt={`Ảnh khách hàng ${props.name}`}
          placeholder="blur"
        />
      </div>
      <div>
        <div className="font-serif text-lg text-gray-900">{props.name}</div>
        <div className="font-sans text-sm text-gray-500">{props.title}</div>
      </div>
    </div>
  );
}

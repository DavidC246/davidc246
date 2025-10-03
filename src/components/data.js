import {
  MusicalNoteIcon,
  SparklesIcon,
  UsersIcon,
  CalendarDaysIcon,
  SpeakerWaveIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

export const heroData = {
  title: "David C Music - Live band cho mọi khoảnh khắc",
  description1:
    "Chúng tôi mang đến những setlist giàu năng lượng, khả năng tương tác cùng khách mời và kinh nghiệm sản xuất cho cả sân khấu lớn lẫn sự kiện thân mật.",
  description2:
    "Đặt band là đặt một ekip production đồng hành: từ phối khí, rehearsal đến điều phối timeline cùng bạn.",
  image: "/img/bands-1.jpg",
  ctaLink: "mailto:truongsanhcuong246@gmail.com",
  ctaText: "Đặt lịch ngay",
};

const benefitOne = {
  title: "Vì sao khách hàng chọn David C Music",
  desc: "Luôn có phương án phù hợp dù bạn tổ chức tiệc cưới, gala hay festival. Chúng tôi kết hợp kinh nghiệm sân khấu và quy trình làm việc rõ ràng.",
  image: "/img/Band cóđào.jpg",
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
};

const benefitTwo = {
  title: "Trải nghiệm trọn gói từ booking đến after party",
  desc: "Chúng tôi luôn chuẩn bị kế hoạch dự phòng thời tiết, thiết bị và nhân sự để show diễn vận hành mượt mà.",
  image: "/img/bands-5.jpg",
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
};

export { benefitOne, benefitTwo };

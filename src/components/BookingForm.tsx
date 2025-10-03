import { SectionTitle } from "./SectionTitle";
import { Container } from "@/components/Container";

export const BookingForm = () => {
  return (
    <section id="booking" className="py-16 md:py-24 bg-neutral-950 text-white">
      <SectionTitle preTitle="Booking" title="Gửi yêu cầu đặt band" align="left" tone="light">
        Cung cấp vài thông tin cơ bản để chúng tôi kiểm tra lịch trống và đề xuất phương án phù hợp. Bạn sẽ nhận phản hồi trong 24 giờ làm việc.
      </SectionTitle>

      <Container>
        <div className="max-w-3xl mx-auto bg-neutral-900/60 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/40">
        <form className="grid gap-6" method="post" action="mailto:truongsanhcuong246@gmail.com">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Họ tên
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Nguyễn Văn A"
                className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/70"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Email liên hệ
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="name@example.com"
                className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/70"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Số điện thoại
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                pattern="^0[0-9]{9}$"
                placeholder="0912345678"
                className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/70"
              />
              <p className="text-xs text-gray-400">Vui lòng nhập số gồm 10 chữ số và bắt đầu bằng 0. Ví dụ: 0912345678.</p>
            </div>

            <div className="grid gap-2 md:grid-cols-2 md:gap-6">
              <div className="grid gap-2">
                <label htmlFor="date" className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                  Ngày sự kiện
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 font-sans text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/70"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="city" className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                  Địa điểm / Thành phố
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="TP. Hồ Chí Minh"
                  className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/70"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="eventType" className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Loại sự kiện
              </label>
              <select
                id="eventType"
                name="eventType"
                className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 font-sans text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/70"
              >
                <option value="Tiệc cưới">Tiệc cưới</option>
                <option value="Doanh nghiệp">Doanh nghiệp</option>
                <option value="Lễ hội">Lễ hội</option>
                <option value="Party riêng">Party riêng</option>
                <option value="Khác">Khác</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Ngân sách dự kiến (VNĐ hoặc USD)
              </label>
              <input
                id="budget"
                name="budget"
                type="text"
                placeholder="Ví dụ: 80.000.000"
                className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/70"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Ghi chú thêm (timeline, bài hát bắt buộc, MC...)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/70"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-semibold uppercase tracking-[0.16em] text-neutral-900 bg-amber-400 rounded-full shadow-lg shadow-amber-500/30 hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              Gửi yêu cầu
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

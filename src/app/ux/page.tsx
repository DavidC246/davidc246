import { Metadata } from 'next';
import { UXChecklist } from '@/components/UXChecklist';

export const metadata: Metadata = {
  title: 'UX Checklist | David C Music',
  description: 'Checklist tương tác giúp đội ngũ David C Music quản lý trải nghiệm người dùng cho từng hạng mục sự kiện.',
};

export default function UXPage() {
  return <UXChecklist />;
}

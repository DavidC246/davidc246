'use client';

import Link from 'next/link';
import { Disclosure } from '@headlessui/react';

const navigation = [
  { label: 'Trang chủ', href: '/#hero' },
  { label: 'Giới thiệu', href: '/about' },
  { label: 'Dịch vụ', href: '/#services' },
  { label: 'Bộ sưu tập', href: '/gallery' },
  { label: 'Liên hệ công việc', href: '/contact' },
];

export const Navbar = () => {
  return (
    <div className="w-full sticky top-0 z-[1000] bg-black text-white">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-[0.18em] uppercase">DAVID C MUSIC</span>
          <span className="mt-1 text-sm text-gray-400 whitespace-nowrap">
            Hướng dẫn nhạc cụ · Sự kiện · Band nhạc · Spa nhạc cụ
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 xl:gap-10">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm lg:text-base text-gray-200 hover:text-amber-400 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/#booking"
            className="ml-8 inline-flex items-center justify-center px-5 py-2.5 text-sm lg:text-base font-semibold uppercase tracking-[0.12em] bg-amber-500 text-black rounded-full shadow-xl shadow-amber-500/40 hover:bg-amber-600"
          >
            Đặt lịch ban nhạc
          </Link>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Mở menu"
                className="md:hidden p-2 rounded text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="md:hidden mt-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 font-sans text-sm text-gray-200 hover:text-amber-400 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/#booking"
                  className="block mt-3 px-4 py-2 text-center font-semibold bg-amber-500 text-black rounded-full shadow-xl shadow-amber-500/40 hover:bg-amber-600"
                >
                  Đặt lịch ban nhạc
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </div>
  );
};

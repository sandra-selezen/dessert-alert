'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { leftNavLinks, rightNavLinks } from '@/lib/constants';
import { BuyIcon, CloseIcon, FavoriteIcon, MenuIcon } from '@/assets/icons';

export const Header = () => {
  const [open, setOpen] = useState(false);

  // lock body scroll when menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-pink10">
        <div className="container mx-auto flex items-center justify-between px-6 py-6">
          {/* Logo */}
          <Link href="/" aria-label="Home" className="shrink-0">
            <Image src="/images/logo-black.png" width={76} height={32} alt="logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-12">
            <ul className="flex gap-16">
              {leftNavLinks.map(({ title, url }) => (
                <li key={title}>
                  <Link href={url} className="hover:opacity-70 transition-opacity">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex gap-12">
              {rightNavLinks.map(({ title, url }) => (
                <li key={title}>
                  <Link href={url} className="hover:opacity-70 transition-opacity">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/cart"
              aria-label="Cart"
              className="h-12 w-12 grid place-items-center rounded-xl border border-black100"
            >
              <BuyIcon className="h-6 w-6 fill-black100" />
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="h-12 w-12 grid place-items-center rounded-xl border border-black100"
            >
              <MenuIcon className="h-6 w-6 fill-black100" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`
          fixed inset-x-0 h-screen z-[60] md:hidden bg-white
          transition-all duration-400 ease-in-out
          ${open ? 'top-0' : '-top-full'}
        `}
      >
        <div className="absolute inset-0 bg-white" onClick={() => setOpen(false)} />
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/bg-hero-02.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          }}
        />

        <div className="relative h-full overflow-y-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Home" onClick={() => setOpen(false)}>
              <Image src="/images/logo-black.png" width={76} height={32} alt="logo" />
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="h-12 w-12 grid place-items-center"
            >
              <CloseIcon className="h-7 w-7" />
            </button>
          </div>

          <nav className="mt-14">
            <ul className="space-y-10 text-3xl font-medium">
              {leftNavLinks.map(({ title, url }) => (
                <li key={title}>
                  <Link
                    href={url}
                    onClick={() => setOpen(false)}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {title}
                  </Link>
                </li>
              ))}

              <li className="pt-2">
                <Link
                  href="/favorites"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 hover:opacity-70 transition-opacity"
                >
                  <FavoriteIcon className="h-7 w-7" />
                  <span>My Favorites</span>
                </Link>
              </li>
            </ul>

            <div className="mt-14">
              <Link
                href="/contacts"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full border border-black/40 py-4 text-center text-xl hover:bg-black/5 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

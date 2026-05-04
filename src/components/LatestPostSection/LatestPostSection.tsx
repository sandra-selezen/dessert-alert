'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FastForwardIcon } from '@/assets/icons';
import { latestPost } from '@/lib/data';

const POSTS_PER_PAGE = 6;
const LOADING_DELAY = 450;

export const LatestPostSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const allPosts = useMemo(() => {
    return [
      ...latestPost,
      ...latestPost.map((post) => ({
        ...post,
        id: `${post.id}-copy-1`,
      })),
      ...latestPost.map((post) => ({
        ...post,
        id: `${post.id}-copy-2`,
      })),
      ...latestPost.map((post) => ({
        ...post,
        id: `${post.id}-copy-3`,
      })),
      ...latestPost.map((post) => ({
        ...post,
        id: `${post.id}-copy-4`,
      })),
    ];
  }, []);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = allPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const changePage = (page: number) => {
    if (page === currentPage || isLoading) return;

    setIsLoading(true);

    window.setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, LOADING_DELAY);
  };

  const goToPrevPage = () => {
    changePage(Math.max(currentPage - 1, 1));
  };

  const goToNextPage = () => {
    changePage(Math.min(currentPage + 1, totalPages));
  };

  return (
    <section className="container mx-auto px-4 pt-16 md:pt-20">
      <h2 className="h2 mb-10 lg:mb-16">Latest Post</h2>

      <ul className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-y-16">
        {isLoading
          ? Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
              <LatestPostSkeleton key={index} />
            ))
          : paginatedPosts.map((post) => (
              <li key={post.id} className="flex flex-col">
                <Image
                  src={post.image}
                  width={343}
                  height={250}
                  alt=""
                  className="w-full rounded-2xl object-cover"
                />

                <div className="flex-grow flex flex-col justify-between mt-6">
                  <h3 className="text-xl/9 font-semibold mb-6 break-words line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2 font-fredoka font-semibold text-pink100 hover:opacity-75 transition-opacity"
                    >
                      Read More <FastForwardIcon className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
      </ul>

      <div className="mt-12 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={goToPrevPage}
          disabled={currentPage === 1 || isLoading}
          aria-label="Previous page"
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition hover:text-pink100 disabled:pointer-events-none disabled:opacity-30"
        >
          <FastForwardIcon className="h-5 w-5 rotate-180" />
        </button>

        <div className="flex items-center gap-4">
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            const isActive = page === currentPage;

            return (
              <button
                key={page}
                type="button"
                onClick={() => changePage(page)}
                disabled={isLoading}
                className={`flex h-8 w-8 items-center justify-center rounded-full font-fredoka text-sm font-semibold transition disabled:pointer-events-none ${
                  isActive ? 'bg-pink100 text-white' : 'text-gray-500 hover:text-pink100'
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={goToNextPage}
          disabled={currentPage === totalPages || isLoading}
          aria-label="Next page"
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition hover:text-pink100 disabled:pointer-events-none disabled:opacity-30"
        >
          <FastForwardIcon className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

function LatestPostSkeleton() {
  return (
    <li className="flex flex-col">
      <div className="h-[250px] w-full animate-pulse rounded-2xl bg-gray-200" />

      <div className="mt-6 flex flex-grow flex-col justify-between">
        <div className="mb-6 space-y-3">
          <div className="h-6 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-6 w-4/5 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="h-5 w-28 animate-pulse rounded bg-gray-200" />
      </div>
    </li>
  );
}

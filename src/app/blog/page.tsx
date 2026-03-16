import Image from 'next/image';
import Link from 'next/link';
import { FastForwardIcon } from '@/assets/icons';
import { latestPost, popularPost } from '@/lib/data';

const BlogPage = () => {
  return (
    <main>
      <section className="bg-pink10 pt-14">
        <div className="container mx-auto text-center py-16 lg:py-20">
          <p className="font-fredoka font-semibold text-black50">
            Home <span className="text-pink100">/ Blog</span>
          </p>
          <h1 className="h1">Our Blog</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 pt-16 md:pt-20">
        <h2 className="h2 mb-10 lg:mb-16">Latest Post</h2>
        <ul className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-y-16">
          {latestPost.map((post) => (
            <li key={post.id} className="flex flex-col">
              <Image
                src={post.image}
                width={343}
                height={250}
                alt=""
                className="w-full object-cover"
              />
              <div className="flex-grow flex flex-col justify-between mt-6">
                <h3 className="text-xl/9 font-semibold mb-6 break-words line-clamp-2">
                  {post.title}
                </h3>
                <div className="mt-auto">
                  <Link
                    href="#"
                    className="flex items-center gap-2 font-fredoka font-semibold text-pink100 hover:opacity-75 transition-opacity"
                  >
                    Read More <FastForwardIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="container mx-auto px-4 pt-16 md:pt-20 pb-20 md:pb-36">
        <h2 className="h2 mb-10 lg:mb-16">Most Popular Post</h2>
        <ul className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-y-16">
          {popularPost.map((post) => (
            <li key={post.id} className="flex flex-col">
              <Image
                src={post.image}
                width={343}
                height={250}
                alt=""
                className="w-full object-cover"
              />
              <div className="flex-grow flex flex-col justify-between mt-6">
                <h3 className="text-xl/9 font-semibold mb-6 break-words line-clamp-2">
                  {post.title}
                </h3>
                <div className="mt-auto">
                  <Link
                    href="#"
                    className="flex items-center gap-2 font-fredoka font-semibold text-pink100 hover:opacity-75 transition-opacity"
                  >
                    Read More <FastForwardIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default BlogPage;

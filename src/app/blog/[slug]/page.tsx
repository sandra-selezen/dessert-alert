import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, latestPost } from '@/lib/data';
import { author } from '@/assets/images/blog';
import { FastForwardIcon, LinkedInIcon, TelegramIcon, TwitterIcon } from '@/assets/icons';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content
    .split('\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main className="pt-14 pb-10 lg:pb-20">
      <section>
        <div className="container mx-auto px-6 py-16 lg:py-20">
          <p className="font-fredoka font-semibold text-black50">
            <Link href="/">Home</Link> / <Link href="/blog">Blog</Link>{' '}
            <span className="text-pink100">/ {post.title}</span>
          </p>
        </div>
      </section>
      <article className="mx-auto container max-w-[920px] px-4 pt-10 lg:pt-20">
        <h1 className="h1 mb-4 text-center">{post.title}</h1>

        <div className="mx-auto flex justify-center mb-4 items-center gap-3">
          <div className="h-[46px] w-[46px] flex justify-center">
            <Image src={author} height={46} width={46} alt="author" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold">By Arsya</span>
            <span className="text-black50">08/05/2026</span>
          </div>
        </div>

        <Image
          src={post.image}
          width={750}
          height={430}
          alt={post.title}
          className="mb-8 h-[343px] w-full rounded-2xl object-cover md:h-[520px]"
          priority
        />

        <div className="space-y-6 text-base leading-8 text-black50">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="bg-pink10 p-6 rounded-3xl mt-8">
          <p className="text-base leading-8 text-black50">
            Conclusion: <br /> Fresh food on wheels in the form of mobile markets is a
            transformative solution that is revolutionizing access to nutritious food in food
            deserts. By bringing fresh produce and groceries directly to underserved communities,
            mobile markets break down barriers, enhance food access and choice, foster community
            engagement, and empower individuals to make healthier choices. As the popularity and
            effectiveness of mobile markets continue to grow, they hold the potential to create
            lasting change and help eradicate food deserts, one neighborhood at a time.
          </p>
        </div>
      </article>
      <div className="mx-auto max-w-60 px-6 mt-8 mb-10 lg:mb-20 flex gap-3 flex-col justify-center">
        <span className="text-center font-bold">Share</span>
        <div className="flex gap-5 justify-center">
          <Link
            href="#"
            aria-label="Twitter"
            className="bg-pink100 p-1 h-10 w-10 flex justify-center items-center rounded-full hover:opacity-75 transition-opacity"
          >
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link
            href="#"
            aria-label="Telegram"
            className="bg-pink100 p-1 h-10 w-10 flex justify-center items-center rounded-full hover:opacity-75 transition-opacity"
          >
            <TelegramIcon className="h-6 w-6" />
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="bg-pink100 p-1 h-10 w-10 flex justify-center items-center rounded-full hover:opacity-75 transition-opacity"
          >
            <LinkedInIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <section className="mx-auto container px-4">
        <p className="font-fredoka font-semibold text-pink100 text-center text-[28px] mb-4">
          Our Blog
        </p>
        <h2 className="h2 text-center mb-10 lg:mb-16">Relate Articles</h2>
        <ul className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPost.slice(0, 3).map((post) => (
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
      </section>
    </main>
  );
}

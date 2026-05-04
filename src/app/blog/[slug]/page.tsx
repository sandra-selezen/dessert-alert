import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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
    <main className="pt-14">
      <section className="bg-pink10">
        <div className="container mx-auto px-6 py-16 lg:py-20">
          <p className="font-fredoka font-semibold text-black50">
            Home / Blog <span className="text-pink100">/ {post.title}</span>
          </p>
        </div>
      </section>
      <article className="mx-auto container max-w-[920px] py-10 lg:py-20">
        <h1 className="h1 mb-4 text-center">{post.title}</h1>

        <Image
          src={post.image}
          width={750}
          height={430}
          alt={post.title}
          className="mb-8 h-[343px] w-full rounded-2xl object-cover md:h-[520px]"
          priority
        />

        <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg md:leading-9">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}

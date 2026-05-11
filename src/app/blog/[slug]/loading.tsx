export default function BlogPostLoading() {
  return (
    <main className="container mx-auto px-4 pt-10 pb-20 lg:pb-36">
      <div className="mb-16 flex gap-2">
        <div className="h-7 w-[70px] animate-pulse rounded bg-pink10" />
        <div className="h-7 w-[70px] animate-pulse rounded bg-pink10" />
        <div className="h-7 w-[220px] animate-pulse rounded bg-pink10" />
      </div>

      <article className="mx-auto max-w-[920px]">
        <div className="mx-auto mb-4 h-12 w-full max-w-[820px] animate-pulse rounded bg-pink10 md:h-16" />
        <div className="mx-auto mb-8 h-12 w-4/5 max-w-[720px] animate-pulse rounded bg-pink10 md:h-16" />

        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="h-12 w-12 animate-pulse rounded-full bg-pink10" />

          <div className="space-y-2">
            <div className="h-4 w-20 animate-pulse rounded bg-pink10" />
            <div className="h-4 w-24 animate-pulse rounded bg-pink10" />
          </div>
        </div>

        <div className="mb-10 h-[260px] w-full animate-pulse rounded-2xl bg-pink10 md:h-[430px]" />

        <div className="space-y-5">
          <div className="h-5 w-full animate-pulse rounded bg-pink10" />
          <div className="h-5 w-full animate-pulse rounded bg-pink10" />
          <div className="h-5 w-11/12 animate-pulse rounded bg-pink10" />
          <div className="h-5 w-4/5 animate-pulse rounded bg-pink10" />

          <div className="pt-6" />

          <div className="h-5 w-full animate-pulse rounded bg-pink10" />
          <div className="h-5 w-full animate-pulse rounded bg-pink10" />
          <div className="h-5 w-10/12 animate-pulse rounded bg-pink10" />
          <div className="h-5 w-3/4 animate-pulse rounded bg-pink10" />
        </div>
      </article>
    </main>
  );
}

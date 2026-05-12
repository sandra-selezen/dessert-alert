const ProductPageLoading = () => {
  return (
    <main>
      <section className="container mx-auto px-4 pt-10 pb-20 lg:pb-36">
        <div className="mb-16 flex items-center gap-2">
          <div className="h-7 w-[70px] animate-pulse rounded bg-pink10" />
          <div className="h-7 w-[70px] animate-pulse rounded bg-pink10" />
          <div className="h-7 w-[140px] animate-pulse rounded bg-pink10" />
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="basis-1/2">
            <div className="flex flex-col items-center">
              <div className="flex min-h-[360px] w-full items-center justify-center lg:min-h-[522px]">
                <div className="h-[280px] w-[280px] animate-pulse rounded-full bg-pink10 lg:h-[420px] lg:w-[420px]" />
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-4 w-4 animate-pulse rounded-full bg-pink100" />
                <div className="h-4 w-4 animate-pulse rounded-full bg-pink100/30" />
                <div className="h-4 w-4 animate-pulse rounded-full bg-pink100/30" />
              </div>
            </div>
          </div>

          <div className="basis-1/2">
            <div className="mb-4 h-14 w-3/4 animate-pulse rounded bg-pink10 lg:mb-8 lg:h-20" />

            <div className="mb-1 h-7 w-20 animate-pulse rounded bg-pink10" />
            <div className="h-6 w-14 animate-pulse rounded bg-pink10" />

            <div className="mt-8">
              <div className="mb-4 h-7 w-36 animate-pulse rounded bg-pink10" />

              <div className="space-y-4">
                <div className="h-5 w-full animate-pulse rounded bg-pink10" />
                <div className="h-5 w-full animate-pulse rounded bg-pink10" />
                <div className="h-5 w-11/12 animate-pulse rounded bg-pink10" />
                <div className="h-5 w-full animate-pulse rounded bg-pink10" />
                <div className="h-5 w-10/12 animate-pulse rounded bg-pink10" />
                <div className="h-5 w-4/5 animate-pulse rounded bg-pink10" />
              </div>
            </div>

            <div className="my-6 flex items-center">
              <div className="mr-3 h-7 w-28 animate-pulse rounded bg-pink10" />

              <div className="flex">
                <div className="h-[43px] w-[43px] animate-pulse rounded-l bg-pink10" />
                <div className="h-[43px] w-[43px] animate-pulse bg-pink10" />
                <div className="h-[43px] w-[43px] animate-pulse rounded-r bg-pink10" />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="h-[60px] flex-1 animate-pulse rounded-full bg-pink10" />
              <div className="h-[60px] w-[60px] animate-pulse rounded-full bg-pink10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPageLoading;

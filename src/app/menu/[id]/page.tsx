import Link from 'next/link';
import { menu } from '@/lib/data';
import { ENABLE_LOADING_DEMO, sleep } from '@/lib/utils';

import { MenuItem } from '@/components/MenuItem/MenuItem';
import { PopularMenu } from '@/components/PopularMenu/PopularMenu';

export async function generateStaticParams() {
  return menu.map((item) => ({
    id: item.id.toString(),
  }));
}

const MenuDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Demo delay for presentation:
  // shows the menu item skeleton while data is "loading"
  if (ENABLE_LOADING_DEMO) {
    await sleep(2000);
  }

  const { id } = await params;
  const item = menu.find((menuItem) => menuItem.id === parseInt(id));

  if (!item) {
    return <h1 className="text-center text-2xl">Item not found</h1>;
  }

  return (
    <main>
      <div className="container mx-auto mt-10 lg:mt-16 mb-8 lg:mb-16 px-4 pt-24">
        <p className="font-fredoka font-semibold text-black50">
          <Link href="/">Home</Link> / <Link href="/menu">Menu</Link>{' '}
          <span className="text-pink100">/ Sweet Cake</span>
        </p>
      </div>
      <section className="container mx-auto pb-20 lg:pb-36 px-4 flex flex-col lg:flex-row gap-6">
        <MenuItem item={item} />
      </section>
      <section className="container mx-auto pb-20 lg:pb-36 px-4">
        <PopularMenu />
      </section>
    </main>
  );
};

export default MenuDetails;

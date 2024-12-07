import Image from "next/image";

import { menu } from "@/lib/data";

import { MenuItem } from "@/components/MenuItem/MenuItem";
import { PopularMenu } from "@/components/PopularMenu/PopularMenu";

export async function generateStaticParams() {
  return menu.map((item) => ({
    id: item.id.toString(),
  }));
}

const MenuDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const item = menu.find((menuItem) => menuItem.id === parseInt(id));

  if (!item) {
    return <h1 className="text-center text-2xl">Item not found</h1>;
  }

  return (
    <main>
      <div className="container mx-auto mt-10 lg:mt-16 mb-8 lg:mb-16 px-4">
        <p className="font-fredoka font-semibold text-black50">Home / Menu <span className="text-pink100">/ Sweet Cake</span></p>
      </div>
      <section className="container mx-auto pb-20 lg:pb-36 px-4 flex flex-col lg:flex-row">
        <MenuItem item={item} />
      </section>
      <section className="container mx-auto pb-20 lg:pb-36 px-4">
        <PopularMenu />
      </section>
    </main>
  )
}

export default MenuDetails;

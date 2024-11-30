import Image from "next/image";

import { menu } from "@/lib/data";

import { Categories } from "@/components/Categories/Categories";

const MenuPage = () => {
  return (
    <main>
      <section className="bg-pink10">
        <div className="container mx-auto text-center py-16 lg:py-20">
          <p className="font-fredoka font-semibold text-black50">Home <span className="text-pink100">/ Menu</span></p>
          <h1 className="h1">Our Menu</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 pt-16 md:pt-20 pb-20 md:pb-36">
        <div className="flex flex-col md:flex-row gap-16 md:gap-20">
          <div className="basis-1/4">
            <h3>Categories</h3>
            <Categories />
            <div>Banner</div>
          </div>

          <div className="basis-3/4">
            <div className="flex justify-between">
              <h2>All Menu</h2>
              <p>200 Menu</p>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
              {menu.map((item) => (
                <li key={item.id}>
                  <Image src={item.image} width={200} height={200} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MenuPage;

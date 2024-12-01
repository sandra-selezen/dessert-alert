import { PopularMenu } from "@/components/PopularMenu/PopularMenu";
import { menu } from "@/lib/data";
import Image from "next/image";

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
        <div className="basis-1/2">
          <Image src={item?.image} width={343} height={343} alt={item?.name} className="mx-auto w-full h-auto lg:w-[522px]" />
        </div>
        <div className="basis-1/2">
          <h1 className="mb-4 lg:mb-8 font-bold text-4xl lg:text-6xl">{item?.name}</h1>
          <p className="font-bold text-2xl mb-1">Price</p>
          <span className="font-fredoka font-semibold text-xl text-pink100">${item?.price}</span>
          <div className="mt-8">
            <h3 className="font-bold text-2xl mb-2">Description</h3>
            <p className="text-black50 text-base/8">
              From classic favorites to unique creations, our cake menu at Fofood offers a delectable selection of sweet treats that will satisfy your cravings.
              Indulge in moist and fluffy vanilla cake, rich chocolate ganache cake, refreshing lemon berry cake, tropical mango passion cake, and more.
              With options available for various dietary preferences, including vegan and gluten-free choices, everyone can enjoy our irresistible cakes.
              Whether you're celebrating a special occasion or simply treating yourself, our cakes are made with the finest ingredients and expert craftsmanship.
              Discover the joy of our sweet creations and let our cakes be the highlight of your sweet moments.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="font-bold text-2xl mb-2">Quantity:</h3>
          </div>
        </div>
      </section>
      <section className="container mx-auto pb-20 lg:pb-36 px-4">
        <PopularMenu />
      </section>
    </main>
  )
}

export default MenuDetails;

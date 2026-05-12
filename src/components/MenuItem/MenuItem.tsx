'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { FavoriteIcon } from '@/assets/icons';
import { PrimaryButton } from '../Buttons/PrimaryButton';

interface IMenuItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: StaticImageData;
  };
}

interface IStoredCartItem {
  itemId: number;
  quantity: number;
}

const imageVariants = [
  {
    id: 'default',
    label: 'Default view',
    imageClassName: '',
  },
  {
    id: 'soft',
    label: 'Soft view',
    imageClassName: 'brightness-105 saturate-125',
  },
  {
    id: 'dark',
    label: 'Dark view',
    imageClassName: 'brightness-90 contrast-110',
  },
];

export const MenuItem = ({ item }: IMenuItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageVariantId, setSelectedImageVariantId] = useState(imageVariants[0].id);

  const selectedImageVariant = imageVariants.find(
    (variant) => variant.id === selectedImageVariantId,
  );

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]') as IStoredCartItem[];

    const existingItemIndex = cart.findIndex((cartItem) => cartItem.itemId === item.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({
        itemId: item.id,
        quantity,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
    alert('Product added to cart!');
  };

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as number[];

    const isAlreadyFavorite = favorites.includes(item.id);

    if (!isAlreadyFavorite) {
      favorites.push(item.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Added to Favorites!');
    } else {
      alert('This item is already in Favorites!');
    }
  };

  return (
    <>
      <div className="basis-1/2">
        <div className="flex flex-col items-center">
          <div className="relative flex w-full items-center justify-center overflow-hidden px-6 py-10 md:px-10 lg:min-h-[560px]">
            <Image
              src={item.image}
              width={343}
              height={343}
              alt={item.name}
              className={`mx-auto h-auto w-full transition-all duration-300 lg:w-[522px] ${
                selectedImageVariant?.imageClassName || ''
              }`}
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {imageVariants.map((variant) => {
              const isActive = selectedImageVariantId === variant.id;

              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedImageVariantId(variant.id)}
                  aria-label={variant.label}
                  className={`h-4 w-4 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'scale-110 bg-pink100'
                      : 'bg-pink100/30 hover:scale-110 hover:bg-pink100/60'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="basis-1/2">
        <h1 className="mb-4 lg:mb-8 font-bold text-4xl lg:text-6xl">{item.name}</h1>

        <p className="font-bold text-2xl mb-1">Price</p>

        <span className="font-fredoka font-semibold text-xl text-pink100">${item.price}</span>

        <div className="mt-8">
          <h3 className="font-bold text-2xl mb-2">Description</h3>

          <p className="text-black50 text-base/8">
            From classic favorites to unique creations, our cake menu at Fofood offers a delectable
            selection of sweet treats that will satisfy your cravings. Indulge in moist and fluffy
            vanilla cake, rich chocolate ganache cake, refreshing lemon berry cake, tropical mango
            passion cake, and more. With options available for various dietary preferences,
            including vegan and gluten-free choices, everyone can enjoy our irresistible cakes.
            Whether you're celebrating a special occasion or simply treating yourself, our cakes are
            made with the finest ingredients and expert craftsmanship. Discover the joy of our sweet
            creations and let our cakes be the highlight of your sweet moments.
          </p>
        </div>

        <div className="my-6 flex items-center">
          <h3 className="font-bold text-2xl mr-3">Quantity:</h3>

          <div className="flex">
            <button
              type="button"
              className="w-[43px] h-[43px] border-l border-t border-b rounded-tl rounded-bl border-light-gray disabled:cursor-not-allowed disabled:opacity-50"
              onClick={decreaseQuantity}
              disabled={quantity === 1}
            >
              <span className="text-2xl">-</span>
            </button>

            <span className="w-[43px] h-[43px] flex items-center justify-center text-2xl border border-light-gray">
              {quantity}
            </span>

            <button
              type="button"
              className="w-[43px] h-[43px] border-r border-t border-b rounded-tr rounded-br border-light-gray"
              onClick={increaseQuantity}
            >
              <span className="text-2xl">+</span>
            </button>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <PrimaryButton type="button" onClick={addToCart} clasName="flex-1">
            Add to Cart
          </PrimaryButton>

          <button
            type="button"
            onClick={addToFavorites}
            className="p-2 w-[60px] h-[60px] flex justify-center items-center rounded-full bg-transparent border border-solid border-pink100"
          >
            <FavoriteIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

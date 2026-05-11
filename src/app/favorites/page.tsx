'use client';

import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { menu } from '@/lib/data';
import { SecondaryButton } from '@/components/Buttons/SecondaryButton';
import { FavoriteFullIcon } from '@/assets/icons';

interface IFavorite {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
  category?: string;
}

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<IFavorite[]>([]);
  const [isFavoritesLoaded, setIsFavoritesLoaded] = useState(false);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]') as number[];

    const hydratedFavorites = favoriteIds
      .map((id) => menu.find((item) => item.id === id))
      .filter(Boolean) as IFavorite[];

    setFavorites(hydratedFavorites);
    setIsFavoritesLoaded(true);
  }, []);

  const removeFromFavorites = (itemId: number) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== itemId);
    const updatedFavoriteIds = updatedFavorites.map((favorite) => favorite.id);

    localStorage.setItem('favorites', JSON.stringify(updatedFavoriteIds));
    setFavorites(updatedFavorites);
  };

  return (
    <main>
      <section className="bg-pink10 pt-14">
        <div className="container mx-auto text-center py-16 lg:py-20">
          <p className="font-fredoka font-semibold text-black50">
            <Link href="/">Home</Link> <span className="text-pink100">/ Favorites</span>
          </p>

          <h1 className="h1">My Favorites</h1>
        </div>
      </section>

      <section className="container mx-auto py-20 lg:py-36 px-4">
        {!isFavoritesLoaded ? (
          <div className="mx-auto grid max-w-max grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-20">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-3 h-[150px] w-[150px] animate-pulse rounded-full bg-pink10" />
                <div className="mb-2 h-5 w-28 animate-pulse rounded bg-pink10" />
                <div className="h-5 w-12 animate-pulse rounded bg-pink10" />
              </div>
            ))}
          </div>
        ) : favorites.length ? (
          <ul className="max-w-max mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
            {favorites.map((item) => (
              <li key={item.id} className="flex items-center flex-col relative">
                <button
                  type="button"
                  onClick={() => removeFromFavorites(item.id)}
                  className="w-[40px] h-[40px] p-1 flex justify-center items-center rounded-full bg-transparent border border-solid border-pink100 absolute right-0"
                  aria-label={`Remove ${item.name} from favorites`}
                >
                  <FavoriteFullIcon className="h-6 w-6" />
                </button>

                <Image src={item.image} width={150} height={150} alt={item.name} className="mb-3" />

                <Link href={`/menu/${item.id}`} className="mb-2 font-bold">
                  {item.name}
                </Link>

                <span className="font-fredoka font-semibold text-pink100">${item.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="max-w-[820px] mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">Your Sweet Indulgences Await!</h2>

            <p className="text-black50 text-base/8 mb-6">
              Welcome to your favorites page! Here, you can keep track of all your beloved desserts
              from our delectable selection. Whether you have a soft spot for chocolatey treats,
              crave creamy delights, or savor fruity delicacies, this is the place to save and
              organize your favorites. Simply click the heart icon next to the desserts you love,
              and they'll be stored here for quick access whenever your sweet tooth strikes.
            </p>

            <SecondaryButton href="/menu" className="inline-block">
              Explore Irresistible Desserts
            </SecondaryButton>
          </div>
        )}
      </section>
    </main>
  );
};

export default FavoritesPage;

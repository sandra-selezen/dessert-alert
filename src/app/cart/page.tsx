'use client';

import { useEffect, useMemo, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { menu } from '@/lib/data';
import { PrimaryButton } from '@/components/Buttons/PrimaryButton';
import { DeleteIcon } from '@/assets/icons';

export interface ICart {
  item: {
    id: number;
    name: string;
    price: number;
    image: StaticImageData;
  };
  quantity: number;
}

interface IStoredCartItem {
  itemId: number;
  quantity: number;
}

const MyCartPage = () => {
  const [cart, setCart] = useState<ICart[]>([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);
  const [notification, setNotification] = useState('');

  const saveCartToLocalStorage = (cartItems: ICart[]) => {
    const cartToStore: IStoredCartItem[] = cartItems.map((cartItem) => ({
      itemId: cartItem.item.id,
      quantity: cartItem.quantity,
    }));

    localStorage.setItem('cart', JSON.stringify(cartToStore));
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]') as Array<IStoredCartItem>;

    const hydratedCart = storedCart
      .map((cartItem) => {
        const itemId = cartItem.itemId;

        const product = menu.find((product) => product.id === itemId);

        if (!product) return null;

        return {
          item: product,
          quantity: cartItem.quantity,
        };
      })
      .filter(Boolean) as ICart[];

    setCart(hydratedCart);
    saveCartToLocalStorage(hydratedCart);
    setIsCartLoaded(true);
  }, []);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, cartItem) => {
      return total + cartItem.item.price * cartItem.quantity;
    }, 0);
  }, [cart]);

  const removeProduct = (itemId: number) => {
    const updatedCart = cart.filter((product) => product.item.id !== itemId);

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const increaseQuantity = (itemId: number) => {
    const updatedCart = cart.map((product) => {
      if (product.item.id === itemId) {
        return { ...product, quantity: product.quantity + 1 };
      }

      return product;
    });

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const decreaseQuantity = (itemId: number) => {
    const updatedCart = cart.map((product) => {
      if (product.item.id === itemId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }

      return product;
    });

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    localStorage.removeItem('cart');
    setCart([]);

    setNotification('Thank you! Your order has been placed successfully.');

    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <main>
      <section className="bg-pink10 pt-14">
        <div className="container mx-auto text-center py-16 lg:py-20">
          <p className="font-fredoka font-semibold text-black50">
            <Link href="/">Home</Link> <span className="text-pink100">/ My Cart</span>
          </p>
          <h1 className="h1">My Cart</h1>
        </div>
      </section>

      <section className="container mx-auto py-20 lg:py-36 px-4">
        {notification && (
          <div className="mx-auto mb-8 max-w-[560px] rounded-2xl bg-pink10 px-6 py-4 text-center font-fredoka font-semibold text-pink100">
            {notification}
          </div>
        )}

        {!isCartLoaded ? (
          <div className="mx-auto max-w-[520px] text-center">
            <div className="mx-auto mb-6 h-10 w-2/3 animate-pulse rounded bg-pink10" />
            <div className="mx-auto mb-10 h-5 w-full animate-pulse rounded bg-pink10" />
            <div className="mx-auto h-12 w-[180px] animate-pulse rounded-full bg-pink10" />
          </div>
        ) : cart.length === 0 ? (
          <div className="mx-auto flex max-w-[560px] flex-col items-center text-center">
            <h2 className="mb-4 text-[32px] font-bold leading-tight md:text-[40px]">
              Your cart is empty.
            </h2>

            <p className="mb-8 text-base leading-7 text-black50 md:text-lg">
              Looks like you haven’t added anything yet. Explore our menu and find something sweet
              to enjoy.
            </p>

            <Link href="/menu">
              <PrimaryButton clasName="px-8">Continue Shopping</PrimaryButton>
            </Link>
          </div>
        ) : (
          <>
            <table className="w-full border-collapse border-spacing-2 text-left max-sm:hidden">
              <thead className="border-b border-black100">
                <tr>
                  <th className="py-2 font-semibold text-[22px] leading-9">Product</th>
                  <th className="py-2 font-semibold text-[22px] leading-9">Quantity</th>
                  <th className="py-2 font-semibold text-[22px] leading-9">Price</th>
                  <th className="py-2 font-semibold text-[22px] leading-9">Total</th>
                  <th className="py-2 font-semibold text-[22px] leading-9 hidden">Action</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((product) => (
                  <tr key={product.item.id} className="border-b border-black100">
                    <td className="flex items-center gap-2">
                      <Image
                        src={product.item.image}
                        width={100}
                        height={100}
                        alt={product.item.name}
                      />
                      <span className="font-bold text-2xl">{product.item.name}</span>
                    </td>

                    <td>
                      <div className="flex">
                        <button
                          type="button"
                          className="w-[43px] h-[43px] border-l border-t border-b rounded-tl rounded-bl border-light-gray disabled:cursor-not-allowed disabled:opacity-50"
                          onClick={() => decreaseQuantity(product.item.id)}
                          disabled={product.quantity === 1}
                        >
                          <span className="text-2xl">-</span>
                        </button>

                        <span className="w-[43px] h-[43px] flex items-center justify-center text-2xl border border-light-gray">
                          {product.quantity}
                        </span>

                        <button
                          type="button"
                          className="w-[43px] h-[43px] border-r border-t border-b rounded-tr rounded-br border-light-gray"
                          onClick={() => increaseQuantity(product.item.id)}
                        >
                          <span className="text-2xl">+</span>
                        </button>
                      </div>
                    </td>

                    <td className="font-fredoka font-semibold text-pink100">
                      ${product.item.price}
                    </td>

                    <td className="font-fredoka font-semibold text-pink100">
                      ${(product.item.price * product.quantity).toFixed(2)}
                    </td>

                    <td>
                      <button
                        type="button"
                        onClick={() => removeProduct(product.item.id)}
                        title="Delete"
                        className="w-[40px] h-[40px] lg:w-[54px] lg:h-[54px] rounded-full p-2 bg-pink10 flex items-center justify-center"
                      >
                        <DeleteIcon className="h-6 w-6" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ul className="sm:hidden">
              {cart.map((product) => (
                <li key={product.item.id} className="border-b border-black100 pt-4 pb-8">
                  <Image
                    src={product.item.image}
                    width={150}
                    height={150}
                    alt={product.item.name}
                    className="mb-3"
                  />

                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-2xl">{product.item.name}</span>

                    <button
                      type="button"
                      onClick={() => removeProduct(product.item.id)}
                      title="Delete"
                      className="w-[40px] h-[40px] lg:w-[54px] lg:h-[54px] rounded-full p-2 bg-pink10 flex items-center justify-center"
                    >
                      <DeleteIcon className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <button
                        type="button"
                        className="w-[43px] h-[43px] border-l border-t border-b rounded-tl rounded-bl border-light-gray disabled:cursor-not-allowed disabled:opacity-50"
                        onClick={() => decreaseQuantity(product.item.id)}
                        disabled={product.quantity === 1}
                      >
                        <span className="text-2xl">-</span>
                      </button>

                      <span className="w-[43px] h-[43px] flex items-center justify-center text-2xl border border-light-gray">
                        {product.quantity}
                      </span>

                      <button
                        type="button"
                        className="w-[43px] h-[43px] border-r border-t border-b rounded-tr rounded-br border-light-gray"
                        onClick={() => increaseQuantity(product.item.id)}
                      >
                        <span className="text-2xl">+</span>
                      </button>
                    </div>

                    <div>
                      <p className="font-semibold text-[22px] leading-9">Price</p>
                      <span className="font-fredoka font-semibold text-pink100">
                        ${product.item.price}
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-[22px] leading-9">Total</p>
                      <span className="font-fredoka font-semibold text-pink100">
                        ${(product.item.price * product.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex md:justify-end">
              <div className="w-full md:w-1/3">
                <div className="flex justify-between pb-8 mb-8 border-b border-black100">
                  <h2 className="text-[28px] font-bold">Total</h2>

                  <span className="font-fredoka font-semibold text-[28px] text-pink100">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <PrimaryButton onClick={handleCheckout} clasName="w-full mb-6">
                  Checkout
                </PrimaryButton>

                <Link href="/menu" className="underline text-pink100">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default MyCartPage;

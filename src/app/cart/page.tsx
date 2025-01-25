"use client";

import { useEffect, useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { useViewport } from "@/hooks";

import Delete from "../../../public/icons/delete.svg";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";

export interface ICart {
  item: {
    id: number;
    name: string;
    price: number;
    image: StaticImageData;
  },
  quantity: number;
}

const MyCartPage = () => {
  const { breakpoint } = useViewport();
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cart) setCart(cart);
  }, []);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, cartItem) => {
      return total + cartItem.item.price * cartItem.quantity;
    }, 0);
  }, [cart]);

  const removeProduct = (itemId: number) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = cart.filter((product: ICart) => product.item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const increaseQuantity = (itemId: number) => {
    const updatedCart = cart.map((product) => {
      if (product.item.id === itemId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  const decreaseQuantity = (itemId: number) => {
    const updatedCart = cart.map((product) => {
      if (product.item.id === itemId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <main>
      <section className="bg-pink10">
        <div className="container mx-auto text-center py-16 lg:py-20">
          <p className="font-fredoka font-semibold text-black50">Home <span className="text-pink100">/ My Cart</span></p>
          <h1 className="h1">My Cart</h1>
        </div>
      </section>
      <section className="container mx-auto py-20 lg:py-36 px-4">
        <>
          {breakpoint !== "small" ? (
            <table className="w-full border-collapse border-spacing-2 text-left">
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
                {cart.map((product: any) => (
                  <tr key={product.item.id} className="border-b border-black100">
                    <td className="flex items-center gap-2">
                      <Image src={product.item.image} width={100} height={100} alt={product.item.name} />
                      <span className="font-bold text-2xl">{product.item.name}</span>
                    </td>
                    <td>
                      <div className="flex">
                        <button
                          className="w-[43px] h-[43px] border-l border-t border-b rounded-tl rounded-bl border-light-gray"
                          onClick={() => decreaseQuantity(product.item.id)}
                          disabled={product.quantity === 1}
                        >
                          <span className="text-2xl">-</span>
                        </button>
                        <span className="w-[43px] h-[43px] flex items-center justify-center text-2xl border border-light-gray">{product.quantity}</span>
                        <button
                          className="w-[43px] h-[43px] border-r border-t border-b rounded-tr rounded-br border-light-gray"
                          onClick={() => increaseQuantity(product.item.id)}
                        >
                          <span className="text-2xl">+</span>
                        </button>
                      </div>
                    </td>
                    <td className="font-fredoka font-semibold text-pink100">${product.item.price}</td>
                    <td className="font-fredoka font-semibold text-pink100">${(product.item.price * product.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => removeProduct(product.item.id)}
                        title="Delete"
                        className="w-[40px] h-[40px] lg:w-[54px] lg:h-[54px] rounded-full p-2 bg-pink10 flex items-center justify-center"
                      >
                        <Delete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <ul>
              {cart.map((product: any) => (
                <li key={product.item.id} className="border-b border-black100 pt-4 pb-8">
                  <Image src={product.item.image} width={150} height={150} alt={product.item.name} className="mb-3" />
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-2xl">{product.item.name}</span>
                    <button
                      onClick={() => removeProduct(product.item.id)}
                      title="Delete"
                      className="w-[40px] h-[40px] lg:w-[54px] lg:h-[54px] rounded-full p-2 bg-pink10 flex items-center justify-center"
                    >
                      <Delete />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <button
                        className="w-[43px] h-[43px] border-l border-t border-b rounded-tl rounded-bl border-light-gray"
                        onClick={() => decreaseQuantity(product.item.id)}
                        disabled={product.quantity === 1}
                      >
                        <span className="text-2xl">-</span>
                      </button>
                      <span className="w-[43px] h-[43px] flex items-center justify-center text-2xl border border-light-gray">{product.quantity}</span>
                      <button
                        className="w-[43px] h-[43px] border-r border-t border-b rounded-tr rounded-br border-light-gray"
                        onClick={() => increaseQuantity(product.item.id)}
                      >
                        <span className="text-2xl">+</span>
                      </button>
                    </div>
                    <div>
                      <p className="font-semibold text-[22px] leading-9">Price</p>
                      <span className="font-fredoka font-semibold text-pink100">${product.item.price}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[22px] leading-9">Total</p>
                      <span className="font-fredoka font-semibold text-pink100">${(product.item.price * product.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex md:justify-end">
            <div className="w-full md:w-1/3">
              <div className="flex justify-between pb-8 mb-8 border-b border-black100">
                <h2 className="text-[28px] font-bold">Total</h2>
                <span  className="font-fredoka font-semibold text-[28px] text-pink100">${totalPrice.toFixed(2)}</span>
              </div>
              <PrimaryButton
                onClick={() => {}}
                clasName="w-full mb-6"
              >
                Checkout
              </PrimaryButton>
              <Link
                href="/menu"
                className="underline text-pink100"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </>
      </section>
    </main>
  )
}

export default MyCartPage;

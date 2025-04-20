"use client";

import Link from "next/link";

import CallIcon from "../../../public/icons/call-pink.svg";
import MailIcon from "../../../public/icons/mail-pink.svg";
import Timeicon from "../../../public/icons/time-pink.svg";

import { ContactForm } from "@/components/Forms/ContactForm";

const ContactsPage = () => {
  return (
    <main>
      <section className="bg-pink10">
        <div className="container mx-auto text-center py-16 lg:py-20">
          <p className="font-fredoka font-semibold text-black50">Home <span className="text-pink100">/ Contact us</span></p>
          <h1 className="h1">Contact us</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 pt-16 md:pt-20 pb-20 md:pb-36">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-28">
          <div className="basis-1/2">
            <p className="mb-4 text-2xl font-fredoka font-semibold text-pink100">Contact us</p>
            <h2 className="h2 mb-4">Get in Touch with Us</h2>
            <p className="text-black50 text-base/8">
              We would love to hear from you!
              If you have any questions, feedback, or inquiries, feel free to reach out to our friendly team.
              We're here to assist you and provide the best possible customer service.
            </p>
            <ul className="flex flex-col gap-y-6 mt-8">
              <li className="flex items-center gap-2">
                <span><MailIcon /></span>
                <Link href="mailto:example@gmail.com" className="hover:underline">
                  example@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span><CallIcon /></span>
                <Link href="tel:+12345678910" className="hover:underline">
                  +123 45678910
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span><Timeicon /></span>
                <span>Monday - Friday, 08 am - 05 pm</span>
              </li>
            </ul>
          </div>
          <div className="basis-1/2 border-grey10 border rounded-2xl py-10 px-5 lg:px-10">
            <h3 className="font-bold">Please use the contact details provided below to get in touch with us:</h3>
            <div className="w-full border-grey10 border-t my-11 lg:my-6"></div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactsPage;

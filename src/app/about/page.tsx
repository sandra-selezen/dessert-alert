import Image from "next/image";

import chef from "/public/images/chef.png";
import kid from "/public/images/kid.png";
import videoImg from "/public/images/video-image-min.png";
import chef1 from "/public/images/chef-01.png";
import chef2 from "/public/images/chef-02.png";
import chef3 from "/public/images/chef-03.png";

import { HappyCustomer } from "@/components/HappyCustomer/HappyCustomer";

const AboutPage = () => {
  return (
    <main>
      <section className="bg-pink10">
        <div className="container mx-auto text-center py-16 lg:py-20">
          <p className="font-fredoka font-semibold text-black50">Home <span className="text-pink100">/ About</span></p>
          <h1 className="h1">About</h1>
        </div>
      </section>
      <section className="container max-w-max mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 py-20 lg:py-36 px-4">
        <div className="flex gap-6">
          <div className="overflow-hidden w-[163px] h-[237px] lg:w-[259px] lg:h-[378px] relative -mt-6">
            <Image
              src={chef}
              alt="Chef with rolling pin"
              width={163}
              height={237}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden w-[163px] h-[237px] lg:w-[259px] lg:h-[378px] relative mt-6">
            <Image
              src={kid}
              alt="Kid with donuts"
              width={163}
              height={237}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-lg">
          <p className="mb-4 text-2xl font-fredoka font-semibold text-pink100">About us</p>
          <h2 className="h2 mb-4">Our History</h2>
          <p className="text-black50 text-base/8">
            Founded with a resolute commitment to addressing the pervasive issue of food deserts,
            Fofood has been empowering communities since its inception.
            Our journey began with a deep understanding of the challenges faced by individuals living in areas devoid of accessible, nutritious food options.
            Driven by the desire to make a meaningful impact, we set out to create sustainable solutions that ensure everyone has the opportunity to enjoy fresh, healthy, and affordable meals.
          </p>
        </div>
      </section>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pb-20 lg:pb-36 px-4">
        <div className="">
          <div className="w-[58px] h-[58px] flex items-center justify-center text-pink100 font-fredoka font-bold text-2xl mb-6 rounded-full bg-pink10">01</div>
          <h3 className="font-bold mb-4">Collective Collaboration</h3>
          <p className="text-black50 text-base/8">
            We believe that real change happens when we join forces. By partnering
            with local residents, organizations, farmers, and businesses, we create a
            network of support, working together to establish sustainable solutions
            that break down barriers to food access.
          </p>
        </div>

        <div className="mt-8 md:mt-12">
          <div className="w-[58px] h-[58px] flex items-center justify-center text-pink100 font-fredoka font-bold text-2xl mb-6 rounded-full bg-pink10">02</div>
          <h3 className="font-bold mb-4">Commitment to Community</h3>
          <p className="text-black50 text-base/8">
            At Fofood, our mission is simple – ensuring equitable access to fresh,
            healthy, and affordable food for all. We are dedicated to empowering
            communities affected by food deserts and improving overall well-being.
          </p>
        </div>

        <div className=" mt-8 md:mt-20">
          <div className="w-[58px] h-[58px] flex items-center justify-center text-pink100 font-fredoka font-bold text-2xl mb-6 rounded-full bg-pink10">03</div>
          <h3 className="font-bold mb-4">Technology-driven Impact</h3>
          <p className="text-black50 text-base/8">
            Embracing the power of technology, we leverage our online platform to
            reach and empower a wider audience. Through our website, we provide
            valuable resources, including recipes, tips, and educational content,
            making healthy eating accessible to all and fostering positive change.
          </p>
        </div>
      </section>
      <section className="pb-20 lg:pb-36">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-16 px-4">
          <div className="basis-1/2">
            <Image
              src={videoImg}
              height={201}
              width={343}
              alt="ddd"
              className="w-full h-auto"
            />
          </div>
          <div className="basis-1/2">
            <h2 className="h2">One Meal at a Time</h2>
            <p className="text-black50 text-base/8">Through collaborative efforts with local residents, organizations, and key stakeholders, we have established a strong network of support.
              Over the years, we have implemented various initiatives such as community gardens, mobile markets, and educational programs focused on nutrition and culinary skills.
              By fostering community engagement and leveraging technology, we have amplified our impact and connected individuals to vital resources.
              Our history is rooted in the success stories of individuals and families who have gained improved access to nutritious food, leading to enhanced well-being and a stronger sense of community.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-20 lg:pb-36 px-4">
        <p className="mb-4 text-2xl font-fredoka text-center font-semibold text-pink100">Our Chef</p>
        <h2 className="h2 mb-8 lg:mb-24 text-center">Meet Our Talented Chef</h2>
        <div className="container mx-auto justify-center flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="max-[925px]:mx-auto">
            <div className="relative w-[330px] h-[415px] mb-6 px-6 bg-pink50 rounded-[32px]">
              <Image src={chef1} width={320} height={512} alt="Chef" className="w-full h-full object-contain" />
            </div>
            <h3 className="mb-2 font-bold text-center text-2xl">Chef Ethan Mitchell</h3>
            <p className="text-center text-black50 text-xl">Executive Chef</p>
          </div>
          <div className="max-[925px]:mx-auto max-[925px]:mt-20">
            <div className="relative w-[330px] h-[415px] mb-6 px-6 bg-pink50 rounded-[32px]">
              <Image src={chef2} width={320} height={512} alt="Chef" className="absolute bottom-0 left-1/2 translate-x-[-50%]" />
            </div>
            <h3 className="mb-2 font-bold text-center text-2xl">Chef Marcus Thompson</h3>
            <p className="text-center text-black50 text-xl">Head Chef</p>
          </div>
          <div className="max-[925px]:mx-auto">
            <div className="relative w-[330px] h-[415px] mb-6 px-6 bg-pink50 rounded-[32px]">
              <Image src={chef3} width={320} height={512} alt="Chef" className="w-full h-full object-contain" />
            </div>
            <h3 className="mb-2 font-bold text-center text-2xl">Chef Alexander Scott</h3>
            <p className="text-center text-black50 text-xl">Food Advocate</p>
          </div>
        </div>
      </section>
      <section className="pb-20 lg:pb-36 px-4">
        <HappyCustomer />
      </section>
    </main>
  )
}

export default AboutPage;

export const HappyCustomer = () => {
  return (
    <div className="container mx-auto bg-pink10 bg-cupcake-pattern bg-top bg-no-repeat bg-cover py-10 lg:py-20 px-4 rounded-[24px]">
      <p className="mb-4 text-2xl font-fredoka text-center font-semibold text-pink100">
        Testimonial
      </p>
      <h2 className="h2 mb-10 lg:mb-16 text-center">What People Say</h2>
      <div className="max-w-[596px] mx-auto p-8 text-center bg-white rounded-[24px]">
        <img
          src="/images/customer-03.png"
          width="14"
          height="14"
          alt="Customer"
          className="w-14 h-14 mx-auto mb-4 rounded-full border-4 border-white"
        />
        <h3 className="mb-4 text-lg font-bold">It’s very delicious!</h3>
        <p className="text-black50 text-base/8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet venenatis a vel id tincidunt
          volutpat faucibus scelerisque. Morbi eget turpis aliquet nunc, varius aliquam ipsum.
        </p>
      </div>
    </div>
  );
};

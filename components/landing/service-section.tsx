const ServiceSection = () => {
  return (
    <section className="mt-16 flex gap-5 bg-primary py-12 px-10">
      <div className="flex-1 text-center">
        <h4 className="mb-4 font-bold uppercase tracking-wide">customer service</h4>
        <p className="text-lg">We are available from monday to friday to answer your questions.</p>
      </div>
      <div className="flex-1 text-center">
        <h4 className="mb-4 font-bold uppercase tracking-wide">Secure Payment</h4>
        <p className="text-lg">Your payment information is processed securely.</p>
      </div>
      <div className="flex-1 text-center">
        <h4 className="mb-4 font-bold uppercase tracking-wide">contact us</h4>
        <p className="text-lg">
          Need to contact us ? Just send us an e-mail at info@sampitsports.co.id
        </p>
      </div>
    </section>
  );
};

export default ServiceSection;

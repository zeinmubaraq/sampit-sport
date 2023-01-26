import Link from 'next/link';

const FaqsSection = () => {
  return (
    <section className="relative my-5 py-20 before:absolute before:inset-y-0 before:right-0 before:w-1/3 before:bg-primary ">
      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-10">
        <div className="flex-1 text-center">
          <span className="mb-5 block font-bold uppercase tracking-widest">Faqs</span>
          <h2 className="text-5xl font-bold uppercase leading-tight text-stone-800">
            How does shaft stiffness impact performance?
          </h2>
          <Link
            href="#"
            className="mt-10 block text-lg underline decoration-slate-400 underline-offset-4 transition-all duration-200 hover:decoration-slate-900"
          >
            Read our FAQs
          </Link>
        </div>
        <div className="w-1/2 px-20 pr-10">
          <img src="/assets/img/faqs.jpg" alt="faqs" />
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;

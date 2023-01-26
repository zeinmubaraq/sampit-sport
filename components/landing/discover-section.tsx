import Link from 'next/link';

const DiscoverSection = () => {
  return (
    <section
      className="relative mt-20 py-20"
      style={{ backgroundImage: 'url(/assets/img/discover.jpg)' }}
    >
      <div className="absolute inset-x-0 inset-y-0 bg-black/40"></div>
      <div className="relative z-10 text-center">
        <span className="mb-8 block font-bold uppercase tracking-widest text-white">discover</span>
        <h2 className="text-7xl font-bold uppercase text-white">
          the player&apos;s
          <span className="block">collection</span>
        </h2>
        <div className="mt-10 flex justify-center gap-24">
          <Link
            href="#"
            className="inline-block bg-primary px-10 py-3 font-bold uppercase hover:bg-yellow-300"
          >
            shop women
          </Link>
          <Link
            href="#"
            className="inline-block bg-primary px-10 py-3 font-bold uppercase hover:bg-yellow-300"
          >
            shop men
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;

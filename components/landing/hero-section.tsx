import Image from 'next/image';
import Link from 'next/link';
import bg from '../../public/assets/img/bg-landing.jpg';

const HeroSection = () => {
  return (
    <section className="relative py-10">
      <div
        className="absolute inset-x-0 inset-y-0 bg-cover bg-center grayscale"
        style={{ backgroundImage: 'url(/assets/img/bg-landing.jpg)' }}
      ></div>
      <div className="relative mx-auto max-w-7xl px-20 pt-16 pb-16">
        <p className="mb-5 pl-1 text-base font-medium uppercase tracking-widest text-white">
          Explore
        </p>
        <h2 className="mb-10 text-7xl font-extrabold uppercase tracking-wide text-white">
          Rackets
        </h2>
        <p className="mb-1 text-2xl font-bold uppercase text-white">
          Free Upgrader: Grip / String /
        </p>
        <p className="mb-10 text-2xl font-bold uppercase text-white">personalisation</p>
        <Link
          href="#"
          className="inline-block bg-primary px-8 py-3 font-bold tracking-widest transition-all ease-in-out hover:bg-yellow-300"
        >
          SHOP
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

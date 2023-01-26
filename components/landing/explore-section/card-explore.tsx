import Link from 'next/link';

type Props = {
  src: string;
  name: string;
};

const CardExplore = ({ src, name }: Props) => {
  return (
    <div className="relative w-full overflow-hidden">
      <span className="absolute top-3 left-3 z-10 bg-primary px-2 py-2 text-sm font-semibold uppercase">
        Discover More
      </span>
      <Link href="#" className="group">
        <img
          src={src}
          alt={name}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </Link>
      <p className="mt-5 text-center text-3xl font-bold uppercase text-stone-800">{name}</p>
    </div>
  );
};

export default CardExplore;

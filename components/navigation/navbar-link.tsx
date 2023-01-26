import Link from 'next/link';

type Props = {
  href: string;
  name: string;
};

const NavbarLink = ({ href, name }: Props) => {
  return (
    <Link href={href} className="underline-slide relative inline-block text-lg font-medium">
      {name}
    </Link>
  );
};

export default NavbarLink;

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-20">
      <div className="mx-auto flex max-w-7xl items-start gap-5 px-2">
        <div className="flex-1">
          <h3 className="mb-5 font-bold uppercase tracking-widest text-white">newsletter</h3>
          <p className="text-white">Sign up to our newsletter</p>
        </div>
        <div className="flex-1">
          <h3 className="mb-5 font-bold uppercase tracking-widest text-white">Contact Details</h3>
          <p className="mb-5 font-bold tracking-wide text-white">Sampit Sports ID Ltd</p>
          <p className="capitalize leading-loose text-white">Lumberjack Building</p>
          <p className="capitalize leading-loose text-white">66 Jhons Road</p>
          <p className="capitalize leading-loose text-white">batvia</p>
          <p className="capitalize leading-loose text-white">indonesia</p>
          <p className="capitalize leading-loose text-white">147334</p>
        </div>
        <div className="flex-1">
          <div>
            <p className="capitalize leading-loose text-white">
              <strong>Tel: </strong>+62 8823 1238
            </p>
            <p className="capitalize leading-loose text-white">
              <strong>fax: </strong>+62 8823 1238
            </p>
            <p className="leading-loose text-white">
              <strong>Email: </strong>info@sampitsport.co.id
            </p>
          </div>

          <div className="mt-5">
            <p className="capitalize leading-loose text-white">
              <strong>Reg No: </strong>34253442
            </p>
            <p className="capitalize leading-loose text-white">
              <strong>vat No: </strong>sdf34253442
            </p>
          </div>

          <div className="mt-5">
            <Link
              href="#"
              className="block font-bold capitalize leading-loose text-white underline decoration-slate-500 hover:decoration-slate-100"
            >
              Term & Conditions
            </Link>
            <Link
              href="#"
              className="block font-bold capitalize leading-loose text-white underline decoration-slate-500 hover:decoration-slate-100"
            >
              returns policy
            </Link>
            <Link
              href="#"
              className="block font-bold capitalize leading-loose text-white underline decoration-slate-500 hover:decoration-slate-100"
            >
              delivery policy
            </Link>
            <Link
              href="#"
              className="block font-bold leading-loose text-white underline decoration-slate-500 hover:decoration-slate-100"
            >
              GDPR
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="mb-5 font-bold uppercase tracking-widest text-white">
            shop opening hours
          </h3>
          <p className="leading-loose text-white">Mon-Fri: 8.00 - 4.15pm</p>
          <p className="capitalize leading-loose text-white">Saturday: 9.00 - 1pm</p>
          <p className="uppercase leading-loose text-white">bank holidays: closed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

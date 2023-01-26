import NavbarLink from './navbar-link';
import SearchIcon from '../icon/search-icon';
import UserIcon from '../icon/user-icon';
import ShoppingIcon from '../icon/shopping-icon';

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 bg-black">
      <div className="mx-auto max-w-7xl px-2 text-white">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-7xl font-extrabold uppercase leading-none">SS</span>
            <div className="flex flex-col text-lg uppercase tracking-widest">
              <span className=" font-light leading-none">sampit</span>
              <span className="font-light leading-none">sport</span>
            </div>
          </div>

          <div className="flex gap-10">
            <NavbarLink href="#" name="Rackets" />
            <NavbarLink href="#" name="Shoes" />
            <NavbarLink href="#" name="Bags" />
            <NavbarLink href="#" name="Clothings" />
            <NavbarLink href="#" name="Accessories" />
            <NavbarLink href="#" name="Strings" />
          </div>
          <div className="flex items-center gap-5">
            <SearchIcon />
            <UserIcon />
            <ShoppingIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

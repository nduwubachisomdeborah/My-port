import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      <a
        href="mailto:nduwubachisomdeborah@gmail.com?subject=You're%20Hired!&body=Hi,%20you're%20hired!%20Kindly%20send%20in%20your%20resume."
        className="flex items-center gap-1"
      >
        Hire Me
      </a>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;

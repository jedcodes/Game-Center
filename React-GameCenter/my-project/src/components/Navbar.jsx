import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <ul className="p-10 mt-10 text-white">
      {navLinks.map((item) => (
        <li key={item.label} className="text-lg my-10">
          <Link to={item.herf} className="flex">
            <img src={item.icons} width="20px" className="mr-2" />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;

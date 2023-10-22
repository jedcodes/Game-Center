import { GoSearch, GoBell } from "react-icons/go";
import { Profile } from "./";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex basis-[50%] bg-[#292929] py-4 px-8 rounded-full">
        <GoSearch size={25} />
        <input
          placeholder="Search game title..."
          type="text"
          className="flex-1 bg-transparent border-none w-[90%] focus:outline-none ml-2"
        />
      </div>
      <div className="flex items-center">
        <GoBell size={25} className="mr-5" />
        <Profile />
      </div>
    </div>
  );
};

export default Header;

import { BsGithub, BsSearch } from "react-icons/bs";
function Nav({ value, onChange, handleKeyDown }) {
  return (
    <header>
      <div className="flex gap-4 items-center h-[72px] bg-[#0064EB] p-2">
        <BsGithub className="text-white text-[2rem] ml-[2rem]" />
        <div className="flex items-center gap-2 bg-[#fff] p-2  rounded-md w-[500px]">
          <BsSearch />
          <input
            type="text"
            className="w-full outline-none placeholder:text-[14px]  "
            placeholder="Enter Username..."
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </header>
  );
}
export default Nav;

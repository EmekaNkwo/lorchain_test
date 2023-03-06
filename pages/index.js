import Nav from "../components/Nav";
import { useState } from "react";
import { UserInfo } from "../components";
import { debounce } from "lodash";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("");

  const handleSearch = debounce((value) => {
    console.log(value);
  }, 500);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setUsername(search);
      handleSearch(username);
    }
  };

  return (
    <div className="bg-[#eeeeee] min-h-screen">
      <Nav
        value={search}
        onChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      {username === "" ? (
        <div className="flex items-center gap-2 flex-col justify-center  h-[calc(100vh-72px)]">
          <FaSearch className="text-[2rem]" />
          <p className="text-[1.8rem] text-center">
            Start with Searching <br /> a Github User
          </p>
        </div>
      ) : (
        <UserInfo username={username} />
      )}
    </div>
  );
}

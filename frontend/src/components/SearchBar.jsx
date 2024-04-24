import { search } from "../assets";

const SearchBar = ({ searchTerm, changeFunction }) => {
  return (
    <form className="">
      <label
        className="w-full flex p-4 justify-start"
        htmlFor="search-input"
      >
        <div className="flex w-[550px] mx-auto items-center">
          <div className=" relative flex-1">
            <di
              className={`ml-1 h-[70px] justify-center inline-flex items-center rounded-full  w-[40px] absolute`}
            >
              <img src={search} className={`p-1`} />
            </di>
            <div className="left-3  text-gray-700" />
            <input id="search-input"
              type="text"
              className="h-[70px] rounded-full font-poppins w-full rounded- border border-slate-800 bg-slate-950 py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 text-white hover:bg-slate-900"
              placeholder="Busque aqui por itens..."
              value={searchTerm}
              onChange={changeFunction}
            />
          </div>
        </div>
      </label>
    </form>
  );
};

export default SearchBar;


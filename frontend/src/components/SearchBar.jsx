// import { clients } from "../constants";
import { search } from "../assets";

const SearchBar = ({ searchTerm, changeFunction }) => {
  return (
    <form className="w-full block rounded-lg sm:px-5 sm:py-3 text-sm font-medium transition focus:outline-none focus:ring ">
      <label
        className=" w-[110%] h-full flex sm:p-4 items-center justify-center"
        htmlFor="search-input"
      >
        <input
          id="search-input"
          type="text"
          className="hover:bg-slate-900 font-pirata mx-[5px] my-[25px] box-border h-[60px] w-[calc(100%-10px)] max-w-[660px] appearance-none rounded-full border-[1px] border-l-4 border-solid border-slate-900 py-0 pl-[16px] pr-[35px] text-white outline-none placeholder:text-[#a1a1a1] focus:border-ing-blue-400 bg-black"
          placeholder="Busque aqui por itens..."
          value={searchTerm}
          onChange={changeFunction}
        />
        <button
          type="submit"
          className={`right-14 justify-center inline-flex items-center rounded-full  w-[40px] relative `}
        >
          <img src={search} className={`p-1`} />
        </button>
      </label>
    </form>
  );
};

export default SearchBar;

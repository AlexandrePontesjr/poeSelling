// import { clients } from "../constants";
import { search } from "../assets"
import styles from "../styles";

const SearchBar = () => (
    <form className={`${styles.boxWidth}`}>
        <label className=" flex p-4 items-center justify-center" htmlFor="search-input">
            <input id="search-input" type="text" className="mx-[5px] my-[25px] box-border h-[48px] w-[calc(100%-10px)] max-w-[660px] appearance-none rounded-full border-[1px] border-l-4 border-solid border-slate-900 py-0 pl-[16px] pr-[35px] text-white outline-none placeholder:text-[#a1a1a1] font-poppins focus:border-ing-blue-400 bg-black" placeholder="Search Here" />
            <button type="submit" className={`right-14 justify-center inline-flex items-center rounded-full  w-[40px] relative hover:bg-slate-400 `}>
                <img src={search} className={`p-1`}/>
            </button>

        </label>
    </form>
);

export default SearchBar;

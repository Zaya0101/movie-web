import MovieZIcon from "../_icons/MovieZIcon";

export function Header() {
  return (
    <div className="flex  justify-between items-center max-w-[1440px] h-[50px] px-[20px] mx-auto">
      <div className="flex items-center gap-2 text-indigo-500 font-semibold text-lg">
        <MovieZIcon />
        <span className="italic">Movie Z</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-50 transition text-sm">
          <img src="/genre.svg" />
          <span>Genre</span>
        </button>
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-[250px]">
          <input
            type="text"
            placeholder="Search..."
            className="ml-2  text-sm outline-none text-gray-600"
          />
        </div>
      </div>
      <button className="p-2 rounded-md hover:bg-gray-50 transition">
        <img className="w-[36px] h-[36px]" src="/moon.png" />
      </button>
    </div>
  );
}

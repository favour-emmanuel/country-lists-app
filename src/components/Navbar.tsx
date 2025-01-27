import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="w-full lg:px-12 px-6 lg:py-5 py-5 bg- dark:bg-appBlack dark:text-white text-appBlack shadow-md flex justify-between items-center gap-3">
      <h1 className="text-sm sm:text-[17.5px] font-bold text-appGreen">
        Where in the World?
      </h1>
      <div className="flex items-center gap-2">
        <h2 className="font-semibold text-xs sm:text-sm ">Change Theme</h2>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;

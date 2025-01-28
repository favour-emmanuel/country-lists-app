import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 lg:px-12 px-6 lg:py-6 py-5 bg-appWhite dark:bg-appBlack dark:border-b dark:border-b-appGreen/20 dark:text-white text-appBlack shadow-md flex justify-between items-center gap-3 z-50">
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

import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="w-full lg:px-12 px-6 lg:py-5 py-5 bg-appWhite text-appBlack dark:bg-black dark:text-appWhite shadow-md flex justify-between items-center">
      <h1 className="text-base md:text-[17.5px] font-bold text-appGreen">
        Where in the World?
      </h1>
      <div className="flex items-center gap-2">
        <h2 className="font-semibold text-sm">Change Theme</h2>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;

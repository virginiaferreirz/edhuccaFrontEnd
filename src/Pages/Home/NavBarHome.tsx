import logo from "../../img/logo.png";

export const NavbarHome = () => {
  return (
    <div className="fixed w-full bg-gradient-to-r from-blue-300 via-green-400 to-green-500">
      <div className="h-10vh flex justify-between z-50 text-grey lg:py-3 px-40 py-1.5 flex-1 shadow-md mb-1 bg-white">
        <div className="flex w-36 items-center bg-white">
          <img className="bg-white w-96 h-14" src={logo} alt="logo" />
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end font-normal hidden bg-white"></div>
      </div>
    </div>
  );
};

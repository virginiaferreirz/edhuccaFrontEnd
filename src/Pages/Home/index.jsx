import logo from "../../../public/logo.png"

const Home = () => {

  return (
    <div className="h-screen flex">
      <div className="w-1/2 bg-gradient-to-r from-blue-300 via-green-300 to-green-400 hidden lg:block"></div> 
      <div className="w-1/2 bg-white px-4 py-2">
        <div className="w-48 w bg-white flex items-center justify-center">
                <img className="bg-white" src={logo} alt="logo" />
        </div>
        <div className="">
            <h1>Portal Oportunidade</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
